import { ReactNode } from 'react';
import { TabsType } from "../contexts";
export interface DefaultTabsProps {
    type?: TabsType;
}
export interface TabsProps extends DefaultTabsProps {
    defaultValue?: string;
    value?: string;
    children: ReactNode;
    onChange?: (value: string) => void;
}
export declare function Tabs(props: TabsProps): JSX.Element;
export declare namespace Tabs {
    var Tab: typeof import("../UnderlinedTab").UnderlinedTab;
    var TabGroup: typeof import("../UnderlinedTabGroup").UnderlinedTabGroup;
    var UnderlinedTab: typeof import("../UnderlinedTab").UnderlinedTab;
    var UnderlinedTabGroup: typeof import("../UnderlinedTabGroup").UnderlinedTabGroup;
    var ButtonTab: typeof import("../ButtonTab").ButtonTab;
    var ButtonTabGroup: typeof import("../ButtonTabGroup").ButtonTabGroup;
    var TabContent: typeof import("../TabContent").TabContent;
    var defaultProps: DefaultTabsProps;
}
