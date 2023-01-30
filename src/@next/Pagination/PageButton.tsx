import React from 'react';
import { Typography } from '../Typography';
import { StyledPageButton } from './PaginationStyle';

export interface PageButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  children?: React.ReactNode;
  value?: number;
  active?: boolean;
  onClick?: (page: number) => void;
}

export const PageButton = ({
  value,
  active,
  children,
  onClick,
  ...props
}: PageButtonProps) => {
  const content = children ? children : value;
  return (
    <StyledPageButton
      data-active={active}
      onClick={() => onClick?.(value)}
      {...props}
    >
      <Typography as="div" variant="body1">
        {content}
      </Typography>
    </StyledPageButton>
  );
};
