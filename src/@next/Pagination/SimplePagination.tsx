import React from 'react';
import { StyledNav } from './PaginationStyle';
import { defaultPageSize, PaginationProps } from './paginationUtils';

export const SimplePagination = ({
  totalItems = 1,
  currentPage = 1,
  disabled,
  pageSize = defaultPageSize,
  onPageChanged,
}: PaginationProps) => {
  return <StyledNav>Hello</StyledNav>;
};
