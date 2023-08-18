import { ButtonHTMLAttributes } from 'react';
import { SerializedStyles } from '@emotion/react';
import { PulseLoaderProps } from "../loaders/PulseLoader";
import { ButtonProps, ButtonType } from "./Button";
interface ButtonStyledProps extends Omit<ButtonProps, 'type'>, Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    buttonType?: ButtonType;
}
export declare const ButtonStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & ButtonStyledProps, import("react").DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
export declare const ContentWrapperStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & ButtonProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const LoaderStyled: import("@emotion/styled").StyledComponent<Pick<PulseLoaderProps, "className"> & Partial<Pick<PulseLoaderProps, "type" | "size">> & Partial<Pick<import("../loaders/PulseLoader/PulseLoader").DefaultPulseLoaderProps, never>> & {
    theme?: import("@emotion/react").Theme;
} & PulseLoaderProps, {}, {}>;
export declare const IconWrapperStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & ButtonProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const getIconStyles: () => SerializedStyles;
export declare const TextContentStyled: import("@emotion/styled").StyledComponent<import("components/Text").TextProps & import("react").RefAttributes<HTMLParagraphElement | HTMLSpanElement> & {
    theme?: import("@emotion/react").Theme;
} & ButtonProps, {}, {}>;
export {};
