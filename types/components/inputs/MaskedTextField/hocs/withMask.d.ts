import { ComponentType, RefCallback } from 'react';
import { AnyMaskedOptions, ChangeCallback, Unmask, Value } from "../definitions";
export type WithMaskRequiredProps = {
    inputRef: RefCallback<HTMLInputElement>;
};
export type WithMaskInjectedProps<O extends AnyMaskedOptions, U extends Unmask, V = Value<O, U>> = O & {
    onAccept?: ChangeCallback<O, U, V>;
    onComplete?: ChangeCallback<O, U, V>;
    unmask?: U;
    value?: V;
    inputRef?: RefCallback<HTMLInputElement>;
};
export type WithMaskResultedProps<T extends WithMaskRequiredProps, O extends AnyMaskedOptions, U extends Unmask, V = Value<O, U>> = Omit<Omit<T, keyof WithMaskRequiredProps>, keyof WithMaskInjectedProps<O, U, V>> & WithMaskInjectedProps<O, U, V>;
export declare function withMask<T extends WithMaskRequiredProps, O extends AnyMaskedOptions, U extends Unmask, V = Value<O, U>>(Component: ComponentType<T>): ComponentType<WithMaskResultedProps<T, O, U, V>>;
