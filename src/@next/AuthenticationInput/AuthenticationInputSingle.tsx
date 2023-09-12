import React, { useEffect, useRef } from 'react';
import { NumberInput } from '../NumberInput';

interface AuthenticationInputSingleProps
  extends Omit<React.HTMLAttributes<HTMLInputElement>, 'onChange'> {
  index: number;
  value: number;
  shouldFocus?: boolean;
  error?: boolean;
  disabled?: boolean;
  isLast?: boolean;
  onChange: (value: number, index: number) => void;
}
export const AuthenticationInputSingle = ({
  index,
  onChange,
  value,
  shouldFocus,
  isLast,
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
      onFocus={e => e.currentTarget.select()}
      inputRef={ref}
      value={value}
      onChange={e => {
        onChange(e.currentTarget.valueAsNumber, index);
        if (isLast) {
          ref?.current?.blur();
        }
      }}
    />
  );
};
