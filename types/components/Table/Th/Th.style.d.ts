/// <reference types="react" />
import { ThProps } from "./Th";
interface ThStyledProps extends ThProps {
    disableGutters?: boolean;
}
export declare const SeparatorStyled: import("@emotion/styled").StyledComponent<Pick<import("components/Separator").SeparatorProps, "className"> & Partial<Pick<import("components/Separator").SeparatorProps, "mode">> & Partial<Pick<import("../../Separator/Separator").DefaultSeparatorProps, never>> & {
    theme?: import("@emotion/react").Theme;
}, {}, {}>;
export declare const ThStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & ThStyledProps, import("react").DetailedHTMLProps<import("react").ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, {}>;
export {};
