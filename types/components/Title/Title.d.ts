import { ReactNode } from 'react';
export type LevelType = 1 | 2 | 3 | 4 | 5;
export interface DefaultTitleProps {
    level?: LevelType;
}
export interface TitleProps extends DefaultTitleProps {
    className?: string;
    title?: string;
    children?: ReactNode;
}
export declare function Title(props: TitleProps): JSX.Element;
export declare namespace Title {
    var defaultProps: DefaultTitleProps;
}
