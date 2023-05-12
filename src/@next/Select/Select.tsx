import React, { useEffect, useState } from 'react';
import { Option, Section } from '../Menu';
import { Popover } from '../Popover';
import { Typography } from '../Typography';
import { Neutral } from '../utilities/colors';
import { ActivatorTextInput, OptionList } from './components';
import { ActivatorSelect } from './components/Activator/ActivatorSelect';
import { Label } from './components/Label/Label';
import { SearchableSelectState } from './components/SearchableSelectInput/SearchableSelectInput';
import { ActivatorWrapper, HelpTextContainer } from './SelectStyle';

interface SearchableProps {
  /** value of TextInput activator when Select is searchable */
  inputValue?: string;
  /** onChange of TextInput activator when Select is searchable */
  onInputChange?(value: string): void;
}
export interface SelectProps {
  allowMultiple?: boolean;
  disabled?: boolean;
  hasError?: boolean;
  helpText?: React.ReactNode;
  label?: React.ReactNode;
  /** Margin Top = 8 ; Option height = 48 ; optionListHeight = (n options * option height) + margin top; */
  listHeight?: number;
  onClose?: () => void;
  onRemoveTag?({ option }: { option: string }): void;
  onSelect?({ value }: { value: string }): void;
  options?: Option[];
  placeholder?: string;
  prefix?: React.ReactNode;
  /** sets whether Select is searchable */
  searchable?: boolean;
  /** props used for searchable Select */
  searchableProps?: SearchableProps; // TODO: remove
  /** true = Allow vertical scroll, default by 6 options. */
  scrollable?: boolean;
  sections?: Section[];
  selectedValues?: string[];
  /** sets a width for the Select component*/
  width: string;
}

export const Select = ({
  allowMultiple = false,
  disabled = false,
  hasError = false,
  helpText,
  label,
  onClose,
  onRemoveTag,
  onSelect,
  options = [],
  placeholder,
  listHeight,
  prefix,
  searchable = false,
  searchableProps,
  scrollable = false,
  sections,
  selectedValues,
  width,
}: SelectProps) => {
  const [popoverActive, setPopoverActive] = useState(false);
  const [optionListHeight, setOptionListHeight] = useState('');
  const [menuOptions, setMenuOptions] = useState(options);
  const [inputValue, setInputValue] = useState(
    searchableProps?.inputValue || ''
  );

  const [searchableSelectState, setSearchableSelectState] =
    useState<SearchableSelectState>({
      showSelected: false,
      showInput: true,
      showPlaceholder: true,
    });

  const updateSearchableSelectState = (newState: SearchableSelectState) => {
    setSearchableSelectState(newState);
  };

  const updateInputValue = (newValue: string) => {
    setInputValue(newValue);
  };

  const updateMenuOptions = (newState: Option[]) => {
    setMenuOptions(newState);
  };

  const handleClose = () => {
    setPopoverActive(false);
    onClose?.();
  };

  const handleFocus = () => {
    setPopoverActive(true);
  };

  const handleSelectClick = () => {
    setPopoverActive(!popoverActive);
  };

  useEffect(() => {
    if (listHeight) {
      setOptionListHeight(`${listHeight + 24}px`);

      return;
    }

    if (scrollable) {
      setOptionListHeight(`${296 + 24}px`);

      return;
    }
  }, [listHeight, scrollable]);

  const activator = () => {
    if (searchable || searchableProps) {
      return (
        <ActivatorTextInput
          allowMultiple={allowMultiple}
          disabled={disabled}
          hasError={hasError}
          onChange={searchableProps?.onInputChange}
          placeholder={placeholder ?? 'Search'}
          width={width}
          selectedValues={selectedValues}
          onSelect={onSelect}
          onFocus={handleFocus}
          inputValue={inputValue}
          updateInputValue={updateInputValue}
          searchableSelectState={searchableSelectState}
          updateSearchableSelectState={updateSearchableSelectState}
          options={options}
          updateMenuOptions={updateMenuOptions}
          prefix={prefix}
        />
      );
    }

    return (
      <ActivatorSelect
        allowMultiple={allowMultiple}
        disabled={disabled}
        hasError={hasError}
        placeholder="Placeholder"
        onRemoveTag={onRemoveTag}
        onSelectClick={handleSelectClick}
        width={width}
        selectedValues={selectedValues}
      />
    );
  };

  return (
    <Popover
      active={popoverActive}
      activator={
        <ActivatorWrapper width={width}>
          {label && <Label>{label}</Label>}
          {activator()}
          {helpText && (
            <HelpTextContainer>
              <Typography
                as="span"
                variant="subtitle2"
                color={disabled ? Neutral.B85 : Neutral.B40}
              >
                {helpText}
              </Typography>
            </HelpTextContainer>
          )}
        </ActivatorWrapper>
      }
      onClose={handleClose}
      autofocusTarget="none"
      preventFocusOnClose
      fullWidth
    >
      <Popover.Pane height={optionListHeight}>
        <OptionList
          menuOptions={menuOptions}
          allowMultiple={allowMultiple}
          onSelect={onSelect}
          sections={sections}
          selectedValues={selectedValues}
          width={width}
          onMenuClose={handleClose}
          updateSearchableSelectState={updateSearchableSelectState}
        />
      </Popover.Pane>
    </Popover>
  );
};
