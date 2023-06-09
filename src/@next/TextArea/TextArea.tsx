import React, {
  MutableRefObject,
  useEffect,
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
    const [charCount, setCharCount] = useState<number>(0);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const isError: boolean = error || (!!maxLength && charCount > maxLength);

    const localRef = useRef<HTMLTextAreaElement>(null);
    const setRefs = (node: HTMLTextAreaElement) => {
      localRef.current = node;
      if (typeof ref === 'function') {
        (ref as (instance: HTMLTextAreaElement | null) => void)(node);
      } else if (ref) {
        (ref as MutableRefObject<HTMLTextAreaElement | null>).current = node;
      }
    };

    useEffect(() => {
      setCharCount(value.length);
    }, [value]);

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
        data-error={isError}
        data-disabled={disabled}
        data-focus={isFocused}
        data-has-counter={!!maxLength}
        width={width}
        onClick={handleContainerClick}
      >
        <StyledTextArea
          ref={setRefs}
          value={value}
          rows={rows}
          width={width}
          onChange={handleChange}
          data-disabled={disabled}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {!!maxLength && (
          <StyledWordCountContainer
            data-disabled={disabled}
            data-error={isError}
          >
            <Typography
              as="span"
              variant="overline"
              style={{ fontSize: '12px' }}
            >
              {charCount} / {maxLength}
            </Typography>
          </StyledWordCountContainer>
        )}
      </StyledTextAreaContainer>
    );
  }
);
