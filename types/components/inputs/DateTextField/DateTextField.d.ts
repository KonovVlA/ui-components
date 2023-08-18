import React from 'react';
import { MaskedTextFieldProps } from "../MaskedTextField";
import { MaskedDateOptions } from "../MaskedTextField/definitions";
import { CalendarProps } from "../../Calendar";
import { DateTextFieldValue, DateTextFieldStringValue, DateTextFieldType, DateTextFieldPrecision } from "./definitions";
export type DateTextFieldProps = Omit<MaskedTextFieldProps<MaskedDateOptions, false>, 'mask' | 'format' | 'value' | 'onComplete'> & Pick<CalendarProps, 'defaultSpan' | 'minDate' | 'maxDate'> & {
    className?: string;
    suffixButtonClassName?: string;
    format?: string;
    placeholder?: string;
    withTime?: boolean;
    precision?: DateTextFieldPrecision;
    onComplete?: (value: DateTextFieldValue, stringValue?: DateTextFieldStringValue) => void;
    type?: DateTextFieldType;
    value?: DateTextFieldValue;
    hideTextField?: boolean;
};
export declare const DateTextField: React.ComponentType<DateTextFieldProps>;
