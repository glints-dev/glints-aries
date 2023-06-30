import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { SimplifiedPaginationProps } from './paginationUtils';
import { PaginationWithoutNumber } from './PaginationWithoutNumber';

(
  PaginationWithoutNumber as React.FunctionComponent<SimplifiedPaginationProps>
).displayName = 'Pagination';

export default {
  title: '@next/PaginationWithoutNumber',
  component: PaginationWithoutNumber,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<SimplifiedPaginationProps> = args => {
  return <PaginationWithoutNumber {...args} />;
};

export const Interactive = Template.bind({});
Interactive.parameters = {
  docs: {
    source: {
      code: `return <PaginationWithoutNumber />;`,
      language: 'javascript',
      type: 'auto',
    },
  },
};
