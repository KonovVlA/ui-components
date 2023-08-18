/// <reference types="react" />
import { ComponentSize } from "../../../definitions";
import { RadioGroupProps } from "./RadioGroup";
export declare const RadioGroupStyled: import("@emotion/styled").StyledComponent<import("components/Label").LabelProps & import("react").RefAttributes<import("components/Label").LabelElement> & {
    theme?: import("@emotion/react").Theme;
} & RadioGroupProps, {}, {}>;
export declare const ContentStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & RadioGroupProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const getRadioStyles: (size: ComponentSize) => import("@emotion/utils").SerializedStyles;
