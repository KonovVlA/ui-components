import React, { FocusEvent } from 'react';
import { ComponentSize } from "../../../definitions/ComponentSize";
import { WithDescriptionProps } from "../../../hocs/withDescription";
import { WithErrorMessageProps } from "../../../hocs/withErrorMessage";
import { CheckboxGroup } from "../CheckboxGroup";
interface DefaultCheckboxComponentProps {
    size?: ComponentSize;
}
export type CheckboxValue = string | number;
export interface CheckboxComponentProps extends DefaultCheckboxComponentProps, WithErrorMessageProps, WithDescriptionProps {
    children?: React.ReactNode;
    onChange?: (checked: boolean) => void;
    onFocus?: (event: FocusEvent) => void;
    onBlur?: (event: FocusEvent) => void;
    disabled?: boolean;
    checked?: boolean;
    value?: CheckboxValue;
    name?: string;
    className?: string;
}
export declare const WrappedCheckbox: React.ComponentType<Omit<Omit<CheckboxComponentProps & React.RefAttributes<HTMLDivElement>, "renderErrorMessage">, "renderDescription">>;
export type CheckboxProps = React.ComponentProps<typeof WrappedCheckbox>;
export declare const Checkbox: ((props: CheckboxProps) => JSX.Element) & {
    Group?: typeof CheckboxGroup;
};
export {};
