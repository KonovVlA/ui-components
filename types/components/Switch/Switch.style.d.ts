import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { SwitchType } from "./Switch";
export declare const TextStyled: import("@emotion/styled").StyledComponent<import("components/Text").TextProps & import("react").RefAttributes<HTMLParagraphElement | HTMLSpanElement> & {
    theme?: import("@emotion/react").Theme;
}, {}, {}>;
export declare const SwitchStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
}, DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const LabelStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
}, DetailedHTMLProps<import("react").LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, {}>;
export interface RadioStyledProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    switchType: SwitchType;
}
export declare const RadioStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & RadioStyledProps, DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, {}>;
