import * as React from 'react';
import { TabsContent } from './TabsStyle';
declare const TabPane: React.FunctionComponent<Props>;
export declare type Props = React.ComponentPropsWithoutRef<typeof TabsContent> & {
    children?: React.ReactNode;
    tab?: string | React.ReactNode;
    label?: string | number;
    tabClassName?: string;
};
export default TabPane;
