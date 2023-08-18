/// <reference types="react" />
export declare const SpanStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const ButtonStyled: import("@emotion/styled").StyledComponent<import("components/Button").ButtonProps & import("react").RefAttributes<HTMLButtonElement> & {
    theme?: import("@emotion/react").Theme;
}, {}, {}>;
export declare const getIconStyle: import("@emotion/utils").SerializedStyles;
export declare const getIconWrapperStyle: (reversed?: boolean) => import("@emotion/utils").SerializedStyles;
