import * as React from 'react';
import { BreadcrumbItemWrapper } from './BreadcrumbStyle';
declare const BreadcrumbItem: React.FunctionComponent<Props>;
declare type Props = React.ComponentPropsWithoutRef<typeof BreadcrumbItemWrapper> & {
    children: React.ReactNode;
};
export default BreadcrumbItem;
