import { ReactNode } from 'react';
import { CheckboxValue } from "../Checkbox";
import { ComponentSize } from "../../../definitions/ComponentSize";
interface DefaultCheckboxGroupProps {
    size?: ComponentSize;
    direction?: 'column' | 'row';
}
export interface CheckboxGroupProps extends DefaultCheckboxGroupProps {
    value?: CheckboxValue[];
    name?: string;
    label?: ReactNode;
    disabled?: boolean;
    required?: boolean;
    className?: string;
    children: ReactNode;
    onChange?: (value: CheckboxValue[]) => void;
}
export declare function CheckboxGroup(props: CheckboxGroupProps): JSX.Element;
export declare namespace CheckboxGroup {
    var defaultProps: DefaultCheckboxGroupProps;
}
export {};
