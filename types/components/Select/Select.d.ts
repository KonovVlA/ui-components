import React, { ComponentType, FocusEvent, ReactNode } from 'react';
import { Props } from 'react-select';
import { FormatOptionLabelMeta } from 'react-select/base';
import { WithDescriptionProps } from "../../hocs/withDescription";
import { WithErrorMessageProps } from "../../hocs/withErrorMessage";
export type SelectOptionValue = string | number;
export type SelectValue = SelectOptionValue | SelectOptionValue[];
export type SelectOption = {
    label?: string | ReactNode;
    value: SelectOptionValue;
    [key: string]: unknown;
};
export type SelectOptionMeta = FormatOptionLabelMeta<SelectOption>;
export type SelectOptionComponentProps = SelectOption & SelectOptionMeta;
export type ReactSelectProps = Props<SelectOption>;
type PickedDefaultSelectProps = Partial<Pick<ReactSelectProps, 'placeholder' | 'menuPlacement' | 'minMenuHeight' | 'maxMenuHeight'>>;
type PickedSelectProps = Pick<ReactSelectProps, 'options'> & Partial<Pick<ReactSelectProps, 'filterOption' | 'onMenuScrollToTop' | 'onMenuScrollToBottom' | 'defaultValue' | 'defaultInputValue' | 'inputValue'>>;
interface DefaultSelectProps extends PickedDefaultSelectProps {
    closeAfterSelect?: boolean;
    searchable?: boolean;
    multi?: boolean;
    clearable?: boolean;
    loading?: boolean;
    innerLoader?: boolean;
    disableSearchOnSelect?: boolean;
    menuPortalTarget?: HTMLElement;
}
export interface SelectProps extends PickedSelectProps, DefaultSelectProps, WithDescriptionProps, WithErrorMessageProps {
    className?: string;
    labelClassName?: string;
    name?: string;
    value?: SelectValue;
    label?: React.ReactNode;
    disabled?: boolean;
    required?: boolean;
    OptionComponent?: ComponentType<SelectOptionComponentProps>;
    onChange?: (value?: SelectValue) => void;
    onFocus?: (event: FocusEvent) => void;
    onBlur?: (event: FocusEvent) => void;
    onSearch?: (value: string) => void;
}
export declare function SelectComponent(props: SelectProps): JSX.Element;
export declare namespace SelectComponent {
    var defaultProps: DefaultSelectProps;
}
export declare const Select: (props: SelectProps) => JSX.Element;
export {};
