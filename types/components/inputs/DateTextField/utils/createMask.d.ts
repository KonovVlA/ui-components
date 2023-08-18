import { DateTextFieldPrecision, DateTextFieldType } from "../definitions";
import { MaskedDateOptions, MaskedPatternOptions } from "../../MaskedTextField";
export declare function createMask(withTime: boolean, precision: DateTextFieldPrecision, type: DateTextFieldType, min: Date, max: Date): MaskedDateOptions | MaskedPatternOptions;
