import React, { useState, useEffect } from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Typography } from '../Typography';
import { Neutral } from '../utilities/colors';
import { SortDirection } from './DataTable';
import { StyledTabledHeader } from './DataTableStyle';

export interface TableHeaderProps
  extends Omit<React.ThHTMLAttributes<HTMLTableColElement>, 'title'> {
  title: React.ReactNode;
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
    sortDirection === 'ASCENDING' ? 'ri-arrow-up-line' : 'ri-arrow-down-line';

  const iconMarkup = sortDirection ? (
    <Icon
      className="data-table-sort-button-icon"
      name={iconName}
      height="10px"
      fill={Neutral.B40}
    />
  ) : null;
  const titleMarkup = (
    <Typography
      as="span"
      variant="caption"
      color={Neutral.B18}
      style={{ whiteSpace: 'nowrap' }}
    >
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
    <Button
      className="data-table-sort-button"
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
