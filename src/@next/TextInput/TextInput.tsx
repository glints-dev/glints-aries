import React, { useEffect, useState } from 'react';
import { Icon } from '../Icon';
import { Input, InputProps } from '../Input/Input';

export type TextInputProps = Omit<InputProps, 'type' | 'onChange'> & {
  canClear?: boolean;
  onChange?: (value: string) => void;
  height?: string;
  border?: string;
  borderRadius?: string;
  required?: boolean;
  isPlaceholderFloating?: boolean;
  floatingFontSize?: string;
  placeholderColor?: string;
  floatingPlaceholderTop?: number;
};

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput(
    {
      canClear,
      suffix,
      value,
      onChange,
      error,
      height,
      border,
      borderRadius,
      required,
      floatingFontSize,
      isPlaceholderFloating,
      placeholderColor,
      floatingPlaceholderTop,
      ...props
    }: TextInputProps,
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
        border={border}
        borderRadius={borderRadius}
        floatingFontSize={floatingFontSize}
        isPlaceholderFloating={isPlaceholderFloating}
        placeholderColor={placeholderColor}
        floatingPlaceholderTop={floatingPlaceholderTop}
        required={required}
        height={height}
        {...props}
      />
    );
  }
);
