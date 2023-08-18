import { TextFieldProps } from "../TextField/TextField";
import { AnyMaskedOptions, ChangeCallback, Unmask, Value } from "./definitions";
import { WithMaskRequiredProps, WithMaskResultedProps } from "./hocs";
type WithMaskInnerComponentProps = TextFieldProps & WithMaskRequiredProps;
export type MaskedTextFieldProps<O extends AnyMaskedOptions, U extends Unmask, V = Value<O, U>> = Omit<WithMaskResultedProps<WithMaskInnerComponentProps, O, U, V>, 'onChange' | 'onAccept' | 'inputRef'> & {
    onChange?: ChangeCallback<O, U, V>;
};
export declare const MaskedTextField: <O extends import("imask").default.AnyMaskedOptions, U extends Unmask, V = Value<O, U>>(props: MaskedTextFieldProps<O, U, V>) => JSX.Element;
export {};
