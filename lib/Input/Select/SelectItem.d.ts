import * as React from 'react';
import { SelectItemWrapper } from './SelectStyle';
declare const SelectItem: React.FunctionComponent<Props>;
declare type Props = React.ComponentPropsWithoutRef<typeof SelectItemWrapper> & {
    children: React.ReactNode;
    onClick?(event: React.MouseEvent<HTMLLIElement, MouseEvent>): void;
    className?: string;
};
export default SelectItem;
