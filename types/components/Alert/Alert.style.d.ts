/// <reference types="react" />
import { AlertType, AlertProps } from "./";
import { LinkProps } from "../Link/Link";
export declare const AlertStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & AlertProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const ContentWrapperStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const getIconStyles: (type: AlertType) => import("@emotion/utils").SerializedStyles;
export declare const DescriptionStyled: import("@emotion/styled").StyledComponent<import("components/Text").TextProps & import("react").RefAttributes<HTMLParagraphElement | HTMLSpanElement> & {
    theme?: import("@emotion/react").Theme;
}, {}, {}>;
export declare const TitleStyled: import("@emotion/styled").StyledComponent<Pick<import("components/Title").TitleProps, "className" | "title" | "children"> & Partial<Pick<import("components/Title").TitleProps, "level">> & Partial<Pick<import("../Title/Title").DefaultTitleProps, never>> & {
    theme?: import("@emotion/react").Theme;
}, {}, {}>;
export declare const ActionsListStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const ActionItemStyled: import("@emotion/styled").StyledComponent<LinkProps & {
    theme?: import("@emotion/react").Theme;
}, {}, {}>;
