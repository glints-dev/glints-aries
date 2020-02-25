import * as React from 'react';

import classNames from 'classnames';
import { isFunction } from 'lodash';

import {
  TextareaContainer,
  TextareaInput,
  TextareaLabel,
} from '../../Style/Input/TextareaStyle';

const Textarea: React.FunctionComponent<Props> = props => {
  const {
    label,
    value,
    status,
    disabled,
    className,
    onBlur,
    onChange,
    removeFloatingLabel,
    ...restProps
  } = props;

  const [floating, setFloating] = React.useState(false);
  const [rows, setRows] = React.useState(4);
  const [minRows] = React.useState(4);
  const [maxRows] = React.useState(12);

  const textareaInputRef = props.forwardedRef || React.useRef(null);

  const [textareaMaxHeight, setTextareaMaxHeight] = React.useState(0);

  React.useLayoutEffect(() => {
    const textarea = textareaInputRef.current;

    if (!textarea) return;

    if (textarea.value.length > 0) {
      setFloating(true);
    }

    setTextareaMaxHeight(~~(textarea.offsetHeight * 3.7 + 23 * 8 + 1));
  }, []);

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const previousRows = e.target.rows;
      e.target.rows = minRows;

      const currentRows = ~~(e.target.scrollHeight / 30);

      if (currentRows === previousRows) {
        e.target.rows = currentRows;
      }

      if (currentRows >= maxRows) {
        e.target.rows = maxRows;
        e.target.scrollTop = e.target.scrollHeight;
      }

      setRows(currentRows < maxRows ? currentRows : maxRows);

      if (isFunction(onChange)) {
        return onChange(e);
      }
    },
    [onChange]
  );

  const handleFocusChange = React.useCallback(
    (onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void) => {
      const listener = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        setFloating(e.target.value.length > 0);

        if (onBlur !== undefined) {
          return onBlur(e);
        }
      };

      return listener;
    },
    []
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
        onBlur={handleFocusChange(onBlur)}
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

interface Props extends React.ComponentPropsWithoutRef<typeof TextareaInput> {
  label?: string;
  onBlur?(): void;
  onChange?(e: React.ChangeEvent<HTMLTextAreaElement>): void;
  removeFloatingLabel?: boolean;
  forwardedRef?: React.RefObject<HTMLTextAreaElement>;
}

const forwardRef = (
  props: Props,
  ref: React.RefObject<HTMLTextAreaElement>
) => <Textarea {...props} forwardedRef={ref} />;

forwardRef.displayName = Textarea.name;

export default React.forwardRef(forwardRef);
