import React, {
  useRef,
  useState,
  TextareaHTMLAttributes,
  RefObject,
} from 'react';
import {
  StyledTextAreaContainer,
  StyledTextArea,
  StyledWordCountContainer,
} from './TextAreaStyle';
import { Typography } from '../Typography';
import { AsteriskIcon, FloatingLabel } from '../Input/InputStyle';

export type TextAreaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'onChange'
> & {
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  width?: string;
  forwardedRef?: RefObject<HTMLTextAreaElement>;
  /**
   * if true, allows the user to type more than the maxLength.
   * if false, the user will not be able to type more than the maxLength,
   * all the characters typed after the maxLength will be ignored.
   *
   * **defaults to** `true`
   */
  canExceedMaxLength: boolean;
  border?: string;
  borderRadius?: string;
  required?: boolean;
  isPlaceholderFloating?: boolean;
  floatingFontSize?: string;
  floatingPlaceholderTop?: number;
  placeholderColor?: string;
};

const _TextArea = ({
  value,
  rows = 3,
  maxLength,
  error = false,
  disabled = false,
  width = '520px',
  onChange,
  forwardedRef,
  canExceedMaxLength = true,
  required,
  border,
  borderRadius,
  isPlaceholderFloating,
  floatingFontSize,
  placeholder,
  floatingPlaceholderTop,
  placeholderColor,
  ...props
}: TextAreaProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const charCount = value.length;

  const hasMaxLengthEnforced = maxLength > 0;

  const hasError = error || (canExceedMaxLength && charCount > maxLength);

  const localRef = useRef<HTMLTextAreaElement>(null);
  const textAreaInputRef = forwardedRef || localRef;

  const handleContainerClick = () => {
    if (textAreaInputRef.current) {
      textAreaInputRef.current.focus();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.currentTarget.value;
    onChange(val);
  };

  return (
    <StyledTextAreaContainer
      data-error={hasError}
      data-disabled={disabled}
      data-focus={isFocused}
      data-has-counter={hasMaxLengthEnforced}
      width={width}
      onClick={handleContainerClick}
      border={border}
      borderRadius={borderRadius}
      isPlaceholderFloating={isPlaceholderFloating}
    >
      <StyledTextArea
        ref={textAreaInputRef}
        value={value}
        rows={rows}
        width={width}
        onChange={handleChange}
        disabled={disabled}
        maxLength={!canExceedMaxLength && maxLength}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        border={border}
        borderRadius={borderRadius}
        placeholder={
          isPlaceholderFloating && !disabled ? undefined : placeholder
        }
        {...props}
      />
      {hasMaxLengthEnforced && (
        <StyledWordCountContainer
          data-disabled={disabled}
          data-error={hasError}
        >
          <Typography as="span" variant="overline">
            {charCount} / {maxLength}
          </Typography>
        </StyledWordCountContainer>
      )}
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
    </StyledTextAreaContainer>
  );
};

const forwardRef = (
  props: TextAreaProps,
  ref: RefObject<HTMLTextAreaElement>
) => <_TextArea {...props} forwardedRef={ref} />;

forwardRef.displayName = _TextArea.name;

export const TextArea = React.forwardRef(forwardRef);
