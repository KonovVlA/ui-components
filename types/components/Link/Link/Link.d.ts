/// <reference types="react" />
import { DefaultLinkProps } from "../DefaultLink";
import { ExternalLinkProps } from "../ExternalLink";
export interface LinkProps extends DefaultLinkProps, ExternalLinkProps {
    external?: boolean;
}
export declare function Link(props: LinkProps): JSX.Element;
