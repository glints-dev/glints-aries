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
  ...props
}: TextAreaProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const charCount = value.length;

  const transformedMaxLength: number = maxLength || undefined;

  const hasMaxLengthEnforced = Boolean(transformedMaxLength > 0);

  const hasError =
    error || (canExceedMaxLength && charCount > transformedMaxLength);

  const localRef = useRef<HTMLTextAreaElement>(null);
  const textAreaInputRef = forwardedRef || localRef;

  const handleContainerClick = () => {
    if (textAreaInputRef.current) {
      localRef.current.focus();
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
    >
      <StyledTextArea
        ref={textAreaInputRef}
        value={value}
        rows={rows}
        width={width}
        onChange={handleChange}
        disabled={disabled}
        maxLength={!canExceedMaxLength && transformedMaxLength}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      {hasMaxLengthEnforced && (
        <StyledWordCountContainer
          data-disabled={disabled}
          data-error={hasError}
        >
          <Typography as="span" variant="overline">
            {charCount} / {transformedMaxLength}
          </Typography>
        </StyledWordCountContainer>
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
