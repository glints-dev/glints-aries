import React, { HTMLProps, useState } from 'react';
import { useCombobox, UseComboboxProps } from 'downshift';

import * as internalComponents from './SelectStyle';
import { ArrowDownIcon, ArrowUpIcon, CloseCircleSolidIcon } from '../..';
import { isFunction, isUndefined } from 'lodash';
import { useId } from 'react-id-generator';

export interface Item {
  value: string;
  label: string;
  disabled?: boolean;
  [x: string]: any;
}

export const defaultTransformFunction = (items: Item[], inputValue: string) =>
  items.filter(item =>
    item.label.toLowerCase().startsWith(inputValue.toLowerCase())
  );

export const defaultItemToString = (item: Item) => item.label;

export const defaultEmptyListText =
  'No results found. Try another keyword to search for.';

// These are our custom props for our subcomponents. We need this because
// sometimes we want to make additional props available to the subcomponent,
// e.g. a Item subcomponent needs to know the item it represents.
export type ContainerProps = {};
export type LabelProps = {};
export type ComboboxProps = {};
export type InputProps = {};
export type IndicatorsContainerProps = {};
export type LoadingIndicatorProps = {};
export type ClearButtonProps = {};
export type ToggleButtonProps = {};
export type MenuProps = {};
export type ItemProps = {
  item: Item;
};
export type EmptyListProps = {};
export type HelperTextProps = {};

// These are the actual types for the subcomponents. Each subcomponent takes
// its own, custom props (defined by us) AND the props that correspond to the
// intrinsic html element which the subcomponent "extends".
export type ContainerType = ContainerProps & HTMLProps<HTMLDivElement>;
export type LabelType = LabelProps & HTMLProps<HTMLLabelElement>;
export type ComboboxType = ComboboxProps & HTMLProps<HTMLDivElement>;
export type InputType = InputProps & HTMLProps<HTMLInputElement>;
export type IndicatorsContainerType = IndicatorsContainerProps &
  HTMLProps<HTMLDivElement>;
export type LoadingIndicatorType = LoadingIndicatorProps &
  HTMLProps<HTMLDivElement>;
export type ClearButtonType = ClearButtonProps & HTMLProps<HTMLButtonElement>;
export type ToggleButtonType = ToggleButtonProps & HTMLProps<HTMLButtonElement>;
export type MenuType = MenuProps & HTMLProps<HTMLUListElement>;
export type ItemType = ItemProps & HTMLProps<HTMLLIElement>;
export type EmptyListType = EmptyListProps & HTMLProps<HTMLLIElement>;
export type HelperTextType = HelperTextProps & HTMLProps<HTMLSpanElement>;

// This is the type for the 'components' prop on the Select. Using
// ComponentType allows us to take in any kind of component, e.g. class
// components, functional components or styled components.
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
}

export interface Props extends ComboboxProps {
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

  /** Text to be displayed in <code>EmptyList</code> when <code>transformFunction</code> returns an empty list */
  emptyListText?: string;
}

