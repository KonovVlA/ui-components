import { MaskInstance } from "../instances";
import { Unmask } from "./Unmask";
import { AnyMaskedOptions } from "./MaskedOptions";
export type Value<O extends AnyMaskedOptions, U extends Unmask> = U extends 'typed' ? MaskInstance.InputMask<O>['typedValue'] : Unmask extends false | 0 | '' | null | undefined ? MaskInstance.InputMask<O>['value'] : MaskInstance.InputMask<O>['unmaskedValue'];
