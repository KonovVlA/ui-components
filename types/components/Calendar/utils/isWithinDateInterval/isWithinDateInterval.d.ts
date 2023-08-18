import { DateInterval } from "../../context";
/**
 * Проверяет дату на валидность в соответствии с переданным интервалом.
 * Отличается от date-fns/isWithinInterval тем, что не принимает number, но принимает null
 */
export declare function isWithinDateInterval(date: Date, interval: DateInterval): boolean;
