import React from 'react';
import { StyledNav } from './PaginationStyle';
import { NextStepper, PreviousStepper } from './Stepper';
import { SimplifiedPaginationProps } from './paginationUtils';

export const PaginationWithoutNumber = React.forwardRef<
  HTMLElement,
  SimplifiedPaginationProps
>(function PaginationWithoutNumber(
  { disabled, onPageChanged }: SimplifiedPaginationProps,
  ref
) {
  const pageList: React.ReactNode[] = [];

  pageList.unshift(
    <PreviousStepper
      key="prev-stepper"
      disabled={disabled}
      onClick={onPageChanged}
    />
  );
  pageList.push(
    <NextStepper
      key="next-stepper"
      disabled={disabled}
      onClick={onPageChanged}
    />
  );

  return <StyledNav ref={ref}>{pageList}</StyledNav>;
});
