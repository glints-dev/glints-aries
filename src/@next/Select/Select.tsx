import React, { useEffect, useState } from 'react';
import { isEmpty } from 'lodash-es';
import { Option, Section } from '../Menu';
import { Popover } from '../Popover';
import { Typography } from '../Typography';
import { Neutral } from '../utilities/colors';
import { ActivatorTextInput, OptionList } from './components';
import { ActivatorSelect } from './components/Activator/ActivatorSelect';
import { Label } from './components/Label/Label';
import { SearchableSelectState } from './components/SearchableSelectInput/SearchableSelectInput';
import { IconNames } from '../Icon/icons/icons';
import { ActivatorWrapper, HelpTextContainer } from './SelectStyle';

interface SearchableProps {
  /** value of TextInput activator when Select is searchable */
  inputValue?: string;
  /** onChange of TextInput activator when Select is searchable */
  onInputChange?(value: string): void;
}
interface OptionsPlaceholderProps {
  idle?: React.ReactNode;
  noResult?: React.ReactNode;
}
export interface SelectProps {
  allowMultiple?: boolean;
  customActivatorIcon?: IconNames;
  disabled?: boolean;
  hasError?: boolean;
  helpText?: React.ReactNode;
  label?: React.ReactNode;
  /** Margin Top = 8 ; Option height = 48 ; optionListHeight = (n options * option height) + margin top; */
  listHeight?: number;
  loadingOptions?: boolean;
  name?: string;
  onBlur?: () => void;
  onClose?: () => void;
  onFocus?: () => void;
  onRemoveTag?({ option }: { option: string }): void;
  onSelect?({ value }: { value: string }): void;
  /** callback function when select component is clicked (opened) */
  onSelectClick?: () => void;
  isPopoverActive?: boolean;
  onPopoverActiveChange?: (isActive: boolean) => void;
  options?: Option[];
  /** sets whether OptionList will follow content's width */
  optionListFitContent?: boolean;
  placeholder?: string;
  prefix?: React.ReactNode;
  /** sets whether Select is searchable */
  searchable?: boolean;
  /** props used for searchable Select */
  searchableProps?: SearchableProps;
  optionsPlaceholderProps?: OptionsPlaceholderProps;
  showPopoverOnFocus?: boolean;
  /** true = Allow vertical scroll, default by 6 options. */
  scrollable?: boolean;
  sections?: Section[];
  selectedValues?: string[];
  /** sets a width for the Select component*/
  width: string;
  height?: string;
  /** sets z-index override for option list dropdown. z-index default to 400 */
  zIndexOverride?: number;
  border?: string;
  borderRadius?: string;
  required?: boolean;
  isPlaceholderFloating?: boolean;
  /** Allow popover to stretch to the full width of its activator */
  fullWidth?: boolean;
}

export const Select = ({
  allowMultiple = false,
  customActivatorIcon,
  disabled = false,
  hasError = false,
  helpText,
  label,
  listHeight,
  loadingOptions = false,
  name,
  onBlur,
  onClose,
  onFocus,
  onRemoveTag,
  onSelect,
  onSelectClick,
  isPopoverActive,
  onPopoverActiveChange,
  optionListFitContent = false,
  options = [],
  placeholder,
  prefix,
  searchable,
  searchableProps,
  optionsPlaceholderProps,
  showPopoverOnFocus = false,
  scrollable = false,
  sections,
  selectedValues,
  width,
  height,
  zIndexOverride,
  border,
  borderRadius,
  required,
  isPlaceholderFloating,
  fullWidth = true,
}: SelectProps) => {
  const [internalPopoverActive, setInternalPopoverActive] = useState(false);
  const popoverActive =
    isPopoverActive !== undefined ? isPopoverActive : internalPopoverActive;
  const setPopoverActive = (newState: boolean) => {
    if (isPopoverActive != undefined) {
      onPopoverActiveChange?.(newState);
    } else {
      setInternalPopoverActive(newState);
    }
  };

  const [optionListHeight, setOptionListHeight] = useState('');
  const [menuOptions, setMenuOptions] = useState([]);
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
    if (showPopoverOnFocus) {
      setPopoverActive(true);
      return;
    }

    if (options.length < 1) {
      setPopoverActive(false);
      return;
    }

    setPopoverActive(true);
    onFocus?.();
  };

  const handleSelectClick = () => {
    setPopoverActive(!popoverActive);
  };

  useEffect(
    function syncInputValueFromSearchableProps() {
      setInputValue(searchableProps?.inputValue);
    },
    [searchableProps?.inputValue]
  );

  useEffect(() => {
    setMenuOptions(options);
  }, [options]);

  useEffect(() => {
    if (showPopoverOnFocus) return;

    if (!isEmpty(inputValue) && optionsLength > 0) {
      setInternalPopoverActive(true);
    }

    if (inputValue === '' && optionsLength < 1) {
      setInternalPopoverActive(false);
    }
  }, [inputValue, optionsLength, showPopoverOnFocus]);

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
          height={height}
          selectedValues={selectedValues}
          onBlur={onBlur}
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
          isPlaceholderFloating={isPlaceholderFloating}
          required={required}
          border={border}
          borderRadius={borderRadius}
        />
      );
    }

    return (
      <ActivatorSelect
        allowMultiple={allowMultiple}
        customActivatorIcon={customActivatorIcon}
        disabled={disabled}
        hasError={hasError}
        placeholder={placeholder ?? 'Placeholder'}
        onBlur={onBlur}
        onRemoveTag={onRemoveTag}
        onSelectClick={handleSelectClick}
        width={width}
        height={height}
        selectedValues={selectedValues}
        options={options}
        name={name}
        prefix={prefix}
        onClick={onSelectClick}
        required={required}
        border={border}
        borderRadius={borderRadius}
        isPlaceholderFloating={isPlaceholderFloating}
      />
    );
  };

  return (
    <Popover
      active={popoverActive}
      activator={
        <ActivatorWrapper width={width}>
          {label && !isPlaceholderFloating && <Label>{label}</Label>}
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
      fullWidth={fullWidth}
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
            width={fullWidth ? width : undefined}
            onMenuClose={handleClose}
            noOptionsMessage={
              optionsPlaceholderProps &&
              (!inputValue
                ? optionsPlaceholderProps.idle
                : optionsPlaceholderProps.noResult)
            }
            updateSearchableSelectState={newState =>
              updateSearchableSelectState(newState)
            }
          />
        </Popover.Pane>
      )}
    </Popover>
  );
};
