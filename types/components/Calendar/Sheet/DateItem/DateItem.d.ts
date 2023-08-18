/// <reference types="react" />
export type PositionType = 'first' | 'last' | 'same';
export type DateItemType = 'day' | 'month' | 'year';
export interface DateItemProps {
    className?: string;
    wrapperClassName?: string;
    current?: boolean;
    disabled?: boolean;
    selected?: boolean;
    inRange?: boolean;
    onClick?: () => void;
    position?: PositionType;
    children: Date;
    type: DateItemType;
}
export declare function DateItem(props: DateItemProps): JSX.Element;
