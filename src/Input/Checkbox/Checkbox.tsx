import * as React from 'react';
import classNames from 'classnames';

import { CheckboxContainer } from './CheckboxStyle';
import { isUndefined } from 'lodash';

const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  id,
  label,
  value,
  onChange,
  size = 'small',
  border = false,
  className,
  checked,
  disabled = false,
  ...restProps
}: CheckboxProps) => {
  const [internalChecked, setInternalChecked] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalChecked(internalChecked => !internalChecked);
    if (onChange !== undefined) {
      return onChange(e);
    }
  };

  const combinedChecked = isUndefined(checked) ? internalChecked : checked;

  return (
    <CheckboxContainer
      className={classNames('aries-checkbox', className)}
      role="checkbox"
      aria-labelledby={id}
      aria-checked={combinedChecked}
      tabIndex={0}
      size={size}
      border={border}
      checked={combinedChecked}
      disabled={disabled}
    >
      <input
        type="checkbox"
        id={id}
        value={value}
        // onClick={handleClick}
        onChange={handleChange}
        checked={combinedChecked}
        disabled={disabled}
        {...restProps}
      />
      <label htmlFor={id} tabIndex={-1}>
        {label || value}
      </label>
    </CheckboxContainer>
  );
};

type HTMLInputProps = Omit<React.HTMLProps<HTMLInputElement>, 'size' | 'label'>;

export interface CheckboxProps extends HTMLInputProps {
  label?: React.ReactNode;
  size?: 'large' | 'small';
  border?: boolean;
  value?: string;
  disabled?: boolean;
}

export default Checkbox;
