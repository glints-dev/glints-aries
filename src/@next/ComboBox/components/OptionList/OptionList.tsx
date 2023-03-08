import React from 'react';
import { Option, OptionType } from './Option';
import { StyledOptionList } from './OptionListStyle';

export interface OptionListProps {
  options: OptionType[];
}

export const OptionList = ({ options }: OptionListProps) => {
  return (
    <StyledOptionList>
      {options.map(({ label, value }) => (
        <Option key={value} label={label} value={value} />
      ))}
    </StyledOptionList>
  );
};
