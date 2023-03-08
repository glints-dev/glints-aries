import React, { useEffect, useState } from 'react';
import { Icon } from '../Icon';
import { Input, InputProps } from '../Input/Input';

export type TextInputProps = Omit<InputProps, 'type'> & { canClear?: boolean };

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput(
    { canClear, suffix, value, onChange, ...props }: TextInputProps,
    ref
  ) {
    const ClearIcon = () => (
      <Icon
        name="ri-close-circle-fill"
        style={{ cursor: 'pointer' }}
        onClick={() => handleClearIconClick()}
      />
    );
    const [suffixValue, setSuffixValue] = useState(suffix);
    const [currentValue, setCurrentValue] = useState(value);

    const handleClearIconClick = () => {
      setCurrentValue('');
      setSuffixValue(suffix);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.currentTarget.value;
      const currSuffix = canClear && !!val ? <ClearIcon /> : suffixValue;
      setCurrentValue(val);
      setSuffixValue(currSuffix);
      onChange?.(e);
    };

    useEffect(() => {
      setSuffixValue(suffix);
    }, [suffix]);

    useEffect(() => {
      setCurrentValue(value);
    }, [value]);

    return (
      <Input
        ref={ref}
        type="text"
        suffix={suffixValue}
        value={currentValue}
        onChange={handleChange}
        {...props}
      />
    );
  }
);
