import React from 'react';
import { ComponentSize } from "../../definitions/ComponentSize";
export interface WithDescriptionProps extends WithDescriptionRenderProp {
    description?: React.ReactNode;
}
export interface WithDescriptionRenderProp {
    renderDescription?: RenderDescriptionFunction;
}
export interface RenderDescriptionOptions {
    size?: ComponentSize;
    className?: string;
}
export type RenderDescriptionFunction = (options?: RenderDescriptionOptions) => React.ReactNode;
export declare function withDescription<P extends WithDescriptionProps, T>(Component: React.ComponentType<P>): React.ComponentType<Omit<P, "renderDescription">>;
