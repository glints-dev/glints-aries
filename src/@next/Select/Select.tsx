import React from 'react';
import { Typography } from '../Typography';
import { Neutral } from '../utilities/colors';
import { OptionType, renderOptions } from './SelectOption';
import { HelpTextContainer, Label, StyledSelect } from './SelectStyle';

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: string[] | OptionType[];
  label?: React.ReactNode;
  helpText?: React.ReactNode;
  disabled?: boolean;
  hasError?: boolean;
}

export const Select = ({
  disabled,
  hasError,
  helpText,
  id,
  label,
  name,
  options,
  placeholder,
  ...props
}: SelectProps) => {
  return (
    <div>
      <Label htmlFor={name}>
        <Typography as="span" variant="subtitle2" color={Neutral.B18}>
          {label}
        </Typography>
      </Label>
      <StyledSelect
        id={id}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        data-error={hasError}
        {...props}
      >
        {renderOptions({ options })}
      </StyledSelect>
      {helpText && (
        <HelpTextContainer>
          <Typography
            as="span"
            variant="subtitle2"
            color={disabled ? Neutral.B85 : Neutral.B40}
          >
            {helpText}
          </Typography>
        </HelpTextContainer>
      )}
    </div>
  );
};
