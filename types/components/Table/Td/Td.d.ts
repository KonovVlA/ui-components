import React, { ReactNode } from 'react';
import { TableComponentSize } from "../definitions";
export interface TdChildrenProps {
    size: TableComponentSize;
}
export interface TdProps {
    className?: string;
    children?: ReactNode | ((props: TdChildrenProps) => ReactNode);
    colSpan?: number;
    rowSpan?: number;
    sticky?: boolean;
    left?: number | string;
    right?: number | string;
    onClick?: () => void;
}
export declare const Td: React.ForwardRefExoticComponent<TdProps & React.RefAttributes<HTMLTableCellElement>>;
