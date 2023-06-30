export type PaginationProps = {
  /** Total items to be displayed, must be positive integer and above 0 */
  totalItems: number;
  /** Current page, must be positive integer and above 0 */
  currentPage?: number;
  /** Size of a page, must be positive integer and above 0 */
  pageSize?: number;
  disabled?: boolean;
  onPageChanged?: (currentPage: number) => void;
};

export type SimplifiedPaginationProps = {
  disabled?: boolean;
  onPageChanged?: () => void;
};

export const defaultPageSize = 10;
export const defaultBufferSize = 2;

export const getAllPages = (pageSize: number, total: number) => {
  if (pageSize < 1) {
    console.warn('pageSize must be above 0');
    return 0;
  }
  return Math.ceil(total / pageSize);
};
export const getBufferSize = (bufferSize: number, allPages: number) => {
  const min = 0;
  const max = Math.floor(allPages / 2) - 1;
  const newBufferSize = Math.max(bufferSize, min);
  return Math.min(newBufferSize, max);
};
