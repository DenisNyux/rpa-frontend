/**
 * Константы для модального окна регистрации на конференцию
 */

// Настройки формы
export const FORM_CONFIG = {
  // Таймаут для очистки формы после успешной отправки (в миллисекундах)
  CLEAR_FORM_DELAY: 3000,
  
  // Настройки маски телефона
  PHONE_MASK: "+7 (999) 999-99-99",
  PHONE_MASK_CHAR: "_",
  PHONE_PLACEHOLDER: "+7 (___) ___-__-__",
  
  // Настройки reCAPTCHA
  RECAPTCHA_ACTION: "conference_registration",
} as const;

// Опции для выпадающего списка ученых степеней
export const ACADEMIC_DEGREE_OPTIONS = [
  { value: "", label: "Выберите степень" },
  { value: "candidate", label: "Кандидат наук" },
  { value: "doctor", label: "Доктор наук" },
  { value: "none", label: "Нет ученой степени" },
] as const;

// Сообщения для пользователя
export const MESSAGES = {
  SUCCESS: {
    REGISTRATION_SUCCESS: "Регистрация успешно отправлена! Мы свяжемся с вами в ближайшее время.",
  },
  ERROR: {
    FORM_BLOCKED: "Форма заблокирована",
    RECAPTCHA_NOT_LOADED: "reCAPTCHA не загружен",
    SUBMIT_ERROR: "Произошла ошибка при отправке формы. Попробуйте еще раз.",
  },
  UI: {
    SUBMIT_BUTTON_LOADING: "Отправка...",
    SUBMIT_BUTTON_DEFAULT: "Зарегистрироваться",
    CANCEL_BUTTON: "Отмена",
  },
} as const;

// Настройки полей формы
export const FORM_FIELDS = {
  // Личные данные
  PERSONAL_DATA: {
    lastName: { label: "Фамилия", type: "text", required: true },
    firstName: { label: "Имя", type: "text", required: true },
    middleName: { label: "Отчество", type: "text", required: false },
    email: { label: "Email", type: "email", required: true },
    phone: { label: "Телефон", type: "tel", required: true },
  },
  
  // Профессиональная информация
  PROFESSIONAL_DATA: {
    organization: { label: "Организация", type: "text", required: false },
    position: { label: "Должность", type: "text", required: false },
    academicDegree: { label: "Ученая степень", type: "select", required: false },
    specialization: { label: "Специализация", type: "text", required: false },
  },
  
  // Дополнительная информация
  ADDITIONAL_DATA: {
    additionalInfo: { 
      label: "Дополнительная информация", 
      type: "textarea", 
      required: false,
      placeholder: "Любая дополнительная информация, которую вы хотите сообщить",
      rows: 3,
    },
  },
} as const;

// Заголовки секций формы
export const FORM_SECTIONS = {
  PERSONAL: "Личные данные",
  PROFESSIONAL: "Профессиональная информация", 
  ADDITIONAL: "Дополнительная информация",
} as const;

// Настройки honeypot поля для защиты от ботов
export const HONEYPOT_CONFIG = {
  FIELD_NAME: "website",
  STYLE: {
    position: 'absolute',
    left: '-9999px',
    opacity: 0,
  },
  ATTRIBUTES: {
    tabIndex: -1,
    autoComplete: "off",
  },
} as const;
