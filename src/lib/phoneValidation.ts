/**
 * Утилиты для работы с номерами телефонов
 */

/**
 * Проверяет, является ли номер телефона валидным
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;
  if (!phoneRegex.test(phone)) return false;
  
  // Проверяем, что номер не содержит только символы маски
  const digits = phone.replace(/[^\d]/g, '');
  return digits.length === 11 && digits.startsWith('7');
};

/**
 * Очищает номер телефона от маски и возвращает только цифры с +
 */
export const cleanPhoneNumber = (phone: string): string => {
  return phone.replace(/[^\d+]/g, '');
};

/**
 * Форматирует номер телефона в стандартный вид
 */
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/[^\d]/g, '');
  
  if (cleaned.length === 11 && cleaned.startsWith('7')) {
    const match = cleaned.match(/^7(\d{3})(\d{3})(\d{2})(\d{2})$/);
    if (match) {
      return `+7 (${match[1]}) ${match[2]}-${match[3]}-${match[4]}`;
    }
  }
  
  return phone;
}; 