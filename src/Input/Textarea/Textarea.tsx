import React, { FC, HTMLAttributes, RefObject } from 'react';

import classNames from 'classnames';
import isFunction from 'lodash/isFunction';

import {
  TextareaContainer,
  TextareaInput,
  TextareaLabel,
} from './TextareaStyle';

const MIN_ROWS = 4;
const MAX_ROWS = 12;

/** Use <code>onChange</code> to listen to input changes. Use
 * <code>onBlur</code> to listen to focus loss.
 * <br/>
 * Note that currently, <code>Textarea</code> has some non-standard behaviour
 * when forwarding standard props: The <code>className</code> will be passed to
 * the internal 'container' while the <code>...rest</code> is passed to the
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

    if (textarea.value.length > 0) {
      setFloating(true);
    }

    setTextareaMaxHeight(~~(textarea.offsetHeight * 3.7 + 23 * 8 + 1));
  }, [textareaInputRef]);

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const previousRows = e.target.rows;
      e.target.rows = MIN_ROWS;

      const currentRows = ~~(e.target.scrollHeight / 30);

      if (currentRows === previousRows) {
        e.target.rows = currentRows;
      }

      if (currentRows >= MAX_ROWS) {
        e.target.rows = MAX_ROWS;
        e.target.scrollTop = e.target.scrollHeight;
      }

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
        placeholder={removeFloatingLabel && label}
        rows={rows}
        status={status}
        disabled={disabled}
        onBlur={handleFocusChange}
        onChange={handleChange}
        floating={floating}
        value={value}
        aria-label={label}
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
}

const forwardRef = (props: Props, ref: RefObject<HTMLTextAreaElement>) => (
  <Textarea {...props} forwardedRef={ref} />
);

forwardRef.displayName = Textarea.name;

export default React.forwardRef(forwardRef);
