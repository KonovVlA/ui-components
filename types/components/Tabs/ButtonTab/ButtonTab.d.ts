import { ReactNode } from 'react';
export interface ButtonTabChildrenProps {
    className?: string;
}
export interface ButtonTabProps {
    className?: string;
    value: string;
    children?: ReactNode | ((props: ButtonTabChildrenProps) => ReactNode);
    onSelect?: () => void;
}
export declare function ButtonTab(props: ButtonTabProps): JSX.Element;
