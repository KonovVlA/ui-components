import { ReactNode } from 'react';
interface DefaultModalActionsProps {
    direction?: 'row' | 'column';
}
export interface ModalActionsProps extends DefaultModalActionsProps {
    className?: string;
    children?: ReactNode;
}
export declare function ModalActions(props: ModalActionsProps): JSX.Element;
export declare namespace ModalActions {
    var defaultProps: DefaultModalActionsProps;
}
export {};
