import React, { FocusEvent, MouseEvent } from 'react';
export interface IconProps {
    className?: string;
    interactive?: boolean;
    onClick?: (event: MouseEvent) => void;
    onFocus?: (event: FocusEvent) => void;
    onBlur?: (event: FocusEvent) => void;
}
export declare const withIcon: (Component: React.ComponentType<React.SVGProps<SVGElement>>) => React.ComponentType<IconProps>;
