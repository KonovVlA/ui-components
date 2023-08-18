import React, { ForwardedRef } from 'react';
import { InputWrapperProps } from "../InputWrapper";
export interface DefaultTextAreaComponentProps {
    minRows?: number;
    maxRows?: number;
}
export type TextAreaProps = DefaultTextAreaComponentProps & InputWrapperProps & {
    className?: string;
    onHeightChange?: () => void;
    rows?: number;
};
export declare const TextAreaComponent: (props: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => JSX.Element;
export declare const TextArea: React.ForwardRefExoticComponent<DefaultTextAreaComponentProps & Omit<Omit<Omit<import("../InputWrapper/InputWrapper").InputWrapperComponentProps, "renderDescription">, "renderErrorMessage"> | (Omit<Omit<import("../InputWrapper/InputWrapper").InputWrapperComponentProps, "renderDescription">, "renderErrorMessage"> & {
    children?: React.ReactNode;
}), "forwardedRef"> & {
    children?: (props: import("../InputWrapper").InputWrapperChildProps) => JSX.Element;
} & {
    className?: string;
    onHeightChange?: () => void;
    rows?: number;
} & React.RefAttributes<HTMLTextAreaElement>>;
