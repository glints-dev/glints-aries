import React, { useState } from 'react';
import { Icon } from '../Icon';
import { Input } from '../Input/Input';
import { StyledSuffixContainer } from './PasswordInputStyle';

export type PasswordInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type' | 'onChange'
> & {
  onChange?: (value: string) => void;
  error?: boolean;
};

export const PasswordInput = React.forwardRef<
  HTMLInputElement,
  PasswordInputProps
>(function PasswordInput(
  { value, onChange, error, ...props }: PasswordInputProps,
  ref
) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const suffixComponent = (
    <StyledSuffixContainer
      onClick={() => {
        setShowPassword(!showPassword);
      }}
      data-testid="eye-icon"
    >
      {showPassword ? (
        <Icon name="ri-eye-line" />
      ) : (
        <Icon name="ri-eye-off-line" />
      )}
    </StyledSuffixContainer>
  );

  return (
    <>
      <Input
        ref={ref}
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={e => onChange?.(e.currentTarget.value)}
        error={error}
        suffix={!props.disabled && suffixComponent}
        {...props}
      />
    </>
  );
});
