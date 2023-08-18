import React, { ReactNode } from 'react';
export interface TBodyProps {
    className?: string;
    children: ReactNode;
}
export declare const TBody: React.ForwardRefExoticComponent<TBodyProps & React.RefAttributes<HTMLTableSectionElement>>;
