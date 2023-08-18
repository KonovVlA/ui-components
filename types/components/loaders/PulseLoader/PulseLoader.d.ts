/// <reference types="react" />
import { ComponentSize, LoaderTheme } from "../../../definitions";
export interface DefaultPulseLoaderProps {
    size?: ComponentSize;
    type?: LoaderTheme;
}
export interface PulseLoaderProps extends DefaultPulseLoaderProps {
    className?: string;
}
export declare function PulseLoader(props: PulseLoaderProps): JSX.Element;
export declare namespace PulseLoader {
    var defaultProps: DefaultPulseLoaderProps;
}
