import React, {
  MutableRefObject,
  useRef,
  useState,
  TextareaHTMLAttributes,
} from 'react';
import {
  StyledTextAreaContainer,
  StyledTextArea,
  StyledWordCountContainer,
} from './TextAreaStyle';
import { Typography } from '../Typography';

export type TextAreaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'onChange'
> & {
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  width?: string;
};

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea(
    {
      value,
      rows = 3,
      maxLength,
      error = false,
      disabled = false,
      width = '520px',
      onChange,
      ...props
    }: TextAreaProps,
    ref
  ) {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const charCount = value.length;

    const transformedMaxLength: number = maxLength || undefined;

    const hasMaxLengthEnforced = Boolean(
      transformedMaxLength && transformedMaxLength > 0
    );

    const localRef = useRef<HTMLTextAreaElement>(null);
    const setRefs = (node: HTMLTextAreaElement) => {
      localRef.current = node;
      if (typeof ref === 'function') {
        (ref as (instance: HTMLTextAreaElement | null) => void)(node);
      } else if (ref) {
        (ref as MutableRefObject<HTMLTextAreaElement | null>).current = node;
      }
    };

    const handleContainerClick = () => {
      if (localRef.current) {
        localRef.current.focus();
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const val = e.currentTarget.value;
      onChange(val);
    };

    return (
      <StyledTextAreaContainer
        data-error={error}
        data-disabled={disabled}
        data-focus={isFocused}
        data-has-counter={hasMaxLengthEnforced}
        width={width}
        onClick={handleContainerClick}
      >
        <StyledTextArea
          ref={setRefs}
          value={value}
          rows={rows}
          width={width}
          onChange={handleChange}
          disabled={disabled}
          maxLength={transformedMaxLength}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {hasMaxLengthEnforced && (
          <StyledWordCountContainer data-disabled={disabled} data-error={error}>
            <Typography as="span" variant="overline">
              {charCount} / {transformedMaxLength}
            </Typography>
          </StyledWordCountContainer>
        )}
      </StyledTextAreaContainer>
    );
  }
);
