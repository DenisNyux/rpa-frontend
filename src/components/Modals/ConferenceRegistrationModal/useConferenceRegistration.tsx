import { useState, useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { SingleConference } from "@/types/ConferencesType";
import { cleanPhoneNumber } from "@/lib/phoneValidation";
import {
  FormState,
  FormActions,
  RenderFieldParams,
  RegistrationRequestData,
} from "./types";
import {
  createInitialFormData,
  validateField,
  validateForm,
  createErrorMessage,
  createSuccessMessage,
  hasFieldError,
  hasFieldSuccess,
  createFieldClasses,
} from "./utils";
import styles from "./ConferenceRegistrationModal.module.css";
import { FORM_CONFIG, MESSAGES } from "./constants";
import InputMask from "react-input-mask";

/**
 * Кастомный хук для управления состоянием формы регистрации на конференцию
 * @param conference - данные конференции
 * @param setOpen - функция для управления открытием модального окна
 * @returns состояние формы и действия
 */
export const useConferenceRegistration = (
  conference: SingleConference,
  setOpen: (open: boolean) => void
): FormState & FormActions => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  // Состояние формы
  const [formData, setFormData] = useState(createInitialFormData());
  const [errors, setErrors] = useState<FormState["errors"]>({});
  const [touched, setTouched] = useState<FormState["touched"]>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] =
    useState<FormState["submitMessage"]>(null);
  const [honeypot, setHoneypot] = useState("");

  /**
   * Обработчик изменения поля формы
   */
  const handleInputChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value } = e.target;
      const fieldName = name as keyof typeof formData;

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
    },
    [touched]
  );

  /**
   * Обработчик потери фокуса поля
   */
  const handleBlur = useCallback(
    (
      e: React.FocusEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value } = e.target;
      const fieldName = name as keyof typeof formData;

      setTouched((prev) => ({
        ...prev,
        [fieldName]: true,
      }));

      const error = validateField(fieldName, value);
      setErrors((prev) => ({
        ...prev,
        [fieldName]: error,
      }));
    },
    []
  );

  /**
   * Обработчик отправки формы
   */
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      // Валидация формы
      const validation = validateForm(formData);
      if (!validation.isValid) {
        setErrors(validation.errors);
        setTouched(validation.allTouched);
        return;
      }

      setIsSubmitting(true);
      setSubmitMessage(null);

      try {
        // Проверяем honeypot поле
        if (honeypot) {
          throw new Error(MESSAGES.ERROR.FORM_BLOCKED);
        }

        // Получаем reCAPTCHA токен
        if (!executeRecaptcha) {
          throw new Error(MESSAGES.ERROR.RECAPTCHA_NOT_LOADED);
        }

        const recaptchaToken = await executeRecaptcha(
          FORM_CONFIG.RECAPTCHA_ACTION
        );

        // Очищаем номер телефона от маски
        const cleanPhone = cleanPhoneNumber(formData.phone);

        // Подготавливаем данные для отправки
        const requestBody: RegistrationRequestData = {
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

        console.log("Отправка данных регистрации:", requestBody);

        // Отправляем запрос
        const response = await fetch("/api/conference-registration", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(
            errorData.error || `HTTP error! status: ${response.status}`
          );
        }

        // Показываем сообщение об успехе
        setSubmitMessage(
          createSuccessMessage(MESSAGES.SUCCESS.REGISTRATION_SUCCESS)
        );

        // Очистка формы через заданное время
        setTimeout(() => {
          setFormData(createInitialFormData());
          setErrors({});
          setTouched({});
          setSubmitMessage(null);
          setOpen(false);
        }, FORM_CONFIG.CLEAR_FORM_DELAY);
      } catch (error) {
        setSubmitMessage(createErrorMessage(error));
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, honeypot, executeRecaptcha, conference, setOpen]
  );

  /**
   * Обработчик закрытия модального окна
   */
  const handleClose = useCallback(() => {
    if (!isSubmitting) {
      setOpen(false);
      setSubmitMessage(null);
      setErrors({});
      setTouched({});
    }
  }, [isSubmitting, setOpen]);

  /**
   * Функция для рендеринга поля формы
   */
  const renderField = useCallback(
    ({ name, config }: RenderFieldParams): JSX.Element => {
      const hasError = hasFieldError(name, touched, errors);
      const hasSuccess = hasFieldSuccess(name, touched, errors, formData);
      const fieldClasses = createFieldClasses(
        hasError,
        hasSuccess,
        styles
      );

      return (
        <div className={fieldClasses}>
          <label htmlFor={name}>{config.label}</label>

          {config.type === "textarea" ? (
            <textarea
              id={name}
              name={name}
              value={formData[name] || ""}
              onChange={handleInputChange}
              onBlur={handleBlur}
              required={config.required}
              placeholder={config.placeholder}
              rows={config.rows}
            />
          ) : name === "phone" ? (
            <InputMask
              mask={FORM_CONFIG.PHONE_MASK}
              maskChar={FORM_CONFIG.PHONE_MASK_CHAR}
              value={formData[name] || ""}
              onChange={handleInputChange}
              onBlur={handleBlur}
              required={config.required}
              placeholder={FORM_CONFIG.PHONE_PLACEHOLDER}
            >
              {(inputProps: any) => (
                <input {...inputProps} type="tel" id={name} name={name} />
              )}
            </InputMask>
          ) : config.type === "select" ? (
            <select
              id={name}
              name={name}
              value={formData[name] || ""}
              onChange={handleInputChange}
              onBlur={handleBlur}
              required={config.required}
            >
              <option value="">Выберите степень</option>
              <option value="candidate">Кандидат наук</option>
              <option value="doctor">Доктор наук</option>
              <option value="none">Нет ученой степени</option>
            </select>
          ) : (
            <input
              type={config.type}
              id={name}
              name={name}
              value={formData[name] || ""}
              onChange={handleInputChange}
              onBlur={handleBlur}
              required={config.required}
              placeholder={config.placeholder}
            />
          )}

          {hasError && <div className={styles.errorMessage}>{errors[name]}</div>}
        </div>
      );
    },
    [formData, touched, errors, handleInputChange, handleBlur]
  );

  return {
    // Состояние
    formData,
    errors,
    touched,
    isSubmitting,
    submitMessage,
    honeypot,

    // Действия
    handleInputChange,
    handleBlur,
    handleSubmit,
    handleClose,
    renderField,
    setHoneypot,
  };
};
