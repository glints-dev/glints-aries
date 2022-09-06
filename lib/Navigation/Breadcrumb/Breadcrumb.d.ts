import * as React from 'react';
import { BreadcrumbContainer } from './BreadcrumbStyle';
import BreadcrumbItem from './BreadcrumbItem';
export declare const Breadcrumb: Breadcrumb;
declare type Breadcrumb = React.FunctionComponent<Props> & {
    Item: typeof BreadcrumbItem;
};
export declare type Props = React.ComponentPropsWithoutRef<typeof BreadcrumbContainer> & {
    children: React.ReactNode;
};
export default Breadcrumb;
