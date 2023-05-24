import React, { useEffect, useRef, useState } from 'react';

import { Icon } from '../../../Icon';
import { Option } from '../../../Menu';
import { TextInputProps } from '../../../TextInput';
import {
  SearchableSelectInput,
  SearchableSelectState,
} from '../SearchableSelectInput/SearchableSelectInput';
import { StyledTextInput } from './ActivatorStyle';

export interface ActivatorTextInputProps
  extends Omit<TextInputProps, 'onChange' | 'onSelect'> {
  allowMultiple?: boolean;
  disabled?: boolean;
  hasError?: boolean;
  onChange?(value: string): void;
  onSelect?({ value }: { value: string }): void;
  selectedValues?: string[];
  width?: string;
  inputValue?: string;
  updateInputValue?: (newValue: string) => void;
  searchableSelectState?: SearchableSelectState;
  updateSearchableSelectState?: (newState: SearchableSelectState) => void;
  options?: Option[];
  updateMenuOptions?: (newState: Option[]) => void;
}

export const ActivatorTextInput = ({
  allowMultiple,
  disabled = false,
  hasError = false,
  onChange,
  onFocus,
  onSelect,
  prefix = <Icon name="ri-search" />,
  selectedValues,
  width,
  inputValue,
  updateInputValue,
  options,
  updateMenuOptions,
  ...props
}: ActivatorTextInputProps) => {
  const activatorRef = useRef(null);
  const [hasSelectedValues, setHasSelectedValues] = useState(false);

  const filterOptions = (str: string) => {
    if (str === '') {
      updateMenuOptions(options);
      return options;
    }

    const filterRegex = new RegExp(str, 'i');
    const filterOptions = options.filter((option: Option) =>
      (option.label as string).match(filterRegex)
    );

    return filterOptions;
  };

  const handleChange = ({ value }: { value: string }) => {
    if (onChange) {
      onChange(value);
      const filteredOptions = filterOptions(value);
      updateMenuOptions(filteredOptions);
      return;
    }
  };

  useEffect(() => {
    setHasSelectedValues(selectedValues.filter(v => v != '').length > 0);
  }, [selectedValues]);

  return (
    <>
      {allowMultiple ? (
        <StyledTextInput
          {...props}
          ref={activatorRef}
          prefix={prefix}
          onChange={value => handleChange({ value })}
          onFocus={onFocus}
          error={hasError}
          disabled={disabled}
          width={width}
        />
      ) : (
        <SearchableSelectInput
          {...props}
          ref={activatorRef}
          prefix={prefix}
          filterOptions={filterOptions}
          onFocus={onFocus}
          onInputChange={onChange}
          onSelect={onSelect}
          error={hasError}
          disabled={disabled}
          selectedValue={hasSelectedValues ? selectedValues[0] : null}
          width={width}
          inputValue={inputValue}
          updateInputValue={updateInputValue}
          options={options}
          updateMenuOptions={updateMenuOptions}
        />
      )}
    </>
  );
};
