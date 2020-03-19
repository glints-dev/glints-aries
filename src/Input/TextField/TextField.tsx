import * as React from 'react';

import classNames from 'classnames';

import { EyeIcon, EyeSlashedIcon } from '../../General/Icon/components';

import {
  TextFieldContainer,
  TextFieldInput,
  TextFieldLabel,
} from '../../Style/Input/TextFieldStyle';

export const isFilled = (type: textFieldType, value: any) => {
  if (value === undefined || value === null) return false;
  if (type === 'number') return !isNaN(parseInt(value));
  return value !== '';
};

const TextField: React.FunctionComponent<Props> = props => {
  const {
    value,
    status,
    onKeyDown,
    disableTyping,
    small,
    type,
    label,
    disabled,
    className,
    removeFloatingLabel,
    forwardedRef,
    ...restProps
  } = props;

  const [floating, setFloating] = React.useState<boolean>(false);
  const [inputType, setInputType] = React.useState<textFieldType>(type);

  const handleShowPassword = React.useCallback(() => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  }, [setInputType, inputType]);

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

  return (
    <TextFieldContainer className={classNames('aries-textfield', className)}>
      <TextFieldInput
        ref={forwardedRef}
        type={inputType}
        placeholder={removeFloatingLabel && label}
        status={status}
        disabled={disabled}
        onKeyDown={handleKeyDown}
        floating={floating}
        value={value}
        aria-label={label}
        small={small}
        disableTyping={disableTyping}
        {...restProps}
      />
      {!removeFloatingLabel && (
        <TextFieldLabel
          data-testid="textfield-label"
          className="textfield-label"
          floating={floating}
          status={status}
          small={small}
        >
          {label}
        </TextFieldLabel>
      )}
      {type === 'password' && (
        <div className="see-password" onClick={handleShowPassword}>
          {inputType === 'password' ? (
            <EyeIcon color="black" />
          ) : (
            <EyeSlashedIcon color="#777777" />
          )}
        </div>
      )}
    </TextFieldContainer>
  );
};

export type textFieldType = 'text' | 'password' | 'number';

export interface Props
  extends React.ComponentPropsWithoutRef<typeof TextFieldInput> {
  type: textFieldType;
  label: string;
  disabled?: boolean;
  className?: string;
  removeFloatingLabel?: boolean;
  min?: number;
  max?: number;
  step?: number;
  forwardedRef?: React.RefObject<HTMLInputElement>;
}

const forwardRef = (props: Props, ref: React.RefObject<HTMLInputElement>) => (
  <TextField {...props} forwardedRef={ref} />
);

forwardRef.displayName = TextField.name;

export default React.forwardRef(forwardRef);
