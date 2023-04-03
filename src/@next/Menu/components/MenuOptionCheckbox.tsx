import React from 'react';
import { Checkbox } from '../../Checkbox';

export const MenuOptionCheckbox = ({
  disabled,
  isSelected,
  label,
}: {
  disabled: boolean;
  isSelected: boolean;
  label: React.ReactNode;
}) => {
  return <Checkbox label={label} checked={isSelected} disabled={disabled} />;
};
