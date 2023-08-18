/// <reference types="react" />
import { SerializedStyles } from '@emotion/react';
import { ComponentSize } from "../../../definitions";
import { UnderlinedTabGroupProps } from "./UnderlinedTabGroup";
export declare const tabSizeMapper: Record<ComponentSize, SerializedStyles>;
export declare function createTabStyles(size: any): SerializedStyles;
export declare const WrapperStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & UnderlinedTabGroupProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const WrapperInnerStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & UnderlinedTabGroupProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
