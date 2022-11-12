import * as React from 'react';
import classNames from 'classnames';
import { isUndefined } from 'lodash-es';

import { CheckboxContainer } from './CheckboxStyle';

export type CheckedState = 'false' | 'true' | 'mixed';

const getCheckedState = (
  internalChecked: boolean,
  externalChecked: boolean,
  externalIndeterminate: boolean
): CheckedState => {
  if (externalIndeterminate) return 'mixed';
  if (!isUndefined(externalChecked)) {
    return externalChecked ? 'true' : 'false';
  }
  return internalChecked ? 'true' : 'false';
};

export const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  id,
  label,
  value,
  onClick,
  size = 'small',
  border = false,
  indeterminate = undefined,
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

  const combinedChecked = getCheckedState(
    internalChecked,
    checked,
    indeterminate
  );

  return (
    <CheckboxContainer
      className={classNames('aries-checkbox', className)}
      role="checkbox"
      aria-labelledby={id}
      aria-checked={combinedChecked}
      data-border={border ? 'true' : 'false'}
      tabIndex={0}
      size={size}
    >
      <input
        type="checkbox"
        id={id}
        value={value}
        onClick={handleClick}
        checked={combinedChecked !== 'false'}
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
  /** REQUIRED */
  id?: string;
  label?: React.ReactNode;
  size?: 'large' | 'small';
  border?: boolean;
  /** REQUIRED */
  value?: string;
  /** If given, the Checkbox will be treated as controlled. Use with onClick. */
  checked?: boolean;
  /** If true, overrides 'checked' and puts the checkbox in mixed state */
  indeterminate?: boolean;
  /** Called when the checkbox changed (uncontrolled) or should change (controlled). */
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}

export default Checkbox;
