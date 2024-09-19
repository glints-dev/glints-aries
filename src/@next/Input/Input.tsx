import React, { useEffect, useRef } from 'react';
import {
  AsteriskIcon,
  FloatingLabel,
  StyledContainer,
  StyledInput,
  StyledPrefixContainer,
  StyledSuffixContainer,
} from './InputStyle';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  error?: boolean;
  height?: string;
  border?: string;
  borderRadius?: string;
  floatingFontSize?: string;
  isPlaceholderFloating?: boolean;
  required?: boolean;
  placeholderColor?: string;
  floatingPlaceholderTop?: number;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  inputRef?: React.Ref<HTMLInputElement>;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input(
    {
      error,
      disabled,
      prefix,
      suffix,
      inputRef,
      height,
      border,
      borderRadius,
      floatingFontSize,
      isPlaceholderFloating,
      placeholder,
      required,
      placeholderColor,
      floatingPlaceholderTop,
      ...props
    }: InputProps,
    ref
  ) {
    const hasPrefix = !!prefix;
    const hasSuffix = !!suffix;

    const prefixRef = useRef(null);
    const suffixRef = useRef(null);

    const Prefix = () =>
      hasPrefix ? (
        <StyledPrefixContainer ref={prefixRef} height={height}>
          {prefix}
        </StyledPrefixContainer>
      ) : null;

    const Suffix = () =>
      hasSuffix ? (
        <StyledSuffixContainer ref={suffixRef} height={height}>
          {suffix}
        </StyledSuffixContainer>
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

    const selectedPlaceholder = required ? `${placeholder}*` : placeholder;

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
        <StyledInput
          ref={inputRef}
          placeholder={
            isPlaceholderFloating && !disabled ? undefined : selectedPlaceholder
          }
          borderRadius={borderRadius}
          border={border}
          height={height}
          disabled={disabled}
          {...props}
        />
        {isPlaceholderFloating && !disabled && (
          <FloatingLabel
            data-testid="textarea-label"
            data-error={error}
            fontSize={floatingFontSize}
            color={placeholderColor}
            top={floatingPlaceholderTop}
          >
            {placeholder}
            {required && <AsteriskIcon>*</AsteriskIcon>}
          </FloatingLabel>
        )}
        <Suffix />
      </StyledContainer>
    );
  }
);
