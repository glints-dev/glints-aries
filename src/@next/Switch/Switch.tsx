import React from 'react';
import { Icon } from '../Icon';
import { Neutral } from '../utilities/colors';
import { InputStyle, LabelStyle, SwitchStyle } from './SwitchStyle';

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  checked?: boolean;
  disabled?: boolean;
  onChange: () => void;
  value: string;
  withIcon?: boolean;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  function Switch(
    {
      checked,
      disabled,
      onChange,
      value,
      withIcon,
      ...otherProps
    }: SwitchProps,
    ref
  ) {
    const IconRender = () => {
      return (
        <>
          <Icon name="ri-check" fill={disabled ? Neutral.B85 : Neutral.B100} />
          <Icon name="ri-close" fill={disabled ? Neutral.B85 : Neutral.B100} />
        </>
      );
    };

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
          data-with-icon={withIcon}
        />
        <SwitchStyle data-disabled={disabled} data-with-icon={withIcon}>
          {withIcon && <IconRender />}
        </SwitchStyle>
      </LabelStyle>
    );
  }
);
