/// <reference types="react" />
import { DateItemProps, DateItemType } from "./DateItem";
import { ButtonProps } from "../../../Button";
interface DateItemWrapperStyled extends Pick<DateItemProps, 'inRange' | 'selected' | 'position' | 'current'> {
}
interface DateItemStyledProps extends ButtonProps {
    itemType?: DateItemType;
}
export declare const DateItemWrapperStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & DateItemWrapperStyled, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const DateItemStyled: import("@emotion/styled").StyledComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement> & {
    theme?: import("@emotion/react").Theme;
} & DateItemStyledProps, {}, {}>;
export {};
