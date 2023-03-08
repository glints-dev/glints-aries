import React, { useEffect, useRef } from 'react';
import { Icon } from '../../../Icon';

import {
  TextInput as GlintsTextInput,
  TextInputProps,
} from '../../../TextInput';
import { useComboBoxTextInput } from './TextInputContext';

export interface ComboBoxTextInputProps
  extends Omit<TextInputProps, 'onChange'> {
  onChange?(value: string): void;
  textInputWidth?: number;
  setTextInputWidth?: React.Dispatch<(prevState: undefined) => undefined>;
}

export const TextInput = ({
  onChange,
  value,
  ...props
}: ComboBoxTextInputProps) => {
  const inputRef = useRef(null);
  const textInputContext = useComboBoxTextInput();
  const { onFocus, setTextInputWidth } = textInputContext;

  useEffect(() => {
    setTextInputWidth(inputRef.current.getBoundingClientRect().width);
  }, [inputRef, setTextInputWidth]);

  const handleChange = (value: string) => {
    if (onChange) onChange(value);
  };

  return (
    <GlintsTextInput
      {...props}
      ref={inputRef}
      prefix={<Icon name="ri-search" />}
      value={value}
      onChange={value => handleChange(value)}
      onFocus={onFocus}
    ></GlintsTextInput>
  );
};
