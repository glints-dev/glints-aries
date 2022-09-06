import * as React from 'react';
import { DropdownContainer, DropdownHeader, DropdownBody } from './DropdownStyle';
import { Props as DropdownItemProps } from './DropdownItem';
export declare const Dropdown: {
    ({ label, showHoverLine, dropDownPlacement, noLineBreak, iconDefaultColor, showFullWidth, disabled, hoverToOpen, onChange, children, leftIcon, className, itemElement, ...defaultProps }: Props): JSX.Element;
    Item: React.FunctionComponent<DropdownItemProps>;
};
declare type PropsFromDropdownContainer = Omit<React.ComponentPropsWithoutRef<typeof DropdownContainer>, 'onChange'>;
declare type PropsFromDropdownHeader = Omit<React.ComponentPropsWithoutRef<typeof DropdownHeader>, 'isOpen'>;
declare type PropsFromDropdownBody = Omit<React.ComponentPropsWithoutRef<typeof DropdownBody>, 'open'>;
export interface Props extends PropsFromDropdownContainer, PropsFromDropdownHeader, PropsFromDropdownBody {
    children: React.ReactNode;
    /** Sets label of Dropdown. */
    label: string;
    /** Opens Dropdown on hovering. */
    hoverToOpen?: boolean;
    /** Icon to show at the left side of dropdown button. */
    leftIcon?: React.ReactNode;
    /**	Dropdown label in component. */
    itemElement?: React.ReactNode;
    /** Dropdown icon color */
    iconDefaultColor?: string;
    /** To get value of Dropdown's item. */
    onChange?(value: string): void;
    /** Show underline when hovered. */
    showHoverLine?: boolean;
    /** Placement position for dropdown. */
    dropDownPlacement?: 'left' | 'right';
    /**	No break line in dropdown. */
    noLineBreak?: boolean;
    /**	Dropdown take full width. */
    showFullWidth?: boolean;
    /** Disabling the dropdown. */
    disabled?: boolean;
}
export default Dropdown;
