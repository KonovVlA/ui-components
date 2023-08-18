/// <reference types="react" />
import { ToastContainerProps as ContainerProps } from 'react-toastify';
interface DefaultNotifiersContainerProps {
    limit?: ContainerProps['limit'];
}
export interface NotifiersContainerProps extends DefaultNotifiersContainerProps {
    containerId?: ContainerProps['containerId'];
    enableMultiContainer?: ContainerProps['enableMultiContainer'];
}
export declare function NotifiersContainer({ limit, containerId, enableMultiContainer }: NotifiersContainerProps): JSX.Element;
export declare namespace NotifiersContainer {
    var defaultProps: DefaultNotifiersContainerProps;
}
export {};
