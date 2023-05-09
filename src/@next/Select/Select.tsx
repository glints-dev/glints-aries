import React, { useCallback, useEffect, useState } from 'react';
import { Option, Section } from '../Menu';
import { Popover } from '../Popover';
import { Typography } from '../Typography';
import { Neutral } from '../utilities/colors';
import { ActivatorTextInput, OptionList } from './components';
import {
  ActivatorTextInputContext,
  SearchableSelectState,
} from './components/Activator/ActivatorContext';
import { ActivatorSelect } from './components/Activator/ActivatorSelect';
import { Label } from './components/Label/Label';
import { OptionListContext } from './components/OptionList/OptionListContext';
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
  disabled,
  hasError,
  helpText,
  label,
  onClose,
  onRemoveTag,
  onSelect,
  options,
  placeholder,
  listHeight,
  prefix,
  searchable,
  searchableProps,
  scrollable,
  sections,
  selectedValues,
  width,
}: SelectProps) => {
  const [popoverActive, setPopoverActive] = useState(false);
  const [optionListHeight, setOptionListHeight] = useState('');
  const [menuOptions, setMenuOptions] = useState(options);
  const [inputValue, setInputValue] = useState(searchableProps?.inputValue);

  const [searchableSelectState, setSearchableSelectState] =
    useState<SearchableSelectState>({
      showSelected: false,
      showInput: true,
      showPlaceholder: true,
    });

  const updateSearchableSelectState = (newState: SearchableSelectState) => {
    setSearchableSelectState(newState);
  };

  const updateInputValue = useCallback(
    (newValue: string) => {
      setInputValue(newValue);
    },
    [setInputValue]
  );

  const updateMenuOptions = useCallback(
    (newState: Option[]) => {
      setMenuOptions(newState);
    },
    [setMenuOptions]
  );

  const resetMenuOptions = useCallback(() => {
    updateMenuOptions(options);
    updateInputValue('');
  }, [options, updateInputValue, updateMenuOptions]);

  const handleClose = useCallback(() => {
    setPopoverActive(false);
    onClose?.();
    resetMenuOptions();
  }, [onClose, resetMenuOptions]);

  const handleFocus = () => {
    setPopoverActive(true);
  };

  const handleBlur = () => popoverActive && handleClose();

  const handleSelectClick = () => {
    setPopoverActive(!popoverActive);
  };

  const activatorTextInputContextValue = {
    disabled,
    hasError,
    inputValue,
    updateInputValue,
    onFocus: handleFocus,
    onBlur: handleBlur,
    searchableSelectState,
    updateSearchableSelectState,
  };

  const optionListContextValue = {
    options,
    menuOptions,
    updateMenuOptions,
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
        <ActivatorTextInputContext.Provider
          value={activatorTextInputContextValue}
        >
          <ActivatorTextInput
            allowMultiple={allowMultiple}
            onChange={searchableProps?.onInputChange}
            placeholder={placeholder ?? 'Search'}
            prefix={prefix}
            width={width}
            selectedValues={selectedValues}
            onSelect={onSelect}
          />
        </ActivatorTextInputContext.Provider>
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
    <OptionListContext.Provider value={optionListContextValue}>
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
          <ActivatorTextInputContext.Provider
            value={activatorTextInputContextValue}
          >
            <OptionList
              allowMultiple={allowMultiple}
              onSelect={onSelect}
              sections={sections}
              selectedValues={selectedValues}
              width={width}
              onMenuClose={handleClose}
            />
          </ActivatorTextInputContext.Provider>
        </Popover.Pane>
      </Popover>
    </OptionListContext.Provider>
  );
};
