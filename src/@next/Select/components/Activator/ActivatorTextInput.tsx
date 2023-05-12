import React, { useRef } from 'react';

import { Icon } from '../../../Icon';
import { TextInputProps } from '../../../TextInput';
import { useActivatorTextInput } from './ActivatorContext';
import { StyledTextInput } from './ActivatorStyle';

export interface ActivatorTextInputProps
  extends Omit<TextInputProps, 'onChange'> {
  hasError?: boolean;
  onChange?(value: string): void;
  width?: string;
}

export const ActivatorTextInput = ({
  onChange,
  prefix = <Icon name="ri-search" />,
  value,
  width,
  ...props
}: ActivatorTextInputProps) => {
  const activatorRef = useRef(null);
  const activatorContext = useActivatorTextInput();
  const { disabled, onFocus, hasError } = activatorContext;

  const handleChange = ({ value }: { value: string }) => {
    if (onChange) onChange(value);
  };

  return (
    <StyledTextInput
      {...props}
      ref={activatorRef}
      prefix={prefix}
      value={value}
      onChange={value => handleChange({ value })}
      onFocus={onFocus}
      error={hasError}
      disabled={disabled}
      width={width}
    />
  );
};
