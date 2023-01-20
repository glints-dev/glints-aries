import React from 'react';
import { PageButtonProps, PageButton } from './PageButton';
import { StyledNav } from './PaginationStyle';
import {
  defaultBufferSize,
  defaultPageSize,
  getAllPages,
  getBufferSize,
  PaginationProps,
} from './paginationUtils';
import { NextStepper, PreviousStepper } from './Stepper';

export const Pagination = ({
  totalItems = 1,
  currentPage = 1,
  disabled,
  pageSize = defaultPageSize,
  onPageChanged,
}: PaginationProps) => {
  const pageList: React.ReactNode[] = [];

  const totalPages = getAllPages(pageSize, totalItems);
  const bufferSize = getBufferSize(defaultBufferSize, totalPages);
  const beginFoldPage = 1 + 2 + bufferSize;
  const endFoldPage = totalPages - 2 - bufferSize;

  const handlePagerClick = (value: number) => {
    if (value < 1 || value > totalPages) {
      return;
    }
    onPageChanged?.(value);
  };

  const Pager = ({ value, ...props }: Partial<PageButtonProps>) => (
    <PageButton
      {...props}
      value={value}
      onClick={handlePagerClick}
      disabled={disabled}
      active={currentPage === value}
    />
  );

  if (
    // beginPage(1 page) + bufferSize * 2 + endPage(1 page) + ...(2 pages)
    totalPages <= 4 + bufferSize * 2 ||
    (currentPage === beginFoldPage && currentPage === endFoldPage)
  ) {
    for (let i = 1; i <= totalPages; i++) {
      pageList.push(<Pager key={i} value={i} />);
    }
  } else {
    let left = 1;
    let right = totalPages;
    let hasJumpPre = true;
    let hasJumpNext = true;

    const calculateNextJumpPage = (jumpPage: number) => {
      const minCurrent = totalPages > 0 ? 1 : 0;
      const nextPage = Math.min(
        totalPages,
        Math.max(minCurrent, currentPage + jumpPage)
      );

      return nextPage;
    };

    // when first and last page not within reach from current page
    if (currentPage > beginFoldPage && currentPage < endFoldPage) {
      right = currentPage + bufferSize;
      left = currentPage - bufferSize;
      // first page is within reach from current page
    } else if (currentPage <= beginFoldPage) {
      hasJumpPre = false;
      left = 1;
      right = Math.max(beginFoldPage, bufferSize + currentPage);
      // last page within reach from current page
    } else if (currentPage >= endFoldPage) {
      hasJumpNext = false;
      right = totalPages;
      left = Math.min(endFoldPage, currentPage - bufferSize);
    }

    for (let i = left; i <= right; i++) {
      pageList.push(<Pager key={i} value={i} />);
    }
    const jumpPre = calculateNextJumpPage(-(bufferSize * 2 + 1));
    const jumpNext = calculateNextJumpPage(bufferSize * 2 + 1);

    const FirstPager = <Pager value={1} key={1} />;
    const LastPager = <Pager value={totalPages} key={totalPages} />;

    if (hasJumpPre) {
      pageList.unshift(
        <Pager key="jump-pre" value={jumpPre}>
          ...
        </Pager>
      );
      pageList.unshift(FirstPager);
    }

    if (hasJumpNext) {
      pageList.push(
        <Pager key="jump-next" value={jumpNext}>
          ...
        </Pager>
      );
      pageList.push(LastPager);
    }
  }
  const hasPrevious = currentPage - 1 > 0;
  const hasNext = currentPage + 1 <= totalPages;

  pageList.unshift(
    <PreviousStepper
      key="prev-stepper"
      value={currentPage - 1}
      disabled={!hasPrevious || disabled}
      onClick={handlePagerClick}
    />
  );
  pageList.push(
    <NextStepper
      key="next-stepper"
      value={currentPage + 1}
      disabled={!hasNext || disabled}
      onClick={handlePagerClick}
    />
  );

  return <StyledNav>{pageList}</StyledNav>;
};
