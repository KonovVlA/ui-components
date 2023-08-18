import { ReactNode } from 'react';
import { IconProps } from "../../hocs/withIcon";
import { ComponentSize } from "../../definitions";
import { ModalTitle } from "./ModalTitle";
import { ModalBody } from "./ModalBody";
import { ModalActions } from "./ModalActions";
import { ModalAction } from "./ModalAction";
interface DefaultModalProps {
    size?: ComponentSize;
    closable?: boolean;
}
export interface ModalProps extends DefaultModalProps {
    className?: string;
    children?: ReactNode;
    opened?: boolean;
    onClose?: () => void;
    closeIconProps?: IconProps;
}
export declare function Modal(props: ModalProps): JSX.Element;
export declare namespace Modal {
    var defaultProps: DefaultModalProps;
    var Title: typeof ModalTitle;
    var Body: typeof ModalBody;
    var Actions: typeof ModalActions;
    var Action: typeof ModalAction;
}
export {};
