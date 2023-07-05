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
  {
    label,
    disableNext,
    disablePrevious,
    onNext,
    onPrevious,
  }: IconPaginationProps,
  ref
) {
  return (
    <IconPaginationStyledNav ref={ref}>
      <StyledBorderPaginationButton
        data-testid="previous-page"
        disabled={disablePrevious}
        onClick={onPrevious}
      >
        <Icon name="ri-arrow-m-left-line" />
      </StyledBorderPaginationButton>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledBorderPaginationButton
        data-testid="next-page"
        disabled={disableNext}
        onClick={onNext}
      >
        <Icon name="ri-arrow-m-right-line" />
      </StyledBorderPaginationButton>
    </IconPaginationStyledNav>
  );
});
