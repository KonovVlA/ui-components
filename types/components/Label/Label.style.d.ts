/// <reference types="react" />
import { TextProps } from "../Text";
import { RequiredSignProps } from "../RequiredSign";
import { LabelProps } from "./Label";
export declare const LabelStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & LabelProps, import("react").DetailedHTMLProps<import("react").LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, {}>;
export declare const TextWrapperStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & LabelProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const TextStyled: import("@emotion/styled").StyledComponent<TextProps & import("react").RefAttributes<HTMLParagraphElement | HTMLSpanElement> & {
    theme?: import("@emotion/react").Theme;
}, {}, {}>;
export declare const RequiredSignStyled: import("@emotion/styled").StyledComponent<RequiredSignProps & {
    theme?: import("@emotion/react").Theme;
}, {}, {}>;
