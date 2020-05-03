import * as React from 'react';
import classNames from 'classnames';

import { CheckboxContainer } from '../../Style/Input/CheckboxStyle';

const Checkbox: React.FunctionComponent<Props> = ({
  id,
  label,
  value,
  onClick,
  size = 'small',
  className,
  ...restProps
}: Props) => {
  const [checked, setChecked] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    setChecked(checked => !checked);
    if (onClick !== undefined) {
      return onClick(e);
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
    >
      <input
        type="checkbox"
        id={id}
        value={value}
        onClick={handleClick}
        {...restProps}
      />
      <label htmlFor={id} tabIndex={-1}>
        {label || value}
      </label>
    </CheckboxContainer>
  );
};

type HTMLInputProps = Omit<React.HTMLProps<HTMLInputElement>, 'size' | 'label'>;

export interface Props extends HTMLInputProps {
  label?: React.ReactNode;
  size?: 'large' | 'small';
}

export default Checkbox;
