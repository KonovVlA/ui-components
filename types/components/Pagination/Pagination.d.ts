/// <reference types="react" />
export interface DefaultPaginationProps {
    page: number;
    max: number;
}
export interface PaginationProps extends DefaultPaginationProps {
    className?: string;
    disabled?: boolean;
    onChange?: (page: number) => void;
}
export declare function Pagination(props: PaginationProps): JSX.Element;
export declare namespace Pagination {
    var defaultProps: DefaultPaginationProps;
    var ItemsAmount: typeof import("./ItemsAmount").ItemsAmount;
}
