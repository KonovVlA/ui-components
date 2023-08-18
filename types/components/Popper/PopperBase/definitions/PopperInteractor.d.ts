import React from 'react';
import { PopperState } from "../../definitions";
export interface ElementHandlers {
    onClick?: (event: React.MouseEvent) => void;
    onClickOutside?: (event: MouseEvent) => void;
    onMouseEnter?: (event: React.MouseEvent) => void;
    onMouseLeave?: (event: React.MouseEvent) => void;
    onMouseDown?: (event: React.MouseEvent) => void;
    onMouseUp?: (event: React.MouseEvent) => void;
}
export interface PopperHandlers {
    target?: ElementHandlers;
    popper?: ElementHandlers;
}
export type PopperInteractor = (state: PopperState, onOpen: () => void, onClose: () => void) => PopperHandlers;
