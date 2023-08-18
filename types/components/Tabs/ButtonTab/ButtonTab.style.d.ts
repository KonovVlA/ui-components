/// <reference types="react" />
import { TabsType } from "../contexts";
interface SelectableStyledComponentProps {
    isSelected?: boolean;
}
interface TypedStyledComponentProps {
    tabsType?: TabsType;
}
export declare function createTextStyles(): import("@emotion/utils").SerializedStyles;
export declare const TextStyled: import("@emotion/styled").StyledComponent<import("components/Text").TextProps & import("react").RefAttributes<HTMLParagraphElement | HTMLSpanElement> & {
    theme?: import("@emotion/react").Theme;
}, {}, {}>;
export declare const WrapperTabStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & SelectableStyledComponentProps & TypedStyledComponentProps, import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
export {};
