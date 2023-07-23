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
  loadingOptions?: boolean;
  name?: string;
  onClose?: () => void;
  onRemoveTag?({ option }: { option: string }): void;
  onSelect?({ value }: { value: string }): void;
  options?: Option[];
  /** sets whether OptionList will follow content's width */
  optionListFitContent?: boolean;
  placeholder?: string;
  prefix?: React.ReactNode;
  /** sets whether Select is searchable */
  searchable?: boolean;
  /** props used for searchable Select */
  searchableProps?: SearchableProps;
  /** true = Allow vertical scroll, default by 6 options. */
  scrollable?: boolean;
  sections?: Section[];
  selectedValues?: string[];
  /** sets a width for the Select component*/
  width: string;
  /** sets z-index override for option list dropdown. z-index default to 400 */
  zIndexOverride?: number;
}

export const Select = ({
  allowMultiple = false,
  disabled = false,
  hasError = false,
  helpText,
  label,
  listHeight,
  loadingOptions = false,
  name,
  onClose,
  onRemoveTag,
  onSelect,
  optionListFitContent = false,
  options = [],
  placeholder,
  prefix,
  searchable = false,
  searchableProps,
  scrollable = false,
  sections,
  selectedValues,
  width,
  zIndexOverride,
}: SelectProps) => {
  const [popoverActive, setPopoverActive] = useState(false);
  const [optionListHeight, setOptionListHeight] = useState('');
  const [menuOptions, setMenuOptions] = useState(options);
  const { length: optionsLength } = options;
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
    if (options.length < 1) {
      setPopoverActive(false);

      return;
    }

    setPopoverActive(true);
  };

  const handleSelectClick = () => {
    setPopoverActive(!popoverActive);
  };

  useEffect(() => {
    setMenuOptions(options);
  }, [options]);

  useEffect(() => {
    if (inputValue != '' && optionsLength > 0) {
      setPopoverActive(true);
    }

    if (inputValue === '' && optionsLength < 1) {
      setPopoverActive(false);
    }
  }, [inputValue, optionsLength]);

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
          updateSearchableSelectState={newState =>
            updateSearchableSelectState(newState)
          }
          options={options}
          updateMenuOptions={updateMenuOptions}
          prefix={prefix}
          name={name}
        />
      );
    }

    return (
      <ActivatorSelect
        allowMultiple={allowMultiple}
        disabled={disabled}
        hasError={hasError}
        placeholder={placeholder ?? 'Placeholder'}
        onRemoveTag={onRemoveTag}
        onSelectClick={handleSelectClick}
        width={width}
        selectedValues={selectedValues}
        options={options}
        name={name}
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
      preferredAlignment="left"
      preferredPosition="below"
      fullWidth
      fitContent={optionListFitContent}
      zIndexOverride={zIndexOverride}
    >
      {!disabled && (
        <Popover.Pane height={optionListHeight}>
          <OptionList
            loading={loadingOptions}
            menuOptions={menuOptions}
            allowMultiple={allowMultiple}
            onSelect={onSelect}
            sections={sections}
            selectedValues={selectedValues}
            width={width}
            onMenuClose={handleClose}
            updateSearchableSelectState={newState =>
              updateSearchableSelectState(newState)
            }
          />
        </Popover.Pane>
      )}
    </Popover>
  );
};
