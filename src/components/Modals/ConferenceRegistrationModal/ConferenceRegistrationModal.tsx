"use client";
import { FC, useState } from "react";
import { Modal } from "react-responsive-modal";
import { SingleConference } from "@/types/ConferencesType";
import {
  layout,
  spacing,
  typography,
  colors,
  interactive,
  cards,
  responsive,
} from "@/styles/tailwindClasses";
import dayjs from "dayjs";
import "react-responsive-modal/styles.css";
import styles from "./ConferenceRegistrationModal.module.css";
import {
  conferenceRegistrationSchema,
  ConferenceRegistrationFormData,
} from "./validationSchema";
import { ZodError } from "zod";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import InputMask from "react-input-mask";
import { cleanPhoneNumber } from "@/lib/phoneValidation";

export type ConferenceRegistrationModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  conference: SingleConference;
};

const ConferenceRegistrationModal: FC<ConferenceRegistrationModalProps> = ({
  open,
  setOpen,
  conference,
}) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formData, setFormData] = useState<ConferenceRegistrationFormData>({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    phone: "",
    organization: "",
    position: "",
    academicDegree: "",
    specialization: "",
    additionalInfo: "",
  });

  // Honeypot поле для защиты от ботов
  const [honeypot, setHoneypot] = useState("");

  const [errors, setErrors] = useState<
    Partial<Record<keyof ConferenceRegistrationFormData, string>>
  >({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof ConferenceRegistrationFormData, boolean>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const validateField = (
    name: keyof ConferenceRegistrationFormData,
    value: string
  ) => {
    try {
      const fieldSchema = conferenceRegistrationSchema.shape[name];
      if (fieldSchema) {
        fieldSchema.parse(value);
        return "";
      }
    } catch (error) {
      if (error instanceof ZodError) {
        return error.errors[0]?.message || "";
      }
    }
    return "";
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    const fieldName = name as keyof ConferenceRegistrationFormData;

    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));

    // Валидация в реальном времени только для заполненных полей
    if (touched[fieldName]) {
      const error = validateField(fieldName, value);
      setErrors((prev) => ({
        ...prev,
        [fieldName]: error,
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    const fieldName = name as keyof ConferenceRegistrationFormData;

    setTouched((prev) => ({
      ...prev,
      [fieldName]: true,
    }));

    const error = validateField(fieldName, value);
    setErrors((prev) => ({
      ...prev,
      [fieldName]: error,
    }));
  };

  const validateForm = (): boolean => {
    try {
      conferenceRegistrationSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof ZodError) {
        const newErrors: Partial<
          Record<keyof ConferenceRegistrationFormData, string>
        > = {};
        error.errors.forEach((err) => {
          const fieldName = err.path[0] as keyof ConferenceRegistrationFormData;
          newErrors[fieldName] = err.message;
        });
        setErrors(newErrors);

        // Отмечаем все поля как touched для показа ошибок
        const allTouched: Partial<
          Record<keyof ConferenceRegistrationFormData, boolean>
        > = {};
        Object.keys(formData).forEach((key) => {
          allTouched[key as keyof ConferenceRegistrationFormData] = true;
        });
        setTouched(allTouched);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      // Проверяем honeypot поле
      if (honeypot) {
        throw new Error("Форма заблокирована");
      }

      // Получаем reCAPTCHA токен
      if (!executeRecaptcha) {
        throw new Error("reCAPTCHA не загружен");
      }

      const recaptchaToken = await executeRecaptcha("conference_registration");

      // Очищаем номер телефона от маски
      const cleanPhone = cleanPhoneNumber(formData.phone);

      const requestBody = {
        data: {
          conferenceId: conference.id,
          conferenceName: conference.attributes.title,
          name: `${formData.lastName} ${formData.firstName} ${formData.middleName}`,
          phoneNumber: cleanPhone,
          email: formData.email,
          organization: formData.organization,
          position: formData.position,
          degree: formData.academicDegree,
          academicDegree: formData.academicDegree,
          specialization: formData.specialization,
          additionalInfo: formData.additionalInfo,
        },
        recaptchaToken,
        honeypot,
      };

      console.log(requestBody);

      const response = await fetch("/api/conference-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      setSubmitMessage({
        type: "success",
        message:
          "Регистрация успешно отправлена! Мы свяжемся с вами в ближайшее время.",
      });

      // Очистка формы через 3 секунды
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          middleName: "",
          email: "",
          phone: "",
          organization: "",
          position: "",
          academicDegree: "",
          specialization: "",
          additionalInfo: "",
        });
        setErrors({});
        setTouched({});
        setSubmitMessage(null);
        setOpen(false);
      }, 3000);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Произошла ошибка при отправке формы. Попробуйте еще раз.";
      setSubmitMessage({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setOpen(false);
      setSubmitMessage(null);
      setErrors({});
      setTouched({});
    }
  };

  const renderField = (
    name: keyof ConferenceRegistrationFormData,
    label: string,
    type: "text" | "email" | "tel" = "text",
    required: boolean = false,
    placeholder?: string,
    rows?: number
  ) => {
    const hasError = touched[name] && errors[name];
    const hasSuccess = touched[name] && !errors[name] && formData[name];

    return (
      <div
        className={`${styles.formControl} ${hasError ? styles.error : ""} ${
          hasSuccess ? styles.success : ""
        }`}
      >
        <label htmlFor={name}>{label}</label>
        {rows ? (
          <textarea
            id={name}
            name={name}
            value={formData[name] || ""}
            onChange={handleInputChange}
            onBlur={handleBlur}
            required={required}
            placeholder={placeholder}
            rows={rows}
          />
        ) : name === "phone" ? (
          <InputMask
            mask="+7 (999) 999-99-99"
            maskChar="_"
            value={formData[name] || ""}
            onChange={handleInputChange}
            onBlur={handleBlur}
            required={required}
            placeholder="+7 (___) ___-__-__"
          >
            {(inputProps: any) => (
              <input
                {...inputProps}
                type="tel"
                id={name}
                name={name}
              />
            )}
          </InputMask>
        ) : (
          <input
            type={type}
            id={name}
            name={name}
            value={formData[name] || ""}
            onChange={handleInputChange}
            onBlur={handleBlur}
            required={required}
            placeholder={placeholder}
          />
        )}
        {hasError && <div className={styles.errorMessage}>{errors[name]}</div>}
      </div>
    );
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      center
      classNames={{ modal: styles.rootModal }}
    >
      <div className={`${layout.flexCol} ${spacing.gap6}`}>
        {/* Заголовок */}
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

        {/* Форма */}
        <form
          onSubmit={handleSubmit}
          className={`${layout.flexCol} ${spacing.gap4}`}
        >
          {/* Honeypot поле для защиты от ботов */}
          <div style={{ position: 'absolute', left: '-9999px', opacity: 0 }}>
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          {/* Личные данные */}
          <div className={`${layout.flexCol} ${spacing.gap3}`}>
            <h3 className={`${typography.h3} ${colors.primary}`}>
              Личные данные
            </h3>

            {renderField("lastName", "Фамилия", "text", true)}
            {renderField("firstName", "Имя", "text", true)}
            {renderField("middleName", "Отчество")}
            {renderField("email", "Email", "email", true)}
            {renderField("phone", "Телефон", "tel", true)}
          </div>

          {/* Профессиональная информация */}
          <div className={`${layout.flexCol} ${spacing.gap3}`}>
            <h3 className={`${typography.h3} ${colors.primary}`}>
              Профессиональная информация
            </h3>

            {renderField("organization", "Организация", "text", false)}
            {renderField("position", "Должность")}

            <div
              className={`${styles.formControl} ${
                touched.academicDegree && errors.academicDegree
                  ? styles.error
                  : ""
              } ${
                touched.academicDegree &&
                !errors.academicDegree &&
                formData.academicDegree
                  ? styles.success
                  : ""
              }`}
            >
              <label htmlFor="academicDegree">Ученая степень</label>
              <select
                id="academicDegree"
                name="academicDegree"
                value={formData.academicDegree || ""}
                onChange={handleInputChange}
                onBlur={handleBlur}
              >
                <option value="">Выберите степень</option>
                <option value="candidate">Кандидат наук</option>
                <option value="doctor">Доктор наук</option>
                <option value="none">Нет ученой степени</option>
              </select>
              {touched.academicDegree && errors.academicDegree && (
                <div className={styles.errorMessage}>
                  {errors.academicDegree}
                </div>
              )}
            </div>

            {renderField("specialization", "Специализация")}
          </div>

          {/* Дополнительная информация */}
          <div className={`${layout.flexCol} ${spacing.gap3}`}>
            <h3 className={`${typography.h3} ${colors.primary}`}>
              Дополнительная информация
            </h3>
            {renderField(
              "additionalInfo",
              "Дополнительная информация",
              "text",
              false,
              "Любая дополнительная информация, которую вы хотите сообщить",
              3
            )}
          </div>

          {/* Сообщение об успехе/ошибке */}
          {submitMessage && (
            <div
              className={`${cards.card} ${spacing.p4} ${
                submitMessage.type === "success"
                  ? "bg-green-50 border-green-200 text-green-800"
                  : "bg-red-50 border-red-200 text-red-800"
              }`}
            >
              {submitMessage.message}
            </div>
          )}

          {/* Кнопки */}
          <div
            className={`${layout.flexCol} ${spacing.gap3} sm:${layout.flexRow} sm:${spacing.gap4}`}
          >
            <button
              type="button"
              onClick={handleClose}
              disabled={isSubmitting}
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Отмена
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`${interactive.buttonPrimary} px-6 py-3 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Отправка..." : "Зарегистрироваться"}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ConferenceRegistrationModal;
