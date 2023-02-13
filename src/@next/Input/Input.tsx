import React, { useEffect, useRef } from 'react';
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

    const prefixRef = useRef(null);
    const suffixRef = useRef(null);

    const Prefix = () =>
      hasPrefix ? (
        <StyledPrefixContainer ref={prefixRef}>{prefix}</StyledPrefixContainer>
      ) : null;

    const Suffix = () =>
      hasSuffix ? (
        <StyledSuffixContainer ref={suffixRef}>{suffix}</StyledSuffixContainer>
      ) : null;

    const [prefixWidth, setPrefixWidth] = React.useState(0);
    const [suffixWidth, setSuffixWidth] = React.useState(0);

    useEffect(() => {
      if (hasPrefix) {
        const prefixWidth = prefixRef.current.getBoundingClientRect().width;
        setPrefixWidth(prefixWidth);
      }
    }, [hasPrefix, prefix]);

    useEffect(() => {
      if (hasSuffix) {
        const suffixWidth = suffixRef.current.getBoundingClientRect().width;
        setSuffixWidth(suffixWidth);
      }
    }, [hasSuffix, suffix]);

    return (
      <StyledContainer
        ref={ref}
        data-prefix={hasPrefix}
        data-suffix={hasSuffix}
        data-error={error}
        data-disabled={disabled}
        prefixWidth={prefixWidth}
        suffixWidth={suffixWidth}
      >
        <Prefix />
        <StyledInput disabled={disabled} {...props} />
        <Suffix />
      </StyledContainer>
    );
  }
);
