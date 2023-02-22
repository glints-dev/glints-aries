import React from 'react';
import { StyledTableRow } from './DataTableStyle';

export interface TableRowProps
  extends React.HtmlHTMLAttributes<HTMLTableRowElement> {
  position?: number;
  children: React.ReactNode;
}

export const TableRow = ({ children, ...props }: TableRowProps) => {
  return <StyledTableRow {...props}>{children}</StyledTableRow>;
};
