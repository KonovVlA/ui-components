import { ComponentType, Ref } from 'react';
export declare function createHOC<P, R, T>(displayName: string, hocFn: (Component: ComponentType<P>, props: R, ref: Ref<T>) => JSX.Element): (Component: ComponentType<P>) => ComponentType<R>;
