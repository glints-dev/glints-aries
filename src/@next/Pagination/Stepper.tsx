import React from 'react';
import { Icon } from '../Icon';
import { PageButton, PageButtonProps } from './PageButton';

export const PreviousStepper = (props: Partial<PageButtonProps>) => {
  return (
    <PageButton data-testid="previous-page" {...props}>
      <Icon name="ri-arrow-m-left-line" />
    </PageButton>
  );
};

export const NextStepper = (props: Partial<PageButtonProps>) => {
  return (
    <PageButton data-testid="next-page" {...props}>
      <Icon name="ri-arrow-m-right-line" />
    </PageButton>
  );
};
