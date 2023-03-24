import React from 'react';
import { Checkbox } from '../Checkbox';
import { Typography } from '../Typography';
import { Neutral } from '../utilities/colors';
import { ListContainer } from './MenuStyle';

export interface MenuOptionProps
  extends Omit<React.LiHTMLAttributes<HTMLLIElement>, 'onClick'> {
  id?: string;
  disabled?: boolean;
  isSelected?: boolean;
  value: string;
  label: React.ReactNode;
  onClick?({ value }: { value: string }): void;
  allowMultiple?: boolean;
}
export const MenuOption = ({
  disabled,
  isSelected,
  label,
  onClick,
  value,
  allowMultiple,
}: MenuOptionProps) => {
  const handleClick = (value: string) => {
    onClick({ value });
  };

  const renderLabelContent = ({
    isSelected,
    disabled,
  }: {
    isSelected: boolean;
    disabled?: boolean;
  }) => {
    if (allowMultiple) {
      return (
        <Checkbox label={label} checked={isSelected} disabled={disabled} />
      );
    } else {
      return (
        <Typography as="span" variant="body1" color={Neutral.B18}>
          {label}
        </Typography>
      );
    }
  };

  return (
    <ListContainer>
      <li
        aria-disabled={disabled}
        data-active={isSelected}
        data-multiple={allowMultiple}
        value={value}
        onClick={() => handleClick(value)}
      >
        {renderLabelContent({ isSelected, disabled })}
      </li>
    </ListContainer>
  );
};
