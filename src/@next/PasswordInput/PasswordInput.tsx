import React, { useCallback, useEffect, useState } from 'react';
import { Icon } from '../Icon';
import { Input } from '../Input/Input';
import { StyledSuffixContainer } from './PasswordInputStyle';
import { useMimicPassword } from './PasswordInputHook';

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
  const [unmaskedPassword, maskedPassword, currOnChange] = useMimicPassword({
    mask: '•',
    delay: 1000,
    mode: 'delayed',
  });
  // useEffect(() => {
  //   onChange?.(unmaskedPassword);
  // }, [unmaskedPassword]);

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
      unm: {unmaskedPassword}
      <Input
        ref={ref}
        type="text"
        value={showPassword ? unmaskedPassword : maskedPassword}
        onChange={currOnChange}
        error={error}
        suffix={!props.disabled && suffixComponent}
        {...props}
      />
    </>
  );
});
