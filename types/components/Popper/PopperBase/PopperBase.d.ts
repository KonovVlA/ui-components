import { ReactNode } from 'react';
import { PopperPlacement, PopperState } from "../definitions";
import { PopperInteractor } from "./definitions";
interface DefaultPopperBaseProps {
    placement?: PopperPlacement;
    offset?: number;
}
export interface PopperBaseProps extends DefaultPopperBaseProps {
    className?: string;
    children: ReactNode | ((state: PopperState) => ReactNode);
    render?: (state: PopperState) => ReactNode;
    interactor?: PopperInteractor;
    opened?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}
export declare function PopperBase(props: PopperBaseProps): JSX.Element;
export declare namespace PopperBase {
    var defaultProps: DefaultPopperBaseProps;
}
export {};
