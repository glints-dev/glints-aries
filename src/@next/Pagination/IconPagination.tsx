import React from 'react';
import {
  IconPaginationStyledNav,
  StyledBorderPaginationButton,
  StyledLabel,
} from './PaginationStyle';
import { IconPaginationProps } from './paginationUtils';
import { Icon } from '../Icon';

export const IconPagination = React.forwardRef<
  HTMLElement,
  IconPaginationProps
>(function IconPagination(
  { label, hasNext, hasPrevious, onNext, onPrevious }: IconPaginationProps,
  ref
) {
  return (
    <IconPaginationStyledNav ref={ref}>
      <StyledBorderPaginationButton disabled={hasPrevious} onClick={onPrevious}>
        <Icon name="ri-arrow-m-left-line" />
      </StyledBorderPaginationButton>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledBorderPaginationButton disabled={hasNext} onClick={onNext}>
        <Icon name="ri-arrow-m-right-line" />
      </StyledBorderPaginationButton>
    </IconPaginationStyledNav>
  );
});
