import React, { FC, HTMLAttributes, RefObject } from 'react';

import classNames from 'classnames';
import { isFunction } from 'lodash-es';

import {
  TextareaContainer,
  TextareaInput,
  TextareaLabel,
} from './TextareaStyle';

const MIN_ROWS = 4;
const MAX_ROWS = 12;
// Rows are required to set the textarea height depending on the content added.

/** Use onChange to listen to input changes. Use
 * onBlur to listen to focus loss.
 * <br/>
 * Note that currently, Textarea has some non-standard behaviour
 * when forwarding standard props: The className will be passed to
 * the internal 'container' while the ...rest is passed to the
 * internal textarea. */
export const Textarea: FC<Props> = ({
  label,
  value = undefined,
  status = 'default',
  disabled = false,
  className,
  onBlur,
  onChange,
  forwardedRef,
  removeFloatingLabel = false,
  small = false,
  ...restProps
}) => {
  const [floating, setFloating] = React.useState<boolean>(false);
  const [rows, setRows] = React.useState<number>(MIN_ROWS);
  const innerRef = React.useRef(null);
  const textareaInputRef = forwardedRef || innerRef;

  const [textareaMaxHeight, setTextareaMaxHeight] = React.useState<number>(0);

  React.useLayoutEffect(() => {
    const textarea = textareaInputRef.current;

    if (!textarea) return;

    setTextareaMaxHeight(~~(textarea.offsetHeight * 3.7 + 23 * 8 + 1));
  }, [textareaInputRef]);

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const currentRows = ~~(e.target.scrollHeight / 30);
      setRows(currentRows < MAX_ROWS ? currentRows : MAX_ROWS);

      if (isFunction(onChange)) {
        return onChange(e);
      }
    },
    [onChange]
  );

  const handleFocusChange = React.useCallback(
    (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setFloating(e.target.value.length > 0);

      if (onBlur !== undefined) {
        return onBlur(e);
      }
    },
    [onBlur]
  );

  React.useEffect(() => {
    if (value && value !== '' && !floating) {
      setFloating(true);
    }
  }, [value, floating]);

  return (
    <TextareaContainer className={classNames('aries-textarea', className)}>
      <TextareaInput
        ref={textareaInputRef}
        placeholder={removeFloatingLabel ? label : undefined}
        rows={rows}
        status={status}
        disabled={disabled}
        onBlur={handleFocusChange}
        onChange={handleChange}
        floating={floating}
        value={value}
        aria-label={label}
        small={small}
        {...restProps}
        style={{
          maxHeight: `${textareaMaxHeight}px`,
        }}
      />
      {!removeFloatingLabel && (
        <TextareaLabel
          data-testid="textarea-label"
          floating={floating}
          status={status}
          small={small}
        >
          {label}
        </TextareaLabel>
      )}
    </TextareaContainer>
  );
};

export type Status = 'default' | 'error';

export interface Props extends HTMLAttributes<HTMLTextAreaElement> {
  value?: string;
  status?: Status;
  /** Placeholder for the text area. */
  label?: string;
  removeFloatingLabel?: boolean;
  disabled?: boolean;
  forwardedRef?: RefObject<HTMLTextAreaElement>;
  small?: boolean;
}

const forwardRef = (props: Props, ref: RefObject<HTMLTextAreaElement>) => (
  <Textarea {...props} forwardedRef={ref} />
);

forwardRef.displayName = Textarea.name;

export default React.forwardRef(forwardRef);
