/// <reference types="react" />
export interface DefaultSeparatorProps {
    mode?: 'vertical' | 'horizontal';
}
export interface SeparatorProps extends DefaultSeparatorProps {
    className?: string;
}
export declare function Separator(props: SeparatorProps): JSX.Element;
export declare namespace Separator {
    var defaultProps: DefaultSeparatorProps;
}
