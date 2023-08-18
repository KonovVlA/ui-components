import { ReactNode } from 'react';
import { ComponentSize } from "../../../definitions";
export interface DefaultUnderlinedTabGroupProps {
    size?: ComponentSize;
    separated?: boolean;
}
export interface UnderlinedTabGroupProps extends DefaultUnderlinedTabGroupProps {
    className?: string;
    children?: ReactNode;
}
export declare function UnderlinedTabGroup(props: UnderlinedTabGroupProps): JSX.Element;
export declare namespace UnderlinedTabGroup {
    var defaultProps: DefaultUnderlinedTabGroupProps;
}
