"use client";
import { FC } from "react";
import { Modal } from "react-responsive-modal";
import {
  layout,
  spacing,
  typography,
  colors,
  interactive,
  cards,
} from "@/styles/tailwindClasses";
import dayjs from "dayjs";
import "react-responsive-modal/styles.css";
import styles from "./ConferenceRegistrationModal.module.css";

// Импорты из созданных файлов
import { ConferenceRegistrationModalProps } from "./types";
import { useConferenceRegistration } from "./useConferenceRegistration";
import { 
  FORM_FIELDS, 
  FORM_SECTIONS, 
  MESSAGES, 
  HONEYPOT_CONFIG 
} from "./constants";
import { createMessageClasses } from "./utils";

/**
 * Модальное окно для регистрации на конференцию
 * 
 * Компонент предоставляет форму регистрации с валидацией полей,
 * защитой от ботов (honeypot + reCAPTCHA) и отправкой данных на сервер.
 * 
 * @param open - открыто ли модальное окно
 * @param setOpen - функция для управления состоянием открытия
 * @param conference - данные конференции для регистрации
 */
const ConferenceRegistrationModal: FC<ConferenceRegistrationModalProps> = ({
  open,
  setOpen,
  conference,
}) => {
  // Используем кастомный хук для управления состоянием формы
  const {
    formData,
    errors,
    touched,
    isSubmitting,
    submitMessage,
    honeypot,
    handleInputChange,
    handleBlur,
    handleSubmit,
    handleClose,
    renderField,
    setHoneypot,
  } = useConferenceRegistration(conference, setOpen);

  // Обработчик изменения honeypot поля
  const handleHoneypotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHoneypot(e.target.value);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      center
      classNames={{ modal: styles.rootModal }}
    >
      <div className={`${layout.flexCol} ${spacing.gap6}`}>
        {/* Заголовок модального окна */}
        <div className={`${layout.flexCol} ${spacing.gap2}`}>
          <h2 className={`${typography.h2} ${colors.primary}`}>
            Регистрация на конференцию
          </h2>
          <p className={`${typography.textBase} text-gray-600`}>
            {conference.attributes.title}
          </p>
          <p className={`${typography.textSm} text-gray-600`}>
            📅{" "}
            {dayjs(conference.attributes.conferenceDateStart).format(
              "DD.MM.YYYY"
            )}{" "}
            -{" "}
            {dayjs(conference.attributes.conferenceDateEnd).format(
              "DD.MM.YYYY"
            )}
          </p>
        </div>

        {/* Форма регистрации */}
        <form
          onSubmit={handleSubmit}
          className={`${layout.flexCol} ${spacing.gap4}`}
        >
          {/* Honeypot поле для защиты от ботов - скрытое поле, которое должны заполнить только боты */}
          <div style={HONEYPOT_CONFIG.STYLE}>
            <input
              type="text"
              name={HONEYPOT_CONFIG.FIELD_NAME}
              value={honeypot}
              onChange={handleHoneypotChange}
              {...HONEYPOT_CONFIG.ATTRIBUTES}
            />
          </div>

          {/* Секция: Личные данные */}
          <div className={`${layout.flexCol} ${spacing.gap3}`}>
            <h3 className={`${typography.h3} ${colors.primary}`}>
              {FORM_SECTIONS.PERSONAL}
            </h3>

            {Object.entries(FORM_FIELDS.PERSONAL_DATA).map(([fieldName, config]) => (
              <div key={fieldName}>
                {renderField({
                  name: fieldName as keyof typeof formData,
                  config: config as any,
                })}
              </div>
            ))}
          </div>

          {/* Секция: Профессиональная информация */}
          <div className={`${layout.flexCol} ${spacing.gap3}`}>
            <h3 className={`${typography.h3} ${colors.primary}`}>
              {FORM_SECTIONS.PROFESSIONAL}
            </h3>

            {Object.entries(FORM_FIELDS.PROFESSIONAL_DATA).map(([fieldName, config]) => (
              <div key={fieldName}>
                {renderField({
                  name: fieldName as keyof typeof formData,
                  config: config as any,
                })}
              </div>
            ))}
          </div>

          {/* Секция: Дополнительная информация */}
          <div className={`${layout.flexCol} ${spacing.gap3}`}>
            <h3 className={`${typography.h3} ${colors.primary}`}>
              {FORM_SECTIONS.ADDITIONAL}
            </h3>
            {Object.entries(FORM_FIELDS.ADDITIONAL_DATA).map(([fieldName, config]) => (
              <div key={fieldName}>
                {renderField({
                  name: fieldName as keyof typeof formData,
                  config: config as any,
                })}
              </div>
            ))}
          </div>

          {/* Сообщение о результате отправки формы */}
          {submitMessage && (
            <div
              className={createMessageClasses(
                submitMessage.type,
                `${cards.card} ${spacing.p4}`
              )}
            >
              {submitMessage.message}
            </div>
          )}

          {/* Кнопки управления формой */}
          <div
            className={`${layout.flexCol} ${spacing.gap3} sm:${layout.flexRow} sm:${spacing.gap4}`}
          >
            <button
              type="button"
              onClick={handleClose}
              disabled={isSubmitting}
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {MESSAGES.UI.CANCEL_BUTTON}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`${interactive.buttonPrimary} px-6 py-3 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? MESSAGES.UI.SUBMIT_BUTTON_LOADING : MESSAGES.UI.SUBMIT_BUTTON_DEFAULT}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ConferenceRegistrationModal;
export type { ConferenceRegistrationModalProps };
