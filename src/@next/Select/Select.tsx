import React from 'react';
import { StyledLabel } from './SelectStyle';

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: string[];
  label?: React.ReactNode;
}

export const Select = ({ label }: SelectProps) => {
  return <StyledLabel>{label}</StyledLabel>;
};
