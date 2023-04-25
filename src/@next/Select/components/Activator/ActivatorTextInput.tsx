import React, { useEffect, useRef, useState } from 'react';

import { Icon } from '../../../Icon';
import { TextInputProps } from '../../../TextInput';
import { SearchableSelectInput } from '../SearchableSelectInput/SearchableSelectInput';
import { useActivatorTextInput } from './ActivatorContext';
import { StyledTextInput } from './ActivatorStyle';

export interface ActivatorTextInputProps
  extends Omit<TextInputProps, 'onChange' | 'onSelect'> {
  allowMultiple?: boolean;
  hasError?: boolean;
  onChange?(value: string): void;
  onSelect?({ value }: { value: string }): void;
  selectedValues?: string[];
  width?: string;
}

export const ActivatorTextInput = ({
  allowMultiple,
  onChange,
  prefix = <Icon name="ri-search" />,
  onSelect,
  selectedValues,
  value = '',
  width,
  ...props
}: ActivatorTextInputProps) => {
  const activatorRef = useRef(null);
  const activatorContext = useActivatorTextInput();
  const { disabled, onFocus, hasError } = activatorContext;
  const [hasSelectedValues, setHasSelectedValues] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const updateInputValue = (newValue: string) => {
    setInputValue(newValue);
  };
  const handleChange = ({ value }: { value: string }) => {
    if (onChange) {
      onChange(value);
      return;
    }

    // setInputValue(value);
  };

  useEffect(() => {
    setHasSelectedValues(selectedValues.filter(v => v != '').length > 0);
  }, [selectedValues]);

  // useEffect(() => {
  //   if (!allowMultiple && !hasSelectedValues) {
  //     setInputValue(selectedValues[0]);
  //     return;
  //   }

  //   setInputValue(value);
  // }, [value, selectedValues, allowMultiple, hasSelectedValues]);

  return (
    <>
      {allowMultiple ? (
        <StyledTextInput
          {...props}
          ref={activatorRef}
          prefix={prefix}
          // value={inputValue}
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
          value={inputValue}
          updateInputValue={updateInputValue}
          onFocus={onFocus}
          onSelect={onSelect}
          error={hasError}
          disabled={disabled}
          selectedValue={hasSelectedValues ? selectedValues[0] : null}
          canClear={!allowMultiple && hasSelectedValues}
          width={width}
        />
      )}
    </>
  );
};
