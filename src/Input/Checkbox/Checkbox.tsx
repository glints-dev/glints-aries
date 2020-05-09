import * as React from 'react';
import classNames from 'classnames';

import { CheckboxContainer } from '../../Style/Input/CheckboxStyle';

const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  id,
  label,
  value,
  onClick,
  size = 'small',
  border = false,
  className,
  ...restProps
}: CheckboxProps) => {
  const [checked, setChecked] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    if (border) {
      e.stopPropagation();
    } else {
      setChecked(checked => !checked);
      if (onClick !== undefined) {
        return onClick(e);
      }
    }
  };

  const handleContainerClick = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    if (border) {
      setChecked(checked => !checked);
      if (onClick !== undefined) {
        return onClick(e);
      }
    }
  };

  return (
    <CheckboxContainer
      className={classNames('aries-checkbox', className)}
      role="checkbox"
      aria-labelledby={id}
      aria-checked={checked}
      tabIndex={0}
      size={size}
      border={border}
      checked={checked}
      id={value}
      onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) =>
        handleContainerClick(e)
      }
    >
      <input
        type="checkbox"
        onClick={handleClick}
        checked={checked}
        id={id}
        value={value}
        {...restProps}
      />
      <label htmlFor={id} tabIndex={-1} id={value}>
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
