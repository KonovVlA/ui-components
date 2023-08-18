import { ReactNode } from 'react';
import { ToastProps } from 'react-toastify';
type DefaultToastProps = 'hideProgressBar' | 'closeButton' | 'autoClose' | 'position';
interface DefaultNotifierProps extends Partial<Pick<ToastProps, DefaultToastProps>> {
}
export interface NotifierProps extends DefaultNotifierProps, Partial<Omit<ToastProps, DefaultToastProps | 'className' | 'bodyClassName'>> {
    children?: ReactNode;
    className?: string;
    bodyClassName?: string;
}
export declare const defaultProps: DefaultNotifierProps;
export declare function createNotifier(props?: NotifierProps): {
    notify: (children: ReactNode) => import("react").ReactText;
    dismiss: (id?: string | number) => void;
};
export {};
