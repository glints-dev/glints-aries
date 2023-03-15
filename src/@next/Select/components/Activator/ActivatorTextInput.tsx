import React, { useEffect, useRef } from 'react';
import { Icon } from '../../../Icon';

import {
  TextInput as GlintsTextInput,
  TextInputProps,
} from '../../../TextInput';
import { useSelectActivator } from './ActivatorContext';

export interface ActivatorTextInputProps
  extends Omit<TextInputProps, 'onChange'> {
  onChange?(value: string): void;
  textInputWidth?: number;
  setTextInputWidth?: React.Dispatch<(prevState: undefined) => undefined>;
}

export const ActivatorTextInput = ({
  onChange,
  value,
  ...props
}: ActivatorTextInputProps) => {
  const inputRef = useRef(null);
  const activatorContext = useSelectActivator() as ActivatorTextInputProps;
  const { onFocus, setTextInputWidth } = activatorContext;

  useEffect(() => {
    setTextInputWidth(inputRef.current.getBoundingClientRect().width);
  }, [inputRef, setTextInputWidth]);

  const handleChange = ({ value }: { value: string }) => {
    if (onChange) onChange(value);
  };

  return (
    <GlintsTextInput
      {...props}
      ref={inputRef}
      prefix={<Icon name="ri-search" />}
      value={value}
      onChange={value => handleChange({ value })}
      onFocus={onFocus}
    ></GlintsTextInput>
  );
};
