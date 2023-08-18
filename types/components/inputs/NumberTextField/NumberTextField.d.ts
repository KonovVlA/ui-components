import { MaskedTextFieldProps } from "../MaskedTextField/MaskedTextField";
import { MaskedNumberOptions, Unmask } from "../MaskedTextField/definitions";
export type NumberTextFieldProps<U extends Unmask = false> = Omit<MaskedTextFieldProps<MaskedNumberOptions, U>, 'mask'>;
export declare const NumberTextField: <U extends Unmask = false>(props: NumberTextFieldProps<U>) => JSX.Element;
