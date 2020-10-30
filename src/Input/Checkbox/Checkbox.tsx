import * as React from 'react';
import classNames from 'classnames';

import { CheckboxContainer } from './CheckboxStyle';
import isUndefined from 'lodash/isUndefined';

export const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  id,
  label,
  value,
  onClick,
  size = 'small',
  border = false,
  className,
  checked,
  ...restProps
}: CheckboxProps) => {
  const [internalChecked, setInternalChecked] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    setInternalChecked(internalChecked => !internalChecked);
    if (onClick !== undefined) {
      return onClick(e);
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
    >
      <input
        type="checkbox"
        id={id}
        value={value}
        onClick={handleClick}
        checked={combinedChecked}
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
}

export default Checkbox;
