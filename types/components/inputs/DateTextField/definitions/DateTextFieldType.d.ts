import { CalendarType } from "../../../Calendar";
export type DateTextFieldType = Extract<CalendarType, 'day' | 'range'>;
