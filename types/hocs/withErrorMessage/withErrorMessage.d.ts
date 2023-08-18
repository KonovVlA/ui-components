import React from 'react';
import { ComponentSize } from "../../definitions/ComponentSize";
export interface WithErrorMessageProps extends WithErrorMessageRenderProp {
    warning?: React.ReactNode;
    error?: React.ReactNode;
}
export interface WithErrorMessageRenderProp {
    renderErrorMessage?: RenderErrorMessageFunction;
}
export interface RenderErrorMessageOptions {
    size?: ComponentSize;
    className?: string;
}
export type RenderErrorMessageFunction = (options?: RenderErrorMessageOptions) => React.ReactNode;
export declare function withErrorMessage<P extends WithErrorMessageProps, T>(Component: React.ComponentType<P>): React.ComponentType<Omit<P, "renderErrorMessage">>;
