import React from 'react';
import { TrProps } from "../Tr";
export type CollapsibleTrProps = TrProps;
export declare const CollapsibleTr: React.ComponentType<Omit<TrProps & React.RefAttributes<HTMLTableRowElement>, "children"> & import("../hocs").CollapsibleTrInjectedProps>;
