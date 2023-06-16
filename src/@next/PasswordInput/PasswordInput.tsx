import React, { useEffect, useState } from 'react';
import { Icon } from '../Icon';
import { Input } from '../Input/Input';
import { StyledSuffixContainer } from './PasswordInputStyle';

export type PasswordInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type' | 'onChange' | 'value'
> & {
  onChange?: (value: string) => void;
  error?: boolean;
  value?: string;
};

export const PasswordInput = React.forwardRef<
  HTMLInputElement,
  PasswordInputProps
>(function PasswordInput(
  { value, onChange, error, ...props }: PasswordInputProps,
  ref
) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [maskedPassword, setMaskedPassword] = useState<string>(value);

  const pointGen = (pattern: string, num: number) => {
    return [...Array(num)].map(() => pattern).join('');
  };

  const DELAY = 1000;
  const PATTERN = '•';
  useEffect(() => {
    const isMobile: boolean = /iPhone|iPad|iPod|Android/i.test(
      navigator.userAgent
    );
    const timer = window.setTimeout(
      () => {
        setMaskedPassword(pointGen(PATTERN, value.length));
      },
      isMobile ? DELAY : 0
    );
    return () => window.clearTimeout(timer);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = e.target.selectionStart;
    const inputText = e.target.value;
    const addedTextLength = inputText.length - value.length;

    if (addedTextLength > 0) {
      const newStr = inputText.slice(index - addedTextLength, index);
      onChange?.(
        value.slice(0, index - addedTextLength) +
          newStr +
          value.slice(index - addedTextLength)
      );
    } else if (addedTextLength < 0) {
      onChange?.(value.slice(0, index) + value.slice(index - addedTextLength));
    }

    if (inputText.length === 0) {
      setMaskedPassword('');
    } else {
      setMaskedPassword(
        pointGen(PATTERN, inputText.length - 1) +
          inputText.charAt(inputText.length - 1)
      );
    }
  };

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
        type="text"
        value={showPassword ? value : maskedPassword}
        onChange={handleChange}
        error={error}
        suffix={!props.disabled && suffixComponent}
        {...props}
      />
    </>
  );
});
