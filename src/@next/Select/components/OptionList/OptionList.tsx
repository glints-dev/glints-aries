import React from 'react';
import { Menu, MenuProps } from '../../../Menu';
import { Typography } from '../../../Typography';
import { Neutral } from '../../../utilities/colors';
import {
  useActivatorSelect,
  useActivatorTextInput,
} from '../Activator/ActivatorContext';
import { EmptyOptionContainer, OptionListContainer } from './OptionListStyle';

export interface OptionListProps extends MenuProps {
  isEmpty?: boolean;
  noOptionsMessage?: React.ReactNode;
  onSelect?({ value }: { value: string }): void;
}

export interface NoOptionListProps {
  noOptionsMessage?: React.ReactNode;
}

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

export const OptionList = ({
  allowMultiple,
  noOptionsMessage,
  onSelect,
  options,
  sections,
  selectedValues,
  title,
}: OptionListProps) => {
  const activatorSelectContext = useActivatorSelect();
  const activatorTextInputContext = useActivatorTextInput();
  const { width: selectWidth } = activatorSelectContext;
  const { width: textInputWidth } = activatorTextInputContext;
  const hasOptions = options.length > 0;

  const onOptionSelect = ({ value }: { value: string }) => {
    if (onSelect) {
      onSelect({ value });
      return;
    }
  };

  return (
    <OptionListContainer width={selectWidth ?? textInputWidth}>
      {hasOptions ? (
        <Menu
          allowMultiple={allowMultiple}
          options={options}
          onClick={onOptionSelect}
          sections={sections}
          selectedValues={selectedValues}
          title={title}
        />
      ) : (
        <NoOptionList noOptionsMessage={noOptionsMessage} />
      )}
    </OptionListContainer>
  );
};
