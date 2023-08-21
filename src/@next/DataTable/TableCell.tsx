import React from 'react';
import { Typography } from '../Typography';
import { StyledTableCell } from './DataTableStyle';

export interface TableCellProps
  extends React.TdHTMLAttributes<HTMLTableColElement> {
  children: React.ReactNode;
  /** Sets table cell content to not wrap*/
  noWrap?: boolean;
  verticalAlign?: 'top' | 'center';
}

export const TableCell = ({
  align,
  children,
  noWrap = false,
  verticalAlign = 'top',
}: TableCellProps) => {
  return (
    <StyledTableCell
      data-text-align={align}
      data-no-wrap={noWrap}
      data-vertical-align={verticalAlign}
    >
      <Typography as="div" variant="subtitle2">
        {children}
      </Typography>
    </StyledTableCell>
  );
};
