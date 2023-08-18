/// <reference types="react" />
import { PopperBaseProps } from "../PopperBase";
import { PopperMode } from "../definitions";
export interface DefaultPopperProps {
    mode?: PopperMode;
}
export interface PopperProps extends DefaultPopperProps, Omit<PopperBaseProps, 'interactor'> {
}
export declare function Popper(props: PopperProps): JSX.Element;
export declare namespace Popper {
    var defaultProps: DefaultPopperProps;
}
