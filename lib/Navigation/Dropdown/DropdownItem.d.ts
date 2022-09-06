import * as React from 'react';
import { DropdownItemWrapper } from './DropdownStyle';
declare const DropdownItem: React.FunctionComponent<Props>;
export declare type Props = React.ComponentPropsWithoutRef<typeof DropdownItemWrapper> & {
    value?: any;
    onClick?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
    children: React.ReactNode;
};
export default DropdownItem;
