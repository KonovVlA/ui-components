import React, { ReactNode } from 'react';
export interface TrProps {
    className?: string;
    children: ReactNode;
    sticky?: boolean;
    top?: number | string;
    bottom?: number | string;
    onClick?: () => void;
    collapsed?: boolean;
}
export declare const Tr: React.ForwardRefExoticComponent<TrProps & React.RefAttributes<HTMLTableRowElement>>;
