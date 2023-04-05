import React from 'react';

import { ListContainer } from '../MenuStyle';

export interface MenuOptionProps
  extends Omit<React.LiHTMLAttributes<HTMLLIElement>, 'onClick'> {
  id?: string;
  disabled?: boolean;
  isSelected?: boolean;
  value: string;
  onClick?({ value }: { value: string }): void;
  allowMultiple?: boolean;
}

export const MenuOption = ({
  children,
  disabled,
  isSelected,
  onClick,
  value,
  allowMultiple,
}: MenuOptionProps) => {
  const handleClick = (value: string) => {
    onClick({ value });
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
        {children}
      </li>
    </ListContainer>
  );
};
