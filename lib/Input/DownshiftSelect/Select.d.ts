import React, { HTMLProps } from 'react';
import { UseComboboxProps } from 'downshift';
import * as internalComponents from './SelectStyle';
export interface Item {
    value: string;
    label: string;
    disabled?: boolean;
    [x: string]: any;
}
export declare const defaultTransformFunction: (items: Item[], inputValue: string) => Item[];
export declare const itemToString: (item: Item) => string;
export declare const defaultEmptyListText = "No results found. Try another keyword to search for.";
export declare type ItemProps = {
    item: Item;
};
declare type ContainerType = HTMLProps<HTMLDivElement>;
declare type LabelType = HTMLProps<HTMLLabelElement>;
declare type ComboboxType = HTMLProps<HTMLDivElement>;
declare type InputType = HTMLProps<HTMLInputElement>;
declare type IndicatorsContainerType = HTMLProps<HTMLDivElement>;
declare type LoadingIndicatorType = HTMLProps<HTMLDivElement>;
declare type ClearButtonType = HTMLProps<HTMLButtonElement>;
declare type ToggleButtonType = HTMLProps<HTMLButtonElement>;
declare type MenuType = HTMLProps<HTMLUListElement>;
declare type ItemType = ItemProps & HTMLProps<HTMLLIElement>;
declare type EmptyListType = HTMLProps<HTMLLIElement>;
declare type HelperTextType = HTMLProps<HTMLSpanElement>;
declare type GroupContainerType = HTMLProps<HTMLLIElement>;
declare type GroupType = HTMLProps<HTMLUListElement>;
declare type GroupHeadingType = HTMLProps<HTMLLIElement>;
export interface Components {
    Container: React.ComponentType<ContainerType>;
    Label: React.ComponentType<LabelType>;
    Combobox: React.ComponentType<ComboboxType>;
    Input: React.ComponentType<InputType>;
    IndicatorsContainer: React.ComponentType<IndicatorsContainerType>;
    LoadingIndicator: React.ComponentType<LoadingIndicatorType>;
    ClearButton: React.ComponentType<ClearButtonType>;
    ToggleButton: React.ComponentType<ToggleButtonType>;
    Menu: React.ComponentType<MenuType>;
    Item: React.ComponentType<ItemType>;
    EmptyList: React.ComponentType<EmptyListType>;
    HelperText: React.ComponentType<HelperTextType>;
    GroupContainer: React.ComponentType<GroupContainerType>;
    Group: React.ComponentType<GroupType>;
    GroupHeading: React.ComponentType<GroupHeadingType>;
}
export declare const SubComponents: typeof internalComponents;
export interface Props {
    /** The items to choose from. */
    items: Item[];
    /** Transforms items to final list of items that will be shown, based on the search string and your custom requirements. */
    transformFunction?: (items: Item[], inputValue: string) => Item[];
    /** Overrides for built-in components */
    components?: Partial<Components>;
    /** Sets the Select into a loading state */
    isLoading?: boolean;
    /** Set to true to open the menu when the component initializes */
    isOpenInitially?: boolean;
    /** Text to display below the Select */
    helperText?: string;
    /** Props forwarded to internal downshift hook */
    downshift?: Partial<UseComboboxProps<Item>>;
    /** Text to be displayed in the input before the user types or selects an
     * option */
    placeholder?: string;
    /** Text to be displayed above the Select component */
    label?: string;
    /** Disables the select. Changes styles and prevents any actions/events. */
    disabled?: boolean;
    /** Sets the internal input to readonly. Good for small lists that don't need to be filtered */
    disableTyping?: boolean;
    /** If true, the Select component will be set into an error state */
    invalid?: boolean;
    /** Control prop for controlling whether the menu is open or not */
    isOpen?: boolean;
    /** Called each time the menu is open or closed */
    onIsOpenChange?: (isOpen: boolean) => void;
    /** Control prop for controlling which item is selected */
    selectedItem?: Item;
    /** Called each time the selected item was changed */
    onSelectedItemChange?: (selectedItem: Item) => void;
    /** Control prop for controlling the value in the text input */
    inputValue?: string;
    /** Called each time the value in the input text changes */
    onInputValueChange?: (inputValue: string) => void;
    /** Called each time the Select is reset */
    onClear?: () => void;
    /** Called each time the text input gains focus */
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    /** Called each time the text input loses focus */
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    /** Text to be displayed in EmptyList when transformFunction returns an empty list */
    emptyListText?: string;
    /** Key by which to group items. Also used as group */
    groupKey?: string;
}
export declare const Select: React.FC<Props> & {
    Components: Components;
};
export {};
