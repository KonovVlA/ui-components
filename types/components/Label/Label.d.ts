import React, { ReactNode, FocusEvent } from 'react';
import { ComponentSize } from "../../definitions";
export type LabelComponentSize = ComponentSize;
export type LabelElement = HTMLLabelElement & HTMLDivElement;
export interface DefaultLabelProps {
    size?: LabelComponentSize;
    as?: 'label' | 'div';
}
export interface LabelProps extends DefaultLabelProps {
    className?: string;
    labelClassName?: string;
    label?: ReactNode;
    required?: boolean;
    children?: ReactNode;
    onFocus?: (event: FocusEvent) => void;
    onBlur?: (event: FocusEvent) => void;
}
export declare const Label: React.ForwardRefExoticComponent<LabelProps & React.RefAttributes<LabelElement>>;
