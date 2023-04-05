import React, { useEffect, useState } from 'react';
import { Icon } from '../Icon';
import { Input, InputProps } from '../Input/Input';

export type TextInputProps = Omit<InputProps, 'type' | 'onChange'> & {
  canClear?: boolean;
  onChange?: (value: string) => void;
};

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput(
    { canClear, suffix, value, onChange, error, ...props }: TextInputProps,
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

    const handleClearIconClick = () => {
      onChange?.('');
      setSuffixValue(suffix);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.currentTarget.value;
      const currSuffix = canClear && !!val ? <ClearIcon /> : suffixValue;
      setSuffixValue(currSuffix);
      onChange?.(val);
    };

    useEffect(() => {
      setSuffixValue(suffix);
    }, [suffix]);

    return (
      <Input
        ref={ref}
        type="text"
        suffix={suffixValue}
        value={value}
        onChange={handleChange}
        error={error}
        {...props}
      />
    );
  }
);
