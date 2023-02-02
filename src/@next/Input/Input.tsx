import React from 'react';
import {
  StyledContainer,
  StyledInput,
  StyledPrefixContainer,
  StyledSuffixContainer,
} from './InputStyle';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  error?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input(
    { error, disabled, prefix, suffix, ...props }: InputProps,
    ref
  ) {
    const hasPrefix = !!prefix;
    const hasSuffix = !!suffix;

    const Prefix = () =>
      hasPrefix ? (
        <StyledPrefixContainer>{prefix}</StyledPrefixContainer>
      ) : null;

    const Suffix = () =>
      hasSuffix ? (
        <StyledSuffixContainer>{suffix}</StyledSuffixContainer>
      ) : null;

    return (
      <StyledContainer
        ref={ref}
        data-prefix={hasPrefix}
        data-error={error}
        data-disabled={disabled}
      >
        <Prefix />
        <StyledInput disabled={disabled} {...props} />
        <Suffix />
      </StyledContainer>
    );
  }
);
