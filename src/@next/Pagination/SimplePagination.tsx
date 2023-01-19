import React from 'react';
import { Typography } from '../Typography';
import { PageButton } from './PageButton';
import { StyledNav, StyledSimplePaginationButton } from './PaginationStyle';
import {
  defaultPageSize,
  getAllPages,
  PaginationProps,
} from './paginationUtils';
import { NextStepper, PreviousStepper } from './Stepper';

export const SimplePagination = ({
  totalItems = 1,
  currentPage = 1,
  disabled,
  pageSize = defaultPageSize,
  onPageChanged,
}: PaginationProps) => {
  const totalPages = getAllPages(pageSize, totalItems);
  const hasPrevious = currentPage - 1 > 0;
  const hasNext = currentPage + 1 <= totalPages;

  const handlePagerClick = (value: number) => {
    if (value < 1 || value > totalPages) {
      return;
    }
    onPageChanged?.(value);
  };

  return (
    <StyledNav>
      <PreviousStepper
        value={currentPage - 1}
        disabled={!hasPrevious}
        onClick={handlePagerClick}
      />
      <PageButton
        value={currentPage}
        disabled={disabled}
        onClick={handlePagerClick}
        active={true}
      />
      <StyledSimplePaginationButton>
        <Typography as="div" variant="body1">
          /
        </Typography>
      </StyledSimplePaginationButton>
      <StyledSimplePaginationButton>
        <Typography as="div" variant="body1">
          {totalPages}
        </Typography>
      </StyledSimplePaginationButton>
      <NextStepper
        value={currentPage + 1}
        disabled={!hasNext}
        onClick={handlePagerClick}
      />
    </StyledNav>
  );
};
