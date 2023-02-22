import React, { useState, useEffect } from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Typography } from '../Typography';
import { SortDirection } from './DataTable';
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
    <Typography as="span" variant="body1">
      {title}
    </Typography>
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
    <Button icon={iconMarkup} onClick={() => handleSortableClick()}>
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
