/// <reference types="react" />
import { IconProps } from "../../../hocs/withIcon";
import { AccordionProps } from "./";
interface WrapperStyledProps extends Pick<AccordionProps, 'withBorder'> {
    ownOpened?: boolean;
}
export declare const WrapperStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & WrapperStyledProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const SummaryMainStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const TitleWrapperStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const ArrowIconWrapperStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
interface ArrowIconStyledProps extends IconProps {
    ownOpened?: boolean;
}
export declare const ArrowIconStyled: import("@emotion/styled").StyledComponent<((IconProps | (IconProps & {
    children?: import("react").ReactNode;
})) & {
    theme?: import("@emotion/react").Theme;
}) & ArrowIconStyledProps, {}, {}>;
interface ContentStyledProps extends Pick<AccordionProps, 'size'> {
    ownOpened?: boolean;
}
export declare const ContentStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & ContentStyledProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
interface SummaryStyledProps extends Pick<AccordionProps, 'size'> {
}
export declare const SummaryStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & SummaryStyledProps, import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
export declare const SummaryDescriptionStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare function getDescriptionStyle(): import("@emotion/utils").SerializedStyles;
export {};
