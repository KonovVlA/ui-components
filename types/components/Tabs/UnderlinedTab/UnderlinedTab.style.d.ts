/// <reference types="react" />
import { SerializedStyles } from '@emotion/react';
import { UnderlinedTabProps } from "./UnderlinedTab";
import { TabsType } from "../contexts";
interface SelectableStyledComponentProps {
    isSelected?: boolean;
}
interface TypedStyledComponentProps {
    tabsType?: TabsType;
}
export declare function createTextStyles(): SerializedStyles;
export declare const ChildrenWrapperStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & Pick<UnderlinedTabProps, "size">, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const TextStyled: import("@emotion/styled").StyledComponent<import("components/Text").TextProps & import("react").RefAttributes<HTMLParagraphElement | HTMLSpanElement> & {
    theme?: import("@emotion/react").Theme;
}, {}, {}>;
export declare const WrapperTabStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & SelectableStyledComponentProps, import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
export declare const IndicatorStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & SelectableStyledComponentProps & TypedStyledComponentProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export {};
