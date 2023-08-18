import { DateInterval } from "../../context";
import { DateItemPositionType } from "../../Sheet/DateItem";
/**
 * Проверяет даты интервала со входной датой на пересечение по дням и возвращает строку
 * в соответствии с тем, на какую из дат интервала выпадает входная дата.
 * Если пересечение отсутствует, возвращается undefined
 */
export declare function getIntervalIntersectionType(interval: DateInterval, comparable: Date): DateItemPositionType | null;
