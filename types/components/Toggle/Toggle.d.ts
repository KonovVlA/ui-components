import React, { FocusEvent } from 'react';
import { AnyFunction } from "../../definitions/AnyFunction";
import { ComponentSize } from "../../definitions";
import { WithDescriptionProps } from "../../hocs/withDescription";
import { WithErrorMessageProps } from "../../hocs/withErrorMessage";
export interface ToggleComponentProps extends WithErrorMessageProps, WithDescriptionProps {
    title?: React.ReactNode;
    size?: ComponentSize;
    onChange?: AnyFunction;
    onFocus?: (event: FocusEvent) => void;
    onBlur?: (event: FocusEvent) => void;
    disabled?: boolean;
    checked?: boolean;
    className?: string;
    name?: string;
}
export declare const WrappedToggle: React.ComponentType<Omit<Omit<ToggleComponentProps, "renderErrorMessage">, "renderDescription">>;
export type ToggleProps = React.ComponentProps<typeof WrappedToggle>;
export declare const Toggle: (props: ToggleProps) => JSX.Element;
