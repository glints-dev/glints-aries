import React from 'react';
import { Typography } from '../Typography';
import { StyledTableCell } from './DataTableStyle';

export interface TableCellProps
  extends React.TdHTMLAttributes<HTMLTableColElement> {
  children: React.ReactNode;
  /** Sets table cell content to not wrap*/
  noWrap?: boolean;
}

export const TableCell = ({
  align,
  children,
  noWrap = false,
}: TableCellProps) => {
  return (
    <StyledTableCell data-text-align={align} data-no-wrap={noWrap}>
      <Typography as="div" variant="body1">
        {children}
      </Typography>
    </StyledTableCell>
  );
};
