import React from 'react';
import { Checkbox } from '../../../Checkbox';
import { useOption, useOptionList } from './OptionListContext';

export type OptionType = {
  label: string;
  value: string;
};

export interface OptionProps extends OptionType {
  selected?: boolean;
}

export const Option = ({ label, value, selected }: OptionProps) => {
  const optionContext = useOption();
  const { allowMultiple } = optionContext;
  const optionListContext = useOptionList();
  const { onOptionSelect } = optionListContext;

  const handleOptionSelect = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    onOptionSelect(value);
  };
  return (
    <li value={value} onClick={handleOptionSelect}>
      {allowMultiple ? <Checkbox label={label} checked={selected} /> : label}
    </li>
  );
};
