import React, { ReactNode } from 'react';
import { RadioValue } from "../Radio";
import { ComponentSize } from "../../../definitions";
import { WithErrorMessageProps } from "../../../hocs/withErrorMessage";
interface DefaultRadioGroupComponentProps {
    size?: ComponentSize;
    direction?: 'column' | 'row';
}
interface RadioGroupComponentProps extends DefaultRadioGroupComponentProps, WithErrorMessageProps {
    value?: RadioValue;
    name?: string;
    label?: ReactNode;
    disabled?: boolean;
    required?: boolean;
    className?: string;
    children: ReactNode;
    onChange?: (value: RadioValue) => void;
}
export declare const WrappedRadioGroup: React.ComponentType<Omit<RadioGroupComponentProps, "renderErrorMessage">>;
export type RadioGroupProps = React.ComponentProps<typeof WrappedRadioGroup>;
export declare const RadioGroup: (props: RadioGroupProps) => JSX.Element;
export {};
