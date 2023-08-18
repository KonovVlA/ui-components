import React from 'react';
export type InfoType = 'info' | 'error' | 'refresh';
interface DefaultInfoProps {
    type?: InfoType;
}
export interface InfoProps extends DefaultInfoProps {
    className?: string;
    children?: React.ReactNode;
    interactive?: boolean;
    onClick?: () => void;
}
export declare function Info(props: InfoProps): JSX.Element;
export declare namespace Info {
    var defaultProps: DefaultInfoProps;
}
export {};
