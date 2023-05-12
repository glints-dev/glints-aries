import React, { useEffect, useState } from 'react';
import { Menu, MenuProps, Option } from '../../../Menu';
import { Typography } from '../../../Typography';
import { Neutral } from '../../../utilities/colors';
import { SearchableSelectState } from '../SearchableSelectInput/SearchableSelectInput';
import { EmptyOptionContainer, OptionListContainer } from './OptionListStyle';

export interface OptionListProps extends MenuProps {
  isEmpty?: boolean;
  noOptionsMessage?: React.ReactNode;
  onMenuClose?: () => void;
  onSelect?({ value }: { value: string }): void;
  width?: string;
  updateSearchableSelectState?: (newState: SearchableSelectState) => void;
  menuOptions?: Option[];
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
  updateSearchableSelectState,
  width,
  menuOptions,
}: OptionListProps) => {
  const [hasMenuOptions, setHasMenuOptions] = useState(false);

  useEffect(() => {
    setHasMenuOptions(menuOptions?.length > 0);
  }, [menuOptions]);

  const onOptionSelect = ({ value }: { value: string }) => {
    if (onSelect) {
      onSelect({ value });
      if (allowMultiple) return;

      updateSearchableSelectState({
        showSelected: true,
        showInput: false,
        showPlaceholder: false,
      });
      onMenuClose();
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
