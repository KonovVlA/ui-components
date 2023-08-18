import React, { ChangeEvent, FocusEvent } from 'react';
import { ComponentSize } from "../../../definitions";
import { WithDescriptionProps } from "../../../hocs/withDescription";
interface DefaultRadioProps {
    size?: ComponentSize;
}
export type RadioValue = string | number;
export interface RadioComponentProps extends DefaultRadioProps, WithDescriptionProps {
    name?: string;
    value?: RadioValue;
    checked?: boolean;
    children?: React.ReactNode;
    onSelect?: (event: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: FocusEvent) => void;
    onBlur?: (event: FocusEvent) => void;
    disabled?: boolean;
    className?: string;
}
export declare const WrappedRadio: React.ComponentType<Omit<RadioComponentProps, "renderDescription">>;
export type RadioProps = React.ComponentProps<typeof WrappedRadio>;
export declare const Radio: {
    (props: RadioProps): JSX.Element;
    Group: (props: import("../RadioGroup").RadioGroupProps) => JSX.Element;
};
export {};
