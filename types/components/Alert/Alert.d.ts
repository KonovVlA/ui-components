import { ComponentType, ReactNode } from 'react';
import { LinkType } from "../Link/definitions";
import { LinkProps } from "../Link/Link";
import { IconProps } from "../../hocs/withIcon";
export type AlertType = 'success' | 'warning' | 'info' | 'neutral';
export interface DefaultAlertProps {
    type?: AlertType;
}
export interface AlertProps extends DefaultAlertProps {
    className?: string;
    noIcon?: boolean;
    title?: string;
    description?: ReactNode;
    actions?: ActionProps[];
}
export interface ActionProps extends Omit<LinkProps, 'children' | 'type'> {
    text?: string;
}
export declare const alertTypeToIconMapper: Record<AlertType, ComponentType<IconProps>>;
export declare const alertTypeToLinkTypeMapper: Record<AlertType, LinkType>;
export declare function Alert(props: AlertProps): JSX.Element;
export declare namespace Alert {
    var defaultProps: DefaultAlertProps;
}
