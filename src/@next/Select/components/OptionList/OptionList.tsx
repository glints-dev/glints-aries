import React from 'react';
import { Menu, MenuProps } from '../../../Menu';
import { Typography } from '../../../Typography';
import { Neutral } from '../../../utilities/colors';
import { useActivatorTextInput } from '../Activator/ActivatorContext';
import { useOptionList } from './OptionListContext';
import { EmptyOptionContainer, OptionListContainer } from './OptionListStyle';

export interface OptionListProps extends MenuProps {
  isEmpty?: boolean;
  noOptionsMessage?: React.ReactNode;
  onMenuClose?: () => void;
  onSelect?({ value }: { value: string }): void;
  width?: string;
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
  onMenuClose,
  onSelect,
  sections,
  selectedValues,
  title,
  width,
}: OptionListProps) => {
  const activatorContext = useActivatorTextInput();
  const optionListContext = useOptionList();
  const { updateSearchableSelectState } = activatorContext;
  const { menuOptions, options, updateMenuOptions } = optionListContext;
  const hasMenuOptions = menuOptions?.length > 0;

  const onOptionSelect = ({ value }: { value: string }) => {
    if (onSelect) {
      updateSearchableSelectState({
        showSelected: true,
        showInput: false,
        showPlaceholder: false,
      });
      onSelect({ value });

      if (allowMultiple) return;

      onMenuClose();
      updateMenuOptions(options);
    }
  };

  return (
    <OptionListContainer width={width}>
      {hasMenuOptions ? (
        <Menu
          allowMultiple={allowMultiple}
          options={menuOptions}
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
