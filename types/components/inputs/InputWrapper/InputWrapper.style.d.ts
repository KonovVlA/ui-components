/// <reference types="react" />
import { TextFieldProps } from "../TextField";
import { InputSize } from "./";
import { TextProps } from "../../Text";
interface GetInputStylesProps {
    size?: InputSize;
}
export declare function getInputStyles({ size }?: GetInputStylesProps): import("@emotion/utils").SerializedStyles;
interface InputWrapperStyledProps extends TextFieldProps {
    focused?: boolean;
}
export declare const InputWrapperStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & InputWrapperStyledProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const CounterStyles: import("@emotion/styled").StyledComponent<TextProps & import("react").RefAttributes<HTMLParagraphElement | HTMLSpanElement> & {
    theme?: import("@emotion/react").Theme;
}, {}, {}>;
export {};
