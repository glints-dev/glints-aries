import React from 'react';
import { Icon } from '../../../Icon';

import {
  TextInput as GlintsTextInput,
  TextInputProps,
} from '../../../TextInput';
import { useComboBoxTextInput } from './TextInputContext';

export const TextInput = ({ value, ...props }: TextInputProps) => {
  const textInputContext = useComboBoxTextInput();
  const { onFocus } = textInputContext;

  return (
    <GlintsTextInput
      {...props}
      prefix={<Icon name="ri-search" />}
      value={value}
      onFocus={onFocus}
      // onBlur={onBlur}
    ></GlintsTextInput>
  );
};
