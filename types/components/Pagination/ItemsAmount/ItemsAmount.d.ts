/// <reference types="react" />
interface DefaultAmountProps {
    items: number[];
}
interface ItemsAmountProps extends DefaultAmountProps {
    className?: string;
    onChange?: (value: number) => void;
    currentAmount: number;
    disabled?: boolean;
}
export declare function ItemsAmount(props: ItemsAmountProps): JSX.Element;
export declare namespace ItemsAmount {
    var defaultProps: DefaultAmountProps;
}
export {};
