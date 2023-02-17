import React from 'react';

export type SortDirection = {
  ASC: 'ASCENDING';
  Desc: 'DESCENDING';
};

export type TableHeading = {
  title: string;
  sortable?: boolean;
  defaultSortDirection?: SortDirection;
};

export type DataTableProps = {
  heading?: TableHeading[];
  totals?: string[];
};

export const DataTable = () => {
  return <></>;
};
