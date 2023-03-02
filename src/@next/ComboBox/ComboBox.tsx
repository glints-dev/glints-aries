import React from 'react';
import { StyledComboBox } from './ComboBoxStyle';

export interface ComboBoxProps {
  activator: React.ReactNode;
  allowMultiple?: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
}

export const ComboBox = ({
  // activator,
  // allowMultiple = false,
  children,
  // onClose,
  ...props
}: ComboBoxProps) => {
  return <StyledComboBox {...props}>{children}</StyledComboBox>;
};
