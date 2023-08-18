import React from 'react';
interface DefaultCacheProviderProps {
    key?: string;
    container?: HTMLElement;
}
export interface CacheProviderProps extends DefaultCacheProviderProps {
    children?: React.ReactNode;
}
export declare function CacheProvider(props: CacheProviderProps): JSX.Element;
export declare namespace CacheProvider {
    var defaultProps: DefaultCacheProviderProps;
}
export {};
