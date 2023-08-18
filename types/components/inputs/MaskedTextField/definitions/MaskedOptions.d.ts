import IMask from 'imask';
import { MaskedEnum, MaskedRegExp, MaskedFunction } from "../instances";
export type MaskedOptions<Masked> = IMask.BaseMaskedOptions<Masked>;
export type AnyMaskedOptions = IMask.AnyMaskedOptions;
export type MaskedDateOptions = IMask.MaskedDateOptions;
export type MaskedNumberOptions = IMask.MaskedNumberOptions;
export type MaskedPatternOptions = IMask.MaskedPatternOptions;
export type MaskedRangeOptions = IMask.MaskedRangeOptions;
export type MaskedDynamicOptions = IMask.MaskedDynamicOptions;
export type MaskedEnumOptions = MaskedOptions<MaskedEnum>;
export type MaskedRegExpOptions = MaskedOptions<MaskedRegExp>;
export type MaskedFunctionOptions = MaskedOptions<MaskedFunction>;
