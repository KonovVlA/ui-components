import React, { ReactNode } from 'react';
import { TableComponentSize } from "../definitions";
export interface DefaultTableProps {
    size?: TableComponentSize;
    placeholder?: ReactNode | false;
    disableGutters?: boolean;
}
export interface TableProps extends DefaultTableProps {
    className?: string;
    children: ReactNode;
}
export declare const Table: React.ForwardRefExoticComponent<TableProps & React.RefAttributes<HTMLTableElement>> & import("../definitions").TableStatics<React.ForwardRefExoticComponent<import("../TableContainer").TableContainerProps & React.RefAttributes<HTMLDivElement>>, React.ForwardRefExoticComponent<import("../THead").THeadProps & React.RefAttributes<HTMLTableSectionElement>>, React.ForwardRefExoticComponent<import("../TBody").TBodyProps & React.RefAttributes<HTMLTableSectionElement>>, React.ForwardRefExoticComponent<import("../Th").ThProps & React.RefAttributes<HTMLTableCellElement>>, React.ForwardRefExoticComponent<import("../Td").TdProps & React.RefAttributes<HTMLTableCellElement>>, React.ForwardRefExoticComponent<import("../Tr").TrProps & React.RefAttributes<HTMLTableRowElement>>, React.ComponentType<Omit<import("../Tr").TrProps & React.RefAttributes<HTMLTableRowElement>, "children"> & import("../hocs").CollapsibleTrInjectedProps>>;
