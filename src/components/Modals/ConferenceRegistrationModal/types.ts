import { SingleConference } from "@/types/ConferencesType";
import { ConferenceRegistrationFormData } from "./validationSchema";

/**
 * Пропсы для модального окна регистрации на конференцию
 */
export interface ConferenceRegistrationModalProps {
  /** Открыто ли модальное окно */
  open: boolean;
  /** Функция для управления состоянием открытия модального окна */
  setOpen: (open: boolean) => void;
  /** Данные конференции */
  conference: SingleConference;
}

/**
 * Состояние ошибок валидации формы
 */
export type FormErrors = Partial<Record<keyof ConferenceRegistrationFormData, string>>;

/**
 * Состояние touched полей формы (было ли поле в фокусе)
 */
export type FormTouched = Partial<Record<keyof ConferenceRegistrationFormData, boolean>>;

/**
 * Сообщение о результате отправки формы
 */
export interface SubmitMessage {
  /** Тип сообщения */
  type: "success" | "error";
  /** Текст сообщения */
  message: string;
}

/**
 * Конфигурация поля формы
 */
export interface FormFieldConfig {
  /** Подпись поля */
  label: string;
  /** Тип поля */
  type: "text" | "email" | "tel" | "select" | "textarea";
  /** Обязательное ли поле */
  required: boolean;
  /** Плейсхолдер для поля */
  placeholder?: string;
  /** Количество строк для textarea */
  rows?: number;
}

/**
 * Параметры для рендеринга поля формы
 */
export interface RenderFieldParams {
  /** Имя поля */
  name: keyof ConferenceRegistrationFormData;
  /** Конфигурация поля */
  config: FormFieldConfig;
}

/**
 * Состояние формы регистрации
 */
export interface FormState {
  /** Данные формы */
  formData: ConferenceRegistrationFormData;
  /** Ошибки валидации */
  errors: FormErrors;
  /** Touched поля */
  touched: FormTouched;
  /** Отправляется ли форма */
  isSubmitting: boolean;
  /** Сообщение о результате отправки */
  submitMessage: SubmitMessage | null;
  /** Значение honeypot поля */
  honeypot: string;
}

/**
 * Действия для управления состоянием формы
 */
export interface FormActions {
  /** Обработчик изменения поля */
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  /** Обработчик потери фокуса поля */
  handleBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  /** Обработчик отправки формы */
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  /** Обработчик закрытия модального окна */
  handleClose: () => void;
  /** Функция для рендеринга поля */
  renderField: (params: RenderFieldParams) => JSX.Element;
  /** Функция для изменения значения honeypot поля */
  setHoneypot: (value: string) => void;
}

/**
 * Данные для отправки на сервер
 */
export interface RegistrationRequestData {
  data: {
    conferenceId: number;
    conferenceName: string;
    name: string;
    phoneNumber: string;
    email: string;
    organization?: string;
    position?: string;
    degree?: string;
    academicDegree?: string;
    specialization?: string;
    additionalInfo?: string;
  };
  recaptchaToken: string;
  honeypot: string;
}
