/// <reference types="react" />
import { RadioValue } from "../Radio/Radio";
import { ComponentThemeType } from "../../definitions";
export interface SwitchOption {
    value: RadioValue;
    label: string;
}
export type SwitchType = ComponentThemeType;
interface DefaultSwitchProps {
    type?: SwitchType;
}
export interface SwitchProps extends DefaultSwitchProps {
    name?: string;
    value?: RadioValue;
    initialValue?: RadioValue;
    options?: SwitchOption[];
    onChange?: (value: RadioValue) => void;
    className?: string;
}
export declare function Switch(props: SwitchProps): JSX.Element;
export declare namespace Switch {
    var defaultProps: DefaultSwitchProps;
}
export {};
