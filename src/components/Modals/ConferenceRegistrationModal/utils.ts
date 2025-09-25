import { ZodError } from "zod";
import { conferenceRegistrationSchema, ConferenceRegistrationFormData } from "./validationSchema";
import { FormErrors, FormTouched, SubmitMessage } from "./types";
import { MESSAGES } from "./constants";

/**
 * Валидирует отдельное поле формы
 * @param name - имя поля
 * @param value - значение поля
 * @returns сообщение об ошибке или пустую строку
 */
export const validateField = (
  name: keyof ConferenceRegistrationFormData,
  value: string
): string => {
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

/**
 * Валидирует всю форму целиком
 * @param formData - данные формы
 * @returns объект с результатом валидации
 */
export const validateForm = (formData: ConferenceRegistrationFormData): {
  isValid: boolean;
  errors: FormErrors;
  allTouched: FormTouched;
} => {
  try {
    conferenceRegistrationSchema.parse(formData);
    return {
      isValid: true,
      errors: {},
      allTouched: {},
    };
  } catch (error) {
    if (error instanceof ZodError) {
      const errors: FormErrors = {};
      error.errors.forEach((err) => {
        const fieldName = err.path[0] as keyof ConferenceRegistrationFormData;
        errors[fieldName] = err.message;
      });

      // Отмечаем все поля как touched для показа ошибок
      const allTouched: FormTouched = {};
      Object.keys(formData).forEach((key) => {
        allTouched[key as keyof ConferenceRegistrationFormData] = true;
      });

      return {
        isValid: false,
        errors,
        allTouched,
      };
    }
    return {
      isValid: false,
      errors: {},
      allTouched: {},
    };
  }
};

/**
 * Создает начальное состояние формы
 * @returns начальные данные формы
 */
export const createInitialFormData = (): ConferenceRegistrationFormData => ({
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

/**
 * Создает сообщение об ошибке
 * @param error - объект ошибки
 * @returns сообщение об ошибке
 */
export const createErrorMessage = (error: unknown): SubmitMessage => {
  const errorMessage = error instanceof Error 
    ? error.message 
    : MESSAGES.ERROR.SUBMIT_ERROR;
  
  return {
    type: "error",
    message: errorMessage,
  };
};

/**
 * Создает сообщение об успехе
 * @param message - текст сообщения
 * @returns сообщение об успехе
 */
export const createSuccessMessage = (message: string): SubmitMessage => ({
  type: "success",
  message,
});

/**
 * Проверяет, есть ли ошибка в поле
 * @param fieldName - имя поля
 * @param touched - состояние touched полей
 * @param errors - ошибки валидации
 * @returns true, если есть ошибка
 */
export const hasFieldError = (
  fieldName: keyof ConferenceRegistrationFormData,
  touched: FormTouched,
  errors: FormErrors
): boolean => {
  return Boolean(touched[fieldName] && errors[fieldName]);
};

/**
 * Проверяет, есть ли успешное состояние поля
 * @param fieldName - имя поля
 * @param touched - состояние touched полей
 * @param errors - ошибки валидации
 * @param formData - данные формы
 * @returns true, если поле в успешном состоянии
 */
export const hasFieldSuccess = (
  fieldName: keyof ConferenceRegistrationFormData,
  touched: FormTouched,
  errors: FormErrors,
  formData: ConferenceRegistrationFormData
): boolean => {
  return Boolean(
    touched[fieldName] && 
    !errors[fieldName] && 
    formData[fieldName]
  );
};

/**
 * Создает CSS классы для поля формы
 * @param hasError - есть ли ошибка
 * @param hasSuccess - есть ли успешное состояние
 * @param styles - CSS модуль
 * @returns строка с CSS классами
 */
export const createFieldClasses = (
  hasError: boolean,
  hasSuccess: boolean,
  styles: any
): string => {
  const classes = [styles.formControl];
  
  if (hasError) {
    classes.push(styles.error);
  }
  
  if (hasSuccess) {
    classes.push(styles.success);
  }
  
  return classes.join(" ");
};

/**
 * Создает CSS классы для сообщения о результате отправки
 * @param type - тип сообщения
 * @param baseClasses - базовые CSS классы
 * @returns строка с CSS классами
 */
export const createMessageClasses = (
  type: "success" | "error",
  baseClasses: string
): string => {
  const typeClasses = type === "success"
    ? "bg-green-50 border-green-200 text-green-800"
    : "bg-red-50 border-red-200 text-red-800";
  
  return `${baseClasses} ${typeClasses}`;
};
