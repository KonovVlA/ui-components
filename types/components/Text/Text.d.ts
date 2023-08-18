import React, { ReactNode } from 'react';
import { FontWeightType, ComponentSize } from "../../definitions";
export type TextElement = 'span' | 'p';
export type TextType = 'plain' | 'muted' | 'error' | 'info' | 'success';
export interface DefaultTextProps {
    size?: ComponentSize;
    weight?: FontWeightType;
    as?: TextElement;
    type?: TextType;
}
export interface TextProps extends DefaultTextProps {
    children?: ReactNode;
    className?: string;
    title?: string;
    onClick?: () => void;
}
export declare const Text: React.ForwardRefExoticComponent<TextProps & React.RefAttributes<HTMLParagraphElement | HTMLSpanElement>>;
