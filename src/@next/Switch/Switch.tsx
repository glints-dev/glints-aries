import React from 'react';
import { InputStyle, LabelStyle, SwitchStyle } from './SwitchStyle';

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  checked?: boolean;
  disabled?: boolean;
  onChange: () => void;
  value: string;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  function Switch(
    { checked, disabled, onChange, value, ...otherProps }: SwitchProps,
    ref
  ) {
    return (
      <LabelStyle>
        <InputStyle
          value={value}
          {...otherProps}
          disabled={disabled}
          defaultChecked={checked}
          type="checkbox"
          onChange={onChange}
          ref={ref}
        />

        <SwitchStyle data-disabled={disabled} />
      </LabelStyle>
    );
  }
);
