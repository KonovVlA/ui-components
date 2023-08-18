import { Ref } from 'react';
import { InputWrapperProps } from "../InputWrapper";
import { Splitter } from "./Splitter";
import { RefForwardWithStatic } from "../../../definitions";
export type TextFieldComponentProps = Omit<InputWrapperProps, 'children'> & {
    className?: string;
    renderPrefix?: () => JSX.Element;
    renderSuffix?: () => JSX.Element;
    hideTextField?: boolean;
};
export type TextFieldProps = Omit<TextFieldComponentProps, 'ref'> & {
    ref?: Ref<HTMLInputElement>;
};
export declare const TextField: RefForwardWithStatic<TextFieldProps, HTMLInputElement, {
    Splitter: typeof Splitter;
}>;
