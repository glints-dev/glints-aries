import React from 'react';
import { EmptyStateProps } from '../EmptyState';
import { Spinner } from '../Spinner';
import { Typography } from '../Typography';
import {
  StyledDataTableContainer,
  StyledLoaderWrapper,
  StyledSpinnerContainer,
  StyledTable,
  StyledTableCell,
  StyledTableFooterRow,
  StyledTableLoadingRow,
  StyledTableRow,
} from './DataTableStyle';
import { TableCell } from './TableCell';
import { TableFooter } from './TableFooter';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

export type SortDirection = 'ASCENDING' | 'DESCENDING';

export type TableHeading = Omit<
  React.ThHTMLAttributes<HTMLTableColElement>,
  'title'
> & {
  title?: React.ReactNode;
  id?: string;
  defaultSortDirection?: SortDirection;
};

export type Total = TableHeading | null;

export interface DataTableProps
  extends React.TableHTMLAttributes<HTMLTableElement> {
  /** If the title in TableHeading is of type ReactNode and you require sorting functionality, please make sure to provide 'id' for the TableHeading */
  headings: TableHeading[];
  children: React.ReactNode;
  emptyState?: React.ReactElement<EmptyStateProps>;
  totals?: Total[];
  loading?: boolean;
  loadingLabel?: string;
  onSortChanged?: (context: string, sortDirection: SortDirection) => void;
}

const DataTableComponent = React.forwardRef<HTMLTableElement, DataTableProps>(
  function DataTable(
    {
      headings,
      totals,
      onSortChanged,
      children,
      emptyState,
      loading,
      loadingLabel = 'loading',
      ...props
    }: DataTableProps,
    ref
  ) {
    const handleSortChanged = (
      context: string,
      sortDirection: SortDirection
    ) => {
      onSortChanged?.(context, sortDirection);
    };

    const rowHeaderMarkup = headings.map((heading, index) => {
      const { id, title, defaultSortDirection, align } = heading;
      const key = `table-header-heading-${title}-${index}`;

      if (handleSortChanged && typeof title !== 'string' && !id)
        console.warn(
          "Warning: If the title in TableHeading is of type ReactNode and you require sorting functionality, please make sure to provide 'id' for the TableHeading."
        );

      return (
        <TableHeader
          key={key}
          title={title}
          sortDirection={defaultSortDirection}
          align={align}
          onSort={sortDirection =>
            handleSortChanged(id || title.toString(), sortDirection)
          }
        />
      );
    });

    const totalsRowMarkup = totals
      ? totals.map((total, index) => {
          const { title, align } = total || { title: '' };
          const key = `${total}-${index}`;

          return (
            <TableCell key={key} align={align}>
              <Typography as="div" variant="caption">
                {title}
              </Typography>
            </TableCell>
          );
        })
      : null;

    let footer;
    const rows: React.ReactNode[] = [];

    for (const child of React.Children.toArray(children)) {
      const reactEl = child as React.ReactElement;
      if (reactEl.type === TableFooter) {
        footer = reactEl.props.children;
        continue;
      }
      rows.push(reactEl);
    }

    const emptyRow = emptyState ? (
      <StyledTableRow>
        <StyledTableCell colSpan={headings.length}>
          {emptyState}
        </StyledTableCell>
      </StyledTableRow>
    ) : null;

    const hasRows = rows.length > 0;
    const rowsMarkup = hasRows ? rows : emptyRow;
    const showFooter = !!footer;

    const LoadingRow = () => (
      <StyledTableLoadingRow className="loader-container">
        <StyledLoaderWrapper>
          <StyledSpinnerContainer>
            <Spinner />
            <Typography variant="subtitle1">{loadingLabel}</Typography>
          </StyledSpinnerContainer>
        </StyledLoaderWrapper>
      </StyledTableLoadingRow>
    );

    return (
      <StyledDataTableContainer>
        <StyledTable
          ref={ref}
          data-loading={loading}
          data-has-footer={showFooter}
          {...props}
        >
          <thead>
            <StyledTableRow>{rowHeaderMarkup}</StyledTableRow>
          </thead>
          <tbody>
            <LoadingRow />
            {totalsRowMarkup && hasRows && (
              <StyledTableRow>{totalsRowMarkup}</StyledTableRow>
            )}
            {rowsMarkup}
          </tbody>
          {showFooter && (
            <tfoot>
              <StyledTableFooterRow>
                <StyledTableCell colSpan={headings.length}>
                  {footer}
                </StyledTableCell>
              </StyledTableFooterRow>
            </tfoot>
          )}
        </StyledTable>
      </StyledDataTableContainer>
    );
  }
);

export const DataTable = Object.assign(DataTableComponent, {
  Row: TableRow,
  Cell: TableCell,
  Footer: TableFooter,
});
