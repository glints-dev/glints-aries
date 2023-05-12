import React, { useCallback, useEffect, useState } from 'react';
import { Option, Section } from '../Menu';
import { Popover } from '../Popover';
import { Typography } from '../Typography';
import { Neutral } from '../utilities/colors';
import { ActivatorTextInput, OptionList } from './components';
import {
  ActivatorSelectContext,
  ActivatorTextInputContext,
} from './components/Activator/ActivatorContext';
import { ActivatorSelect } from './components/Activator/ActivatorSelect';
import { Label } from './components/Label/Label';
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
  /** sets whether to be able to type in to search from the options*/
  searchableProps?: SearchableProps;
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
  searchableProps,
  scrollable,
  sections,
  selectedValues,
  width,
}: SelectProps) => {
  const [popoverActive, setPopoverActive] = useState(false);
  const [optionListHeight, setOptionListHeight] = useState('');

  const handleClose = useCallback(() => {
    setPopoverActive(false);
    onClose?.();
  }, [onClose]);

  const handleFocus = () => {
    setPopoverActive(true);
  };

  const handleBlur = () => {
    if (popoverActive) {
      handleClose();
    }
  };

  const handleSelectClick = () => {
    setPopoverActive(!popoverActive);
  };

  const activatorSelectContextValue = {
    allowMultiple,
    disabled,
    hasError,
    onSelectClick: handleSelectClick,
    selectedValues,
  };

  const activatorTextInputContextValue = {
    disabled,
    hasError,
    onFocus: handleFocus,
    onBlur: handleBlur,
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
    if (searchableProps) {
      const { inputValue, onInputChange } = searchableProps;
      return (
        <ActivatorTextInputContext.Provider
          value={activatorTextInputContextValue}
        >
          <ActivatorTextInput
            value={inputValue}
            onChange={onInputChange}
            placeholder={placeholder ?? 'Search'}
            prefix={prefix}
            width={width}
          />
        </ActivatorTextInputContext.Provider>
      );
    }

    return (
      <ActivatorSelectContext.Provider value={activatorSelectContextValue}>
        <ActivatorSelect
          disabled={disabled}
          placeholder="Placeholder"
          onRemoveTag={onRemoveTag}
          width={width}
          values={selectedValues}
        />
      </ActivatorSelectContext.Provider>
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
          allowMultiple={allowMultiple}
          onSelect={onSelect}
          options={options}
          sections={sections}
          selectedValues={selectedValues}
          width={width}
        />
      </Popover.Pane>
    </Popover>
  );
};
