import React from 'react';
import { AlertProps } from "../../../Alert";
import { NotifierProps } from "../notifier";
export interface AlertComponentProps extends AlertProps {
}
export interface AlertNotifierProps extends NotifierProps {
}
export declare function createAlertNotifier(notifierProps?: AlertNotifierProps): {
    notify: (componentProps?: AlertComponentProps) => React.ReactText;
    dismiss: (id?: string | number) => void;
};
