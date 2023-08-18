import { ReactNode } from 'react';
import { ComponentSize } from "../../../definitions";
export interface UnderlinedTabChildrenProps {
    className?: string;
    size: ComponentSize;
}
export interface DefaultUnderlinedTabProps {
    size?: ComponentSize;
}
export interface UnderlinedTabProps extends DefaultUnderlinedTabProps {
    className?: string;
    value: string;
    children?: ReactNode | ((props: UnderlinedTabChildrenProps) => ReactNode);
    onSelect?: () => void;
}
export declare function UnderlinedTab(props: UnderlinedTabProps): JSX.Element;
export declare namespace UnderlinedTab {
    var defaultProps: DefaultUnderlinedTabProps;
}
