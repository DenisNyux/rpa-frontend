import { z } from "zod";

export const conferenceRegistrationSchema = z.object({
  firstName: z
    .string()
    .min(2, "Имя должно содержать минимум 2 символа")
    .max(50, "Имя не должно превышать 50 символов")
    .regex(/^[а-яёА-ЯЁ\s-]+$/, "Имя должно содержать только русские буквы, пробелы и дефисы"),
  lastName: z
    .string()
    .min(2, "Фамилия должна содержать минимум 2 символа")
    .max(50, "Фамилия не должна превышать 50 символов")
    .regex(/^[а-яёА-ЯЁ\s-]+$/, "Фамилия должна содержать только русские буквы, пробелы и дефисы"),
  middleName: z
    .string()
    .max(50, "Отчество не должно превышать 50 символов")
    .regex(/^[а-яёА-ЯЁ\s-]*$/, "Отчество должно содержать только русские буквы, пробелы и дефисы")
    .optional(),
  email: z
    .string()
    .email("Введите корректный email адрес")
    .min(5, "Email должен содержать минимум 5 символов")
    .max(100, "Email не должен превышать 100 символов"),
  phone: z
    .string()
    .regex(
      /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/,
      "Телефон должен быть в формате +7 (123) 456-78-90"
    )
    .refine(
      (phone) => {
        // Проверяем, что номер не содержит только символы маски
        const digits = phone.replace(/[^\d]/g, '');
        return digits.length === 11 && digits.startsWith('7');
      },
      "Введите корректный номер телефона"
    ),
  organization: z
    .string()
    .min(2, "Название организации должно содержать минимум 2 символа")
    .max(200, "Название организации не должно превышать 200 символов")
    .or(z.literal(""))
    .optional(),
  position: z
    .string()
    .max(100, "Должность не должна превышать 100 символов")
    .optional(),
  academicDegree: z
    .enum(["candidate", "doctor", "none", ""], {
      errorMap: () => ({ message: "Выберите корректную ученую степень" }),
    })
    .optional(),
  specialization: z
    .string()
    .max(200, "Специализация не должна превышать 200 символов")
    .optional(),
  additionalInfo: z
    .string()
    .max(1000, "Дополнительная информация не должна превышать 1000 символов")
    .optional(),
});

export type ConferenceRegistrationFormData = z.infer<typeof conferenceRegistrationSchema>; 