/// <reference types="react" />
import { ComponentThemeType } from "../../../../definitions";
export type TabsType = ComponentThemeType;
export interface TabsContextState {
    value: string;
    type: TabsType;
    onSelect: (value: string) => void;
}
export declare const DEFAULT_STATE: TabsContextState;
export declare const TabsContext: import("react").Context<TabsContextState>;
