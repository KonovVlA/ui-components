import { ReactNode, MouseEventHandler, FocusEvent, ComponentType } from 'react';
import { IconProps } from "../../../hocs/withIcon";
import { ComponentSize, FontWeightType } from "../../../definitions";
import { LinkType } from "../definitions";
export interface DefaultDefaultLinkProps {
    type?: LinkType;
    underlined?: boolean;
    size?: ComponentSize;
    weight?: FontWeightType;
}
export interface DefaultLinkProps extends DefaultDefaultLinkProps {
    children?: ReactNode;
    className?: string;
    disabled?: boolean;
    href?: string;
    startIcon?: ComponentType<IconProps>;
    endIcon?: ComponentType<IconProps>;
    target?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    onFocus?: (event: FocusEvent) => void;
    onBlur?: (event: FocusEvent) => void;
}
export declare function DefaultLink(props: DefaultLinkProps): JSX.Element;
export declare namespace DefaultLink {
    var defaultProps: DefaultDefaultLinkProps;
}
