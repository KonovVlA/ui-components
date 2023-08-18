import React, { ComponentType, ReactNode } from 'react';
import { TrProps } from "../../Tr";
export interface TrChildrenProps {
    collapsed: boolean;
    onToggle: () => void;
}
export interface CollapsibleTrInjectedProps {
    children: (props: TrChildrenProps) => ReactNode;
    innerClassName?: string;
    renderInner?: () => ReactNode;
}
export declare function withCollapsibleTr<P extends TrProps, T>(TrComponent: ComponentType<P>): React.ComponentType<Omit<P, "children"> & CollapsibleTrInjectedProps>;
