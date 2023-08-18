/// <reference types="react" />
import { ComponentSize } from "../../../definitions";
export interface DefaultSpinnerLoaderProps {
    size?: ComponentSize;
}
export interface SpinnerLoaderProps extends DefaultSpinnerLoaderProps {
    className?: string;
    spinnerClassName?: string;
}
export declare function SpinnerLoader(props: SpinnerLoaderProps): JSX.Element;
export declare namespace SpinnerLoader {
    var defaultProps: DefaultSpinnerLoaderProps;
}
