import { DateTextFieldType, DateTextFieldValue } from "../definitions";
/**
 * Проверяет дату на валидность.
 * Валидной считается дата, равная:
 *  - null
 *  - undefined
 *  - Date
 *  - { start: Date, end: Date }
 */
export declare function isValidValue(value: DateTextFieldValue, type: DateTextFieldType): boolean;
