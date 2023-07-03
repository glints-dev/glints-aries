import React from 'react';
import {
  IconOnlyPaginationStyledNav,
  StyledBorderPaginationButton,
  StyledLabel,
} from './PaginationStyle';
import { IconOnlyPaginationProps } from './paginationUtils';
import { Typography } from '../Typography';
import { Icon } from '../Icon';

export const IconOnlyPagination = React.forwardRef<
  HTMLElement,
  IconOnlyPaginationProps
>(function IconOnlyPagination(
  { label, hasNext, hasPrevious, onNext, onPrevious }: IconOnlyPaginationProps,
  ref
) {
  return (
    <IconOnlyPaginationStyledNav ref={ref}>
      <StyledBorderPaginationButton disabled={hasPrevious} onClick={onPrevious}>
        <Icon name="ri-arrow-m-left-line" />
      </StyledBorderPaginationButton>
      {label && (
        <StyledLabel>
          <Typography as="div" variant="body1">
            {label}
          </Typography>
        </StyledLabel>
      )}
      <StyledBorderPaginationButton disabled={hasNext} onClick={onNext}>
        <Icon name="ri-arrow-m-right-line" />
      </StyledBorderPaginationButton>
    </IconOnlyPaginationStyledNav>
  );
});
