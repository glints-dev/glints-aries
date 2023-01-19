export type PaginationProps = {
  totalItems: number;
  currentPage?: number;
  pageSize?: number;
  disabled?: boolean;
  onPageChanged?: (currentPage: number) => void;
};

export const defaultPageSize = 10;
export const defaultBufferSize = 2;

export const getAllPages = (pageSize: number, total: number) => {
  return Math.ceil(total / pageSize);
};

export const getBufferSize = (bufferSize: number, allPages: number) => {
  const min = 0;
  const max = Math.floor(allPages / 2) - 1;
  const newBufferSize = Math.max(bufferSize, min);
  return Math.min(newBufferSize, max);
};
