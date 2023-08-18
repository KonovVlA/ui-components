import React, { ChangeEvent, FocusEvent, ForwardedRef, KeyboardEvent, ReactNode, Ref } from 'react';
import { LabelProps } from "../../Label/Label";
import { RenderDescriptionOptions, WithDescriptionProps } from "../../../hocs/withDescription";
import { RenderErrorMessageOptions, WithErrorMessageProps } from "../../../hocs/withErrorMessage";
import { ComponentSize } from "../../../definitions";
export type InputType = HTMLElement & {
    value?: string;
};
export type InputSize = Exclude<ComponentSize, 'lg'>;
export interface InputWrapperComponentProps extends WithErrorMessageProps, WithDescriptionProps {
    labelClassName?: string;
    label?: ReactNode;
    active?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    required?: boolean;
    descriptionOptions?: RenderErrorMessageOptions;
    errorMessageOptions?: RenderDescriptionOptions;
    labelProps?: LabelProps;
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
    onFocus?: (event: FocusEvent) => void;
    onBlur?: (event: FocusEvent) => void;
    onKeyPress?: (event: KeyboardEvent) => void;
    children?: (childProps: InputWrapperChildProps) => JSX.Element;
    forwardedRef?: ForwardedRef<HTMLElement>;
    maxLength?: number;
    size?: InputSize;
    name?: string;
    showCount?: boolean;
}
type PassedTypes = Pick<InputWrapperComponentProps, 'disabled' | 'value' | 'defaultValue' | 'placeholder' | 'onKeyPress' | 'maxLength' | 'name'>;
export interface InputWrapperChildProps extends PassedTypes {
    className?: string;
    tabIndex?: number;
    onChange?: (event: ChangeEvent<InputType>) => void;
    readOnly?: boolean;
    inputRef?: Ref<HTMLElement>;
}
declare const WrappedInputWrapper: React.ComponentType<Omit<Omit<InputWrapperComponentProps, "renderDescription">, "renderErrorMessage">>;
export type InputWrapperProps = Omit<React.ComponentProps<typeof WrappedInputWrapper>, 'forwardedRef'> & {
    children?: (props: InputWrapperChildProps) => JSX.Element;
};
export declare const InputWrapper: React.ForwardRefExoticComponent<Omit<Omit<Omit<InputWrapperComponentProps, "renderDescription">, "renderErrorMessage"> | (Omit<Omit<InputWrapperComponentProps, "renderDescription">, "renderErrorMessage"> & {
    children?: React.ReactNode;
}), "forwardedRef"> & {
    children?: (props: InputWrapperChildProps) => JSX.Element;
} & React.RefAttributes<HTMLElement>>;
export {};
