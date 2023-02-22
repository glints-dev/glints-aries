import React from 'react';
import { StyledTableFooterRow } from './DataTableStyle';

export const TableFooterRow = ({ children }: { children: React.ReactNode }) => {
  return <StyledTableFooterRow>{children}</StyledTableFooterRow>;
};
