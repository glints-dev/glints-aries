import React, { useState } from 'react';
import { Icon } from '../Icon';
import { Input, InputProps } from '../Input/Input';

export type TextInputProps = Omit<InputProps, 'type'> & { canClear?: boolean };

export const TextInput = ({
  canClear,
  suffix,
  value,
  onChange,
  ...props
}: TextInputProps) => {
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

  return (
    <Input
      type="text"
      suffix={suffixValue}
      value={currentValue}
      onChange={handleChange}
      {...props}
    />
  );
};
