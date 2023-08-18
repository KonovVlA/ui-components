import React from 'react';
import { CalendarType, DateInterval } from "./context";
export type CalendarValue = DateInterval | Date;
interface DefaultCalendarProps {
    type?: CalendarType;
}
export interface CalendarProps extends DefaultCalendarProps {
    onChange?: (value: CalendarValue) => void;
    value?: CalendarValue;
    minDate?: Date;
    maxDate?: Date;
    defaultSpan?: string;
    className?: string;
    hideInputs?: boolean;
}
export declare const Calendar: React.ForwardRefExoticComponent<CalendarProps & React.RefAttributes<HTMLDivElement>>;
export {};