export const Select: React.FC<Props> & { Components: Components } = ({
  items,
  transformFunction = defaultTransformFunction,
  components: externalComponents = {},
  isLoading = false,
  isOpenInitially = false,
  helperText,
  downshift = {},
  placeholder,
  label,
  disabled = false,
  disableTyping = false,
  isOpen: isOpenExternal,
  invalid = false,
  onIsOpenChange: onIsOpenChangeExternal,
  selectedItem: selectedItemExternal,
  onSelectedItemChange: onSelectedItemChangeExternal,
  inputValue: inputValueExternal,
  onInputValueChange: onInputValueChangeExternal,
  onClear,
  onFocus: onFocusExternal,
  onBlur: onBlurExternal,
  emptyListText = defaultEmptyListText,
  ...props
}) => {
  const mergedComponents = {
    ...(internalComponents as Components),
    ...externalComponents,
  };

  const {
    Container,
    Label,
    Combobox,
    Input,
    IndicatorsContainer,
    LoadingIndicator,
    ClearButton,
    ToggleButton,
    Menu,
    Item,
    EmptyList,
    HelperText,
  } = mergedComponents;

  const [inputValueInternal, setInputValueInternal] = useState<string>('');
  const inputValue = inputValueExternal || inputValueInternal;
  const setInputValue = onInputValueChangeExternal || setInputValueInternal;

  const displayItems = transformFunction(items, inputValue);

  const {
    selectedItem,
    isOpen,
    getLabelProps,
    getComboboxProps,
    getInputProps,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
    reset,
    openMenu,
  } = useCombobox<Item>({
    items: displayItems,

    inputValue,
    onInputValueChange: ({ inputValue }) => {
      setInputValue(inputValue);
    },

    itemToString: defaultItemToString,
    initialIsOpen: isOpenInitially,

    ...(!isUndefined(isOpenExternal) && { isOpen: isOpenExternal }),
    ...(isFunction(onIsOpenChangeExternal) && {
      onIsOpenChange: ({ isOpen }) => onIsOpenChangeExternal(isOpen),
    }),

    ...(!isUndefined(selectedItemExternal) && {
      selectedItem: selectedItemExternal,
    }),
    ...(isFunction(onSelectedItemChangeExternal) && {
      onSelectedItemChange: ({ selectedItem }) =>
        onSelectedItemChangeExternal(selectedItem),
    }),

    ...downshift,
  });

  const [helperId] = useId(1, 'description-');

  const handleClear = () => {
    if (isFunction(onClear)) {
      onClear();
    }
    reset();
  };

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const onFocusInternal = () => {
    setIsFocused(true);
  };
  const onBlurInternal = () => {
    setIsFocused(false);
  };
  const onFocus = () => {
    if (isFunction(onFocusExternal)) {
      onFocusExternal();
    }
    onFocusInternal();
  };
  const onBlur = () => {
    if (isFunction(onBlurExternal)) {
      onBlurExternal();
    }
    onBlurInternal();
  };

  return (
    <Container data-testid="container">
      {label && (
        <Label
          {...getLabelProps()}
          data-active={isFocused}
          data-disabled={disabled}
          data-invalid={invalid}
          data-testid="label"
        >
          {label}
        </Label>
      )}
      <Combobox
        {...getComboboxProps()}
        data-disabled={disabled}
        data-invalid={invalid}
        data-active={isFocused}
        onClick={openMenu}
        data-testid="combobox"
      >
        <Input
          {...getInputProps({
            disabled: disabled,
            readOnly: disableTyping,
            onFocus,
            onBlur,
            ...props,
          })}
          placeholder={placeholder}
          aria-invalid={invalid}
          {...(helperText && { 'aria-describedby': helperId })}
          {...(selectedItem && { title: selectedItem.label })}
          data-testid="input"
        />
        <IndicatorsContainer data-testid="indicators-container">
          {isLoading && <LoadingIndicator data-testid="loading-indicator" />}
          {selectedItem && (
            <ClearButton
              type="button"
              onClick={handleClear}
              aria-label="clear selection"
              data-testid="clear-button"
            >
              <CloseCircleSolidIcon />
            </ClearButton>
          )}
          <ToggleButton
            type="button"
            {...getToggleButtonProps({
              disabled,
              onClick: e => e.stopPropagation(),
            })}
            aria-label="toggle menu"
            data-testid="toggle-button"
          >
            {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </ToggleButton>
        </IndicatorsContainer>
      </Combobox>
      <Menu {...getMenuProps()} data-testid="menu">
        {isOpen && displayItems.length > 0 ? (
          displayItems.map((item, index) => (
            <Item
              {...getItemProps({
                item,
                index,
                disabled: disabled || item.disabled,
              })}
              key={item.value}
              item={item}
              title={item.label}
              ref={undefined}
            >
              {defaultItemToString(item)}
            </Item>
          ))
        ) : (
          <EmptyList data-testid="empty-list">{emptyListText}</EmptyList>
        )}
      </Menu>
      {helperText && (
        <HelperText
          id={helperId}
          data-invalid={invalid}
          data-testid="helper-text"
        >
          {helperText}
        </HelperText>
      )}
    </Container>
  );
};

Select.Components = internalComponents;
