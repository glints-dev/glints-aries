import * as React from 'react';

import classNames from 'classnames';

import {
  EyeIcon,
  EyeSlashedIcon,
  CloseCircleSolidIcon,
} from '../../General/Icon/components';

import {
  TextFieldContainer,
  TextFieldInput,
  TextFieldLabel,
  IconContainer,
  StartIconContainer,
} from './TextFieldStyle';

export const isFilled = (type: textFieldType, value: any) => {
  if (value === undefined || value === null) return false;
  if (type === 'number') return !isNaN(parseInt(value));
  return value !== '';
};

/** Use <code>onChange</code> to listen to input changes.
 * Use <code>onBlur</code> to listen to focus loss.
 * <br/>
 * Use <code>status</code> to set different styles for the Text Field based on status.
 * <br/>
 * Use <code>small</code> to set the size of the text field. The <code>...rest</code> is passed to the
 * internal text field input. */
export const TextField: React.FunctionComponent<Props> = ({
  value,
  status,
  onKeyDown,
  disableTyping,
  small,
  type,
  label,
  disabled = false,
  className,
  removeFloatingLabel = false,
  allowClear = false,
  forwardedRef,
  onChange,
  startIcon,
  ...restProps
}) => {
  const [floating, setFloating] = React.useState<boolean>(false);
  const [inputType, setInputType] = React.useState<textFieldType>(type);
  const hasStartIcon = Boolean(startIcon);

  const handleShowPassword = React.useCallback(() => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  }, [setInputType, inputType]);

  const handleClearInput = (e: React.MouseEvent<SVGSVGElement>) => {
    const event = Object.create(e);
    event.target.value = '';
    onChange(event);
  };

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (disableTyping) {
        e.preventDefault();
      }

      if (onKeyDown !== undefined) {
        return onKeyDown(e);
      }
    },
    [onKeyDown, disableTyping]
  );

  React.useEffect(() => {
    setFloating(isFilled(inputType, value));
  }, [setFloating, inputType, value]);

  const canShowClearIcon =
    allowClear && type === 'text' && value && value.length > 0;

  return (
    <TextFieldContainer className={classNames('aries-textfield', className)}>
      <TextFieldInput
        ref={forwardedRef}
        type={inputType}
        placeholder={removeFloatingLabel && label}
        status={status}
        disabled={disabled}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        floating={floating}
        value={value}
        aria-label={label}
        small={small}
        disableTyping={disableTyping}
        hasStartIcon={hasStartIcon}
        {...restProps}
      />
      {startIcon && <StartIconContainer>{startIcon}</StartIconContainer>}
      {!removeFloatingLabel && (
        <TextFieldLabel
          data-testid="textfield-label"
          className="textfield-label"
          floating={floating}
          status={status}
          small={small}
          hasStartIcon={hasStartIcon}
        >
          {label}
        </TextFieldLabel>
      )}
      {canShowClearIcon && (
        <IconContainer>
          <CloseCircleSolidIcon
            data-testid="clear-button"
            onClick={handleClearInput}
          />
        </IconContainer>
      )}
      {type === 'password' && (
        <IconContainer onClick={handleShowPassword}>
          {inputType === 'password' ? (
            <EyeSlashedIcon data-testid="invisible-icon" />
          ) : (
            <EyeIcon />
          )}
        </IconContainer>
      )}
    </TextFieldContainer>
  );
};

export type textFieldType = 'text' | 'password' | 'number';

export interface Props
  extends React.ComponentPropsWithoutRef<typeof TextFieldInput> {
  type: textFieldType;
  /** Placeholder for the text field. */
  label: string;
  disabled?: boolean;
  className?: string;
  removeFloatingLabel?: boolean;
  /** If true, removes the input content with clear icon. Works for type "text" only. */
  allowClear?: boolean;
  /** Minimum value of the "number" type input */
  min?: number;
  /** Maximum value of the "number" type input. */
  max?: number;
  /** Step value for the "number" type input */
  step?: number;
  forwardedRef?: React.RefObject<HTMLInputElement>;
  /** Icon at the start of the input element. */
  startIcon?: React.ReactNode;
}

const forwardRef = (props: Props, ref: React.RefObject<HTMLInputElement>) => (
  <TextField {...props} forwardedRef={ref} />
);

forwardRef.displayName = TextField.name;

export default React.forwardRef(forwardRef);
