import React from 'react';
import {
  LabelWrapper,
  RadioButtonInput,
  RadioButtonWrapper,
} from './RadioButtonStyle';
import { Typography } from '../Typography';
import { Colors } from '..';

export interface RadioButtonProps
  extends Omit<React.HTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  helperText?: string;
  disabled?: boolean;
  name?: string;
  checked?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * This is a controlled component, so you need to pass in the `checked` and `onChange` prop to make it work.
 */
export const RadioButton = ({
  label,
  helperText,
  disabled,
  name,
  checked,
  value,
  onChange,
  ...props
}: RadioButtonProps) => {
  return (
    <RadioButtonWrapper>
      <RadioButtonInput
        disabled={disabled}
        name={name}
        checked={checked}
        value={value}
        type="radio"
        onChange={onChange}
        onMouseDown={e => e.preventDefault()}
        {...props}
      />
      <LabelWrapper data-disabled={disabled}>
        <Typography variant="body1" as="span" color={Colors.Neutral.B18}>
          {label}
        </Typography>
        <Typography variant="subtitle2" as="span" color={Colors.Neutral.B40}>
          {helperText}
        </Typography>
      </LabelWrapper>
    </RadioButtonWrapper>
  );
};
