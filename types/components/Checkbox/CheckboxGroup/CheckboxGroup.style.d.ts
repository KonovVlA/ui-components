/// <reference types="react" />
import { ComponentSize } from "../../../definitions";
import { CheckboxGroupProps } from "./CheckboxGroup";
export declare const CheckboxGroupStyled: import("@emotion/styled").StyledComponent<import("components/Label").LabelProps & import("react").RefAttributes<import("components/Label").LabelElement> & {
    theme?: import("@emotion/react").Theme;
} & CheckboxGroupProps, {}, {}>;
export declare const ContentStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & CheckboxGroupProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const getCheckboxStyles: (size: ComponentSize) => import("@emotion/utils").SerializedStyles;
