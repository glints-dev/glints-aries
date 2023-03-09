import React from 'react';
import { Checkbox } from '../../../Checkbox';
import { Typography } from '../../../Typography';
import { Neutral } from '../../../utilities/colors';
import { useOption, useOptionList } from './OptionListContext';
import { EmptyOptionContainer } from './OptionListStyle';

export type OptionType = {
  label: string;
  value: string;
};

export interface OptionProps extends OptionType {
  selected?: boolean;
}

export interface NoOptionListProps {
  noOptionsMessage?: React.ReactNode;
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
    <li value={value} onClick={handleOptionSelect} data-active={selected}>
      {allowMultiple ? <Checkbox label={label} checked={selected} /> : label}
    </li>
  );
};

export const NoOptionList = ({
  noOptionsMessage = 'No matching results',
}: NoOptionListProps) => {
  return (
    <EmptyOptionContainer>
      <Typography as="span" variant="body2" color={Neutral.B40}>
        {noOptionsMessage}
      </Typography>
    </EmptyOptionContainer>
  );
};
