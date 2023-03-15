import React from 'react';
import nextId from 'react-id-generator';
import { Typography } from '../Typography';
import { Neutral } from '../utilities/colors';
import { ListContainer, StyledMenu, TitleContainer } from './MenuStyle';

export interface Option {
  disabled?: boolean;
  id?: string;
  label: React.ReactNode;
  value: string;
}
export interface MenuProps {
  id?: string;
  onChange?: (selected: string[]) => void;
  options?: Option[];
  /** Selected value based on Option.value */
  selectedValues?: string[];
  title?: string;
}

export const Menu = ({
  id,
  onChange,
  options,
  selectedValues,
  title,
}: MenuProps) => {
  const randomId = nextId('glints-menu');
  const menuId = id ? id : randomId;

  const handleClick = (value: string) => {
    onChange([value]);
  };

  return (
    <StyledMenu id={menuId}>
      {title && (
        <TitleContainer>
          <Typography variant="subtitle2" as="span" color={Neutral.B40}>
            {title}
          </Typography>
        </TitleContainer>
      )}
      {options.map(option => {
        const { value, label, disabled, id } = option;
        const isSelected = selectedValues?.includes(value);
        return (
          <ListContainer key={id}>
            <li
              key={id}
              aria-disabled={disabled}
              data-active={isSelected}
              value={value}
              onClick={() => handleClick(value)}
            >
              <Typography as="span" variant="body1" color={Neutral.B18}>
                {label}
              </Typography>
            </li>
          </ListContainer>
        );
      })}
    </StyledMenu>
  );
};
