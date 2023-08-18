import { MaskInstance } from "../instances";
import { AnyMaskedOptions } from "./MaskedOptions";
import { Value } from "./Value";
import { Unmask } from "./Unmask";
export type ChangeCallback<O extends AnyMaskedOptions, U extends Unmask, V = Value<O, U>> = (value: V, mask?: MaskInstance.InputMask<O>) => void;
