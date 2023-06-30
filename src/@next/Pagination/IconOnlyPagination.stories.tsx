import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { IconOnlyPaginationProps } from './paginationUtils';
import { IconOnlyPagination } from './IconOnlyPagination';

(
  IconOnlyPagination as React.FunctionComponent<IconOnlyPaginationProps>
).displayName = 'Pagination';

export default {
  title: '@next/IconOnlyPagination',
  component: IconOnlyPagination,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<IconOnlyPaginationProps> = args => {
  return <IconOnlyPagination {...args} />;
};

export const Interactive = Template.bind({});
Interactive.parameters = {
  docs: {
    source: {
      code: `return <IconOnlyPagination />;`,
      language: 'javascript',
      type: 'auto',
    },
  },
};
