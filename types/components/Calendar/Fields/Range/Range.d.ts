/// <reference types="react" />
import { AnyMaskedOptions } from "../../../inputs/MaskedTextField/definitions";
import { MaskedTextFieldProps } from "../../../inputs/MaskedTextField/MaskedTextField";
export interface RangeProps {
    mask: MaskedTextFieldProps<AnyMaskedOptions, false>;
    type: 'start' | 'end';
    format: string;
}
export declare function Range(props: RangeProps): JSX.Element;
