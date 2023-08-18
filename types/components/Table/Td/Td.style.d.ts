/// <reference types="react" />
import { TdProps } from "./Td";
interface TdStyledProps extends TdProps {
    disableGutters?: boolean;
}
export declare const TdStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & TdStyledProps, import("react").DetailedHTMLProps<import("react").TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, {}>;
export {};
