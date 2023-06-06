import React, { useState, useEffect, TextareaHTMLAttributes } from 'react';
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
};

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea(
    {
      value,
      rows = 3,
      maxLength = 60,
      error = false,
      disabled = false,
      onChange,
      ...props
    }: TextAreaProps,
    ref
  ) {
    const [charCount, setCharCount] = useState<number>(0);
    const isError: boolean = error || charCount > maxLength;

    useEffect(() => {
      setCharCount(value.length);
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const val = e.currentTarget.value;
      onChange(val);
    };

    return (
      <StyledTextAreaContainer>
        <StyledTextArea
          ref={ref}
          value={value}
          rows={rows}
          onChange={handleChange}
          data-error={isError}
          data-disabled={disabled}
          disabled={disabled}
          {...props}
        />
        <StyledWordCountContainer data-disabled={disabled} data-error={isError}>
          <Typography as="span" variant="caption">
            {charCount} / {maxLength}
          </Typography>
        </StyledWordCountContainer>
      </StyledTextAreaContainer>
    );
  }
);
