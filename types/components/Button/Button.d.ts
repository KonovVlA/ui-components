import React, { ButtonHTMLAttributes, ComponentType, FocusEvent, MouseEventHandler, ReactNode } from 'react';
import { ComponentSize, FontWeightType, ComponentThemeType } from "../../definitions";
import { IconProps } from "../../hocs/withIcon";
export type ButtonType = ComponentThemeType | 'transparent' | 'text' | 'textSecondary' | 'cleared';
export type ButtonHTMLType = ButtonHTMLAttributes<HTMLButtonElement>['type'];
export type ButtonSize = Extract<ComponentSize, 'md' | 'sm'>;
export interface DefaultButtonProps {
    type?: ButtonType;
    size?: ButtonSize;
    htmlType?: ButtonHTMLType;
    fullWidth?: boolean;
    fontWeight?: FontWeightType;
}
export interface ButtonProps extends DefaultButtonProps {
    className?: string;
    children?: ReactNode;
    loading?: boolean;
    startIcon?: ComponentType<IconProps>;
    startIconClassName?: string;
    startIconWrapperClassName?: string;
    endIcon?: ComponentType<IconProps>;
    endIconClassName?: string;
    endIconWrapperClassName?: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    onFocus?: (event: FocusEvent) => void;
    onBlur?: (event: FocusEvent) => void;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
