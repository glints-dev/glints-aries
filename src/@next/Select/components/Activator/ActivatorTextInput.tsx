import React, { useEffect, useRef, useState } from 'react';

import { Icon } from '../../../Icon';
import { Option } from '../../../Menu';
import { TextInputProps } from '../../../TextInput';
import { useOptionList } from '../OptionList/OptionListContext';
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
  width,
  ...props
}: ActivatorTextInputProps) => {
  const activatorRef = useRef(null);
  const activatorContext = useActivatorTextInput();
  const { disabled, onFocus, hasError } = activatorContext;
  const [hasSelectedValues, setHasSelectedValues] = useState(false);
  const optionListContext = useOptionList();
  const { options, updateMenuOptions } = optionListContext;

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
          onSelect={onSelect}
          error={hasError}
          disabled={disabled}
          selectedValue={hasSelectedValues ? selectedValues[0] : null}
          width={width}
        />
      )}
    </>
  );
};
