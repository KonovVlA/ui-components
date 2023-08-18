import React, { ReactNode } from 'react';
import { TableComponentSize } from "../definitions";
export interface DefaultThProps {
    withoutSeparator?: boolean;
}
export interface ThChildrenProps {
    size: TableComponentSize;
}
export interface ThProps extends DefaultThProps {
    className?: string;
    children?: ReactNode | ((props: ThChildrenProps) => ReactNode);
    colSpan?: number;
    rowSpan?: number;
    sticky?: boolean;
    left?: number | string;
    right?: number | string;
    onClick?: () => void;
}
export declare const Th: React.ForwardRefExoticComponent<ThProps & React.RefAttributes<HTMLTableCellElement>>;
