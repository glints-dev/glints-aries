import React from 'react';
import nextId from 'react-id-generator';
import { Typography } from '../Typography';
import { Neutral } from '../utilities/colors';
import { MenuOption } from './MenuOption';
import { StyledMenu, TitleContainer } from './MenuStyle';

export interface Option {
  disabled?: boolean;
  id?: string;
  label: React.ReactNode;
  value: string;
}

export interface Section {
  title?: string;
  options: Option[];
}
export interface MenuProps {
  id?: string;
  onClick?: (selected: string[]) => void;
  options?: Option[];
  /** Selected value based on Option.value */
  selectedValues?: string[];
  title?: string;
  allowMultiple?: boolean;
  sections?: Section[];
}

export const Menu = ({
  allowMultiple,
  id,
  onClick,
  options,
  selectedValues,
  title,
}: MenuProps) => {
  const randomId = nextId('glints-menu');
  const menuId = id ? id : randomId;

  return (
    <StyledMenu id={menuId}>
      {title && (
        <TitleContainer>
          <Typography variant="subtitle2" as="span" color={Neutral.B40}>
            {title}
          </Typography>
        </TitleContainer>
      )}
      {options.map((option: Option) => {
        const { value, label, disabled, id } = option;
        const randomId = nextId('glints-menu-option');
        const menuOptionId = id ? id : randomId;
        const isSelected = selectedValues?.includes(value);

        return (
          <MenuOption
            key={menuOptionId}
            value={value}
            label={label}
            disabled={disabled}
            isSelected={isSelected}
            onClick={onClick}
            allowMultiple={allowMultiple}
          />
        );
      })}
    </StyledMenu>
  );
};
