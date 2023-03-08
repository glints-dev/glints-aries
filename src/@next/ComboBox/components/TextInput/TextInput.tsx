import React from 'react';
import { Icon } from '../../../Icon';

import {
  TextInput as GlintsTextInput,
  TextInputProps,
} from '../../../TextInput';
import { useComboBoxTextInput } from './TextInputContext';

export interface ComboBoxTextInputProps
  extends Omit<TextInputProps, 'onChange'> {
  onChange?(value: string): void;
}

export const TextInput = ({
  onChange,
  value,
  ...props
}: ComboBoxTextInputProps) => {
  const textInputContext = useComboBoxTextInput();
  const { onFocus } = textInputContext;

  const handleChange = (value: string) => {
    if (onChange) onChange(value);
  };

  return (
    <GlintsTextInput
      {...props}
      prefix={<Icon name="ri-search" />}
      value={value}
      onChange={e => handleChange(e.currentTarget.value)}
      onFocus={onFocus}
      // onBlur={onBlur}
    ></GlintsTextInput>
  );
};
