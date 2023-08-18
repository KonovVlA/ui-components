import React, { ReactNode } from 'react';
export interface TableContainerProps {
    className?: string;
    children: ReactNode;
}
export declare const TableContainer: React.ForwardRefExoticComponent<TableContainerProps & React.RefAttributes<HTMLDivElement>>;
