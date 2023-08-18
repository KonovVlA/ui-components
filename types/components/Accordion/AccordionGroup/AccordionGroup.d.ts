import { ReactNode } from 'react';
import { ComponentSize } from "../../../definitions";
export interface DefaultAccordionGroupProps {
    size?: ComponentSize;
    mode?: 'single' | 'multi';
}
export interface AccordionGroupProps extends DefaultAccordionGroupProps {
    className?: string;
    children: ReactNode;
}
export declare function AccordionGroup(props: AccordionGroupProps): JSX.Element;
export declare namespace AccordionGroup {
    var defaultProps: DefaultAccordionGroupProps;
}
