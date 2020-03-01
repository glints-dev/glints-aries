import * as React from 'react';
import classNames from 'classnames';

import { CheckboxContainer } from '../../Style/Input/CheckboxStyle';

const Checkbox: React.FunctionComponent<Props> = ({
  id,
  value,
  onClick,
  className,
  ...restProps
}) => {
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
    >
      <input
        type="checkbox"
        id={id}
        value={value}
        onClick={handleClick}
        {...restProps}
      />
      <label htmlFor={id} tabIndex={-1}>
        {value}
      </label>
    </CheckboxContainer>
  );
};

type Props = React.HTMLProps<HTMLInputElement>;

export default Checkbox;
