export type SheetType = 'day' | 'month' | 'year';
export type CalendarType = 'day' | 'range' | 'time' | 'range-time';
export interface DateInterval {
    start: Date;
    end: Date;
}
export interface CalendarContextState {
    sheet: SheetType;
    interval: DateInterval;
    span: Date;
    type: CalendarType;
    minDate: Date;
    maxDate: Date;
    update: (data: UpdateData) => void;
    hideInputs?: boolean;
}
type UpdateData<T = Omit<CalendarContextState, 'update'>> = {
    [K in keyof T]: {
        field: K;
        value: T[K];
    };
}[keyof T];
export {};
