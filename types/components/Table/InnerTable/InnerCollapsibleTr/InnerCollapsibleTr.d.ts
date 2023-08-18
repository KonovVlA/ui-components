import React from 'react';
import { InnerTrProps } from "../InnerTr";
export type InnerCollapsibleTrProps = InnerTrProps;
export declare const InnerCollapsibleTr: React.ComponentType<Omit<import("../..").TrProps & React.RefAttributes<HTMLTableRowElement>, "children"> & import("../../hocs").CollapsibleTrInjectedProps>;
