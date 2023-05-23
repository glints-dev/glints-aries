import React from 'react';
import { Icon } from '../Icon';
import { Neutral } from '../utilities/colors';
import {
  InputStyle,
  LabelStyle,
  SwitchStyle,
  SwitchTextStyle,
} from './SwitchStyle';

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  checked?: boolean;
  disabled?: boolean;
  onChange: () => void;
  value: string;
  withIcon?: boolean;
  checkedText?: string;
  uncheckedText?: string;
  checkedBackgroundColor?: string;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  function Switch(
    {
      checked,
      disabled,
      onChange,
      value,
      withIcon,
      checkedText,
      uncheckedText,
      checkedBackgroundColor,
      ...otherProps
    }: SwitchProps,
    ref
  ) {
    const withText = Boolean(checkedText) && Boolean(uncheckedText);

    if (withText && withIcon) {
      console.warn('Switch component cannot have both text and icon');
    }

    const IconRender = () => {
      return (
        <>
          <Icon name="ri-check" fill={disabled ? Neutral.B85 : Neutral.B100} />
          <Icon name="ri-close" fill={disabled ? Neutral.B85 : Neutral.B100} />
        </>
      );
    };

    const RenderSwitchText = () => {
      return (
        <>
          <SwitchTextStyle
            variant="overline"
            color={disabled ? Neutral.B85 : Neutral.B100}
          >
            {checkedText}
          </SwitchTextStyle>
          <SwitchTextStyle
            variant="overline"
            color={disabled ? Neutral.B85 : Neutral.B100}
          >
            {uncheckedText}
          </SwitchTextStyle>
        </>
      );
    };

    return (
      <LabelStyle>
        <InputStyle
          value={value}
          {...otherProps}
          disabled={disabled}
          checked={checked}
          type="checkbox"
          onChange={onChange}
          ref={ref}
          data-with-icon={!withText && withIcon}
          data-with-text={withText}
          backgroundColor={checkedBackgroundColor}
        />
        <SwitchStyle
          data-disabled={disabled}
          data-with-icon={!withText && withIcon}
          data-with-text={withText}
        >
          {!withText && withIcon && <IconRender />}
          {withText && <RenderSwitchText />}
        </SwitchStyle>
      </LabelStyle>
    );
  }
);
