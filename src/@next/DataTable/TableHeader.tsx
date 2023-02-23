import React, { useState, useEffect } from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { SortDirection, TableTypography } from './DataTable';
import { StyledTabledHeader } from './DataTableStyle';

export interface TableHeaderProps
  extends React.ThHTMLAttributes<HTMLTableColElement> {
  title: string;
  sortDirection?: SortDirection;
  onSort?: (sortDirection: SortDirection) => void;
}

export const TableHeader = ({
  sortDirection: sortDirectionProp,
  title,
  align = 'left',
  onSort,
}: TableHeaderProps) => {
  const [sortDirection, setSortDirection] = useState(null);

  useEffect(() => {
    setSortDirection(sortDirectionProp);
  }, [sortDirectionProp]);

  const iconName =
    sortDirection === 'ASCENDING'
      ? 'ri-arrow-xs-up-fill'
      : 'ri-arrow-xs-down-fill';

  const iconMarkup = sortDirection ? <Icon name={iconName} /> : null;
  const titleMarkup = (
    <TableTypography as="span" variant="body1">
      {title}
    </TableTypography>
  );

  const handleSortableClick = () => {
    if (!sortDirection) {
      return;
    }
    const direction =
      sortDirection === 'ASCENDING' ? 'DESCENDING' : 'ASCENDING';
    setSortDirection(direction);
    onSort?.(direction);
  };

  const sortableCellMarkup = (
    <Button
      data-testid={`data-table-sort-button-${title}`}
      icon={iconMarkup}
      onClick={() => handleSortableClick()}
    >
      {titleMarkup}
    </Button>
  );

  const contentMarkup = sortDirection ? sortableCellMarkup : titleMarkup;

  return (
    <StyledTabledHeader data-text-align={align}>
      <div>{contentMarkup}</div>
    </StyledTabledHeader>
  );
};
