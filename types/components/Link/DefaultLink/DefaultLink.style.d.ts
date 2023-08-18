/// <reference types="react" />
import { SerializedStyles } from '@emotion/react';
import { DefaultLinkProps } from "./DefaultLink";
export declare const DefaultLinkStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & DefaultLinkProps, import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, {}>;
export declare const getIconStyles: () => SerializedStyles;
export declare const TextStyled: import("@emotion/styled").StyledComponent<import("components/Text").TextProps & import("react").RefAttributes<HTMLParagraphElement | HTMLSpanElement> & {
    theme?: import("@emotion/react").Theme;
}, {}, {}>;
export declare const IconWrapper: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & DefaultLinkProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
