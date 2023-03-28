import React, { useEffect, useRef } from 'react';
import { Icon } from '../../../Icon';

import {
  TextInput as GlintsTextInput,
  TextInputProps,
} from '../../../TextInput';
import { useSelectActivator } from './ActivatorContext';

export interface ActivatorTextInputProps
  extends Omit<TextInputProps, 'onChange'> {
  hasError?: boolean;
  onChange?(value: string): void;
  width?: number;
  setWidth?: React.Dispatch<(prevState: undefined) => undefined>;
}

export const ActivatorTextInput = ({
  onChange,
  value,
  ...props
}: ActivatorTextInputProps) => {
  const activatorRef = useRef(null);
  const activatorContext = useSelectActivator() as ActivatorTextInputProps;
  const { onFocus, setWidth, hasError } = activatorContext;

  useEffect(() => {
    setWidth(activatorRef.current.getBoundingClientRect().width);
  }, [activatorRef, setWidth]);

  const handleChange = ({ value }: { value: string }) => {
    if (onChange) onChange(value);
  };

  return (
    <GlintsTextInput
      {...props}
      ref={activatorRef}
      prefix={<Icon name="ri-search" />}
      value={value}
      onChange={value => handleChange({ value })}
      onFocus={onFocus}
      hasError={hasError}
    ></GlintsTextInput>
  );
};
