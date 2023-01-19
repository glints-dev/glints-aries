import React from 'react';
import { Icon } from '../Icon';
import { PageButton, PageButtonProps } from './PageButton';

export const PreviousStepper = (props: Partial<PageButtonProps>) => {
  return (
    <PageButton {...props}>
      <Icon name="ri-arrow-m-left-fill" />
    </PageButton>
  );
};

export const NextStepper = (props: Partial<PageButtonProps>) => {
  return (
    <PageButton {...props}>
      <Icon name="ri-arrow-m-right-fill" />
    </PageButton>
  );
};
