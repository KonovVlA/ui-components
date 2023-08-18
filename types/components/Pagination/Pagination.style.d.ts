/// <reference types="react" />
import { ButtonProps } from "../Button";
export declare const PaginationStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export interface ControlStyledProps extends ButtonProps {
    active?: boolean;
}
export declare const ControlStyled: import("@emotion/styled").StyledComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement> & {
    theme?: import("@emotion/react").Theme;
} & ControlStyledProps, {}, {}>;
export declare const IconPrevStyled: import("@emotion/styled").StyledComponent<(import("../..").IconProps | (import("../..").IconProps & {
    children?: import("react").ReactNode;
})) & {
    theme?: import("@emotion/react").Theme;
}, {}, {}>;
export declare const IconNextStyled: import("@emotion/styled").StyledComponent<(import("../..").IconProps | (import("../..").IconProps & {
    children?: import("react").ReactNode;
})) & {
    theme?: import("@emotion/react").Theme;
}, {}, {}>;
export declare const NextControlStyled: import("@emotion/styled").StyledComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement> & {
    theme?: import("@emotion/react").Theme;
} & ControlStyledProps & {
    children?: import("react").ReactNode;
}, {}, {}>;
export interface ShortenedStyledProps {
    disabled?: boolean;
}
export declare const ShortenedStyled: any;
export declare const ShortenedIconStyled: import("@emotion/styled").StyledComponent<(import("../..").IconProps | (import("../..").IconProps & {
    children?: import("react").ReactNode;
})) & {
    theme?: import("@emotion/react").Theme;
}, {}, {}>;
export declare const PageControlStyled: any;
export declare const PagesStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const PrevControlStyled: import("@emotion/styled").StyledComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement> & {
    theme?: import("@emotion/react").Theme;
} & ControlStyledProps & {
    children?: import("react").ReactNode;
}, {}, {}>;
