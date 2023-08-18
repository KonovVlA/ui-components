import React, { ReactNode } from 'react';
import { ComponentSize } from "../../../definitions";
import { WithDescriptionProps } from "../../../hocs/withDescription";
import { AccordionGroup } from "../AccordionGroup";
export declare const IS_ACCORDION_DEFAULT_OPENED = true;
export interface DefaultAccordionComponentProps {
    size?: ComponentSize;
    defaultOpened?: boolean;
    withBorder?: boolean;
}
export interface AccordionComponentProps extends DefaultAccordionComponentProps, WithDescriptionProps {
    opened?: boolean;
    className?: string;
    children?: ReactNode;
    title: ReactNode;
    onOpen?: () => void;
    onClose?: () => void;
}
export declare function AccordionComponent(props: AccordionComponentProps): JSX.Element;
export declare namespace AccordionComponent {
    var defaultProps: DefaultAccordionComponentProps;
}
export type AccordionProps = React.ComponentProps<typeof WrappedAccordion>;
export declare const WrappedAccordion: React.ComponentType<Omit<AccordionComponentProps, "renderDescription">>;
export declare const Accordion: {
    (props: AccordionProps): JSX.Element;
    Group: typeof AccordionGroup;
};
