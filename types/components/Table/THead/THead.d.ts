import React, { ReactNode } from 'react';
export interface THeadProps {
    className?: string;
    children: ReactNode;
}
export declare const THead: React.ForwardRefExoticComponent<THeadProps & React.RefAttributes<HTMLTableSectionElement>>;
