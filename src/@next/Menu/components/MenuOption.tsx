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
  const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    event.stopPropagation();
    onClick({ value: event.currentTarget.dataset.value });
  };

  return (
    <ListContainer>
      <li
        aria-disabled={disabled}
        data-active={isSelected}
        data-multiple={allowMultiple}
        data-value={value}
        onClick={handleClick}
      >
        {children}
      </li>
    </ListContainer>
  );
};
