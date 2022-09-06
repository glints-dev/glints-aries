import * as React from 'react';
declare const SelectList: React.FunctionComponent<Props>;
interface Props {
    activeOptionIndex: number;
    options: React.ReactNode[];
    isFocus: boolean;
    isLoading: boolean;
    noOptionResult?: string;
    small?: boolean;
    handleClickOnOption?: () => void;
    handleMouseEnterOption(event: React.MouseEvent<HTMLLIElement, MouseEvent>): void;
}
export interface SelectItemProps {
    children: string;
    value?: string;
    onOptionClick?(e: React.MouseEvent<HTMLLIElement, MouseEvent>): void;
}
export default SelectList;
