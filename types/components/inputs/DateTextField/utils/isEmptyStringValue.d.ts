import { DateTextFieldStringValue } from "../definitions";
/**
 * Проверяет строковое значение на пустоту.
 * Значение считается пустым, если оно равно:
 *  - null
 *  - undefined
 *  - ''
 *  - {displayPlaceholder}
 */
export declare function isEmptyStringValue(value: DateTextFieldStringValue, displayPlaceholder: string): boolean;
