import { ReactNode } from 'react';
import { TableComponentSize } from "../../definitions";
export interface TableContextState {
    size: TableComponentSize;
    placeholder: ReactNode;
    disableGutters: boolean;
}
export declare const DEFAULT_STATE: TableContextState;
export declare const TableContext: import("react").Context<TableContextState>;
