import React, { ComponentType, SVGProps } from 'react';
export interface IconStyledProps extends SVGProps<SVGElement> {
    icon: ComponentType<SVGProps<SVGElement>>;
    interactive: boolean;
}
export declare const IconStyled: import("@emotion/styled").StyledComponent<(IconStyledProps | (IconStyledProps & {
    children?: React.ReactNode;
})) & {
    theme?: import("@emotion/react").Theme;
}, {}, {}>;
