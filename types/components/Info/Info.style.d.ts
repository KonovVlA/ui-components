/// <reference types="react" />
import { InfoProps, InfoType } from "./Info";
export declare const IconWrapperStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
export declare const getIconStyles: (interactive: boolean, type: InfoType) => import("@emotion/utils").SerializedStyles;
export declare const TextStyled: import("@emotion/styled").StyledComponent<import("components/Text").TextProps & import("react").RefAttributes<HTMLParagraphElement | HTMLSpanElement> & {
    theme?: import("@emotion/react").Theme;
} & InfoProps, {}, {}>;
export declare const InfoStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & InfoProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
