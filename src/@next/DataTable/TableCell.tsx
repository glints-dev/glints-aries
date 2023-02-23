import React from 'react';
import { TableTypography } from './DataTable';
import { StyledTableCell } from './DataTableStyle';

export interface TableCellProps
  extends React.TdHTMLAttributes<HTMLTableColElement> {
  children: React.ReactNode;
}

export const TableCell = ({ align, children }: TableCellProps) => {
  return (
    <StyledTableCell data-text-align={align}>
      <TableTypography as="div" variant="body1">
        {children}
      </TableTypography>
    </StyledTableCell>
  );
};
