import React, { useCallback } from 'react';
import { Typography } from '../Typography';
import { Neutral } from '../utilities/colors';
import { ListContainer, StyledMenu, TitleContainer } from './MenuStyle';

interface Option {
  active?: boolean;
  disabled?: boolean;
  id?: string;
  label: React.ReactNode;
  value: string;
}
export interface MenuProps {
  id?: string;
  onChange?: (selected: string[]) => void;
  options?: Option[];
  selected?: string[];
  title?: string;
}

export const Menu = ({ id, onChange, options, selected, title }: MenuProps) => {
  const handleClick = useCallback(
    (value: string) => {
      onChange([value]);
    },
    [onChange]
  );
  return (
    <StyledMenu id={id}>
      <TitleContainer>
        <Typography variant="subtitle2" as="span" color={Neutral.B40}>
          {title}
        </Typography>
      </TitleContainer>
      {options.map(option => {
        const { value, label, disabled, active, id } = option;
        const isSelected = selected.includes(value) || active;
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
