import React, { useEffect, useRef } from 'react';
import { NumberInput } from '../NumberInput';

interface AuthenticationInputSingleProps
  extends Omit<React.HTMLAttributes<HTMLInputElement>, 'onChange'> {
  index: number;
  value: number | '';
  shouldFocus?: boolean;
  error?: boolean;
  disabled?: boolean;
  isLast?: boolean;
  onIndexChanged?: (index: number) => void;
  onChange: (value: number | '', index: number) => void;
}
export const AuthenticationInputSingle = ({
  index,
  onChange,
  value,
  shouldFocus,
  isLast,
  onIndexChanged,
  ...rest
}: AuthenticationInputSingleProps) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (shouldFocus) {
      ref?.current?.focus();
      ref?.current?.select();
    }
  }, [shouldFocus]);

  return (
    <NumberInput
      {...rest}
      maxLength={1}
      onFocus={e => {
        e.currentTarget.select();
        onIndexChanged?.(index);
      }}
      inputRef={ref}
      value={value}
      onChange={e => {
        const currentValue = e.currentTarget.valueAsNumber;
        onChange(currentValue, index);
        if (isLast && currentValue) {
          ref?.current?.blur();
        }
      }}
      onKeyUp={e => {
        if (e.key === 'Backspace') {
          onIndexChanged(index - 1);
        }
      }}
    />
  );
};
