import React, { useState } from 'react';
import { Typography } from '../Typography';
import {
  StyledActiveSimplePaginationButton,
  StyledSimplePaginationInput,
  StyledSimplePaginationButton,
  SimplePaginationStyledNav,
} from './PaginationStyle';
import {
  defaultPageSize,
  getAllPages,
  PaginationProps,
} from './paginationUtils';
import { NextStepper, PreviousStepper } from './Stepper';

export const SimplePagination = React.forwardRef<HTMLElement, PaginationProps>(
  function SimplePagination(
    {
      totalItems = 1,
      currentPage = 1,
      disabled,
      pageSize = defaultPageSize,
      onPageChanged,
    }: PaginationProps,
    ref
  ) {
    const [editMode, setEditMode] = useState(false);

    const totalPages = getAllPages(pageSize, totalItems);
    const hasPrevious = currentPage - 1 > 0;
    const hasNext = currentPage + 1 <= totalPages;

    const handlePageNumberChange = (value: number) => {
      let page = value;
      if (value < 1) {
        page = 1;
      }
      if (value > totalPages) {
        page = totalPages;
      }
      onPageChanged?.(page);
    };

    const handleEditMode = () => {
      if (editMode) {
        return;
      }
      setEditMode(true);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      e.target.select();
    };

    return (
      <SimplePaginationStyledNav ref={ref}>
        <PreviousStepper
          value={currentPage - 1}
          disabled={!hasPrevious || disabled}
          onClick={handlePageNumberChange}
        />
        <div data-testid="current-page-btn" onClick={handleEditMode}>
          {!editMode && (
            <StyledActiveSimplePaginationButton
              value={currentPage}
              disabled={disabled}
              onClick={handlePageNumberChange}
            >
              <Typography as="div" variant="body1">
                {currentPage}
              </Typography>
            </StyledActiveSimplePaginationButton>
          )}
          {editMode && (
            <StyledSimplePaginationInput
              data-testid="current-page-input"
              autoFocus
              onFocus={handleFocus}
              onChange={e => {
                handlePageNumberChange(Number(e.currentTarget.value));
              }}
              onBlur={() => setEditMode(false)}
              value={currentPage}
            />
          )}
        </div>
        <StyledSimplePaginationButton disabled={disabled}>
          <Typography as="div" variant="body1">
            /
          </Typography>
        </StyledSimplePaginationButton>
        <StyledSimplePaginationButton disabled={disabled}>
          <Typography as="div" variant="body1">
            {totalPages}
          </Typography>
        </StyledSimplePaginationButton>
        <NextStepper
          value={currentPage + 1}
          disabled={!hasNext || disabled}
          onClick={handlePageNumberChange}
        />
      </SimplePaginationStyledNav>
    );
  }
);
