import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { IconPaginationProps } from './paginationUtils';
import { IconPagination } from './IconPagination';
import { Typography } from '../Typography';

(IconPagination as React.FunctionComponent<IconPaginationProps>).displayName =
  'Pagination';

export default {
  title: '@next/IconOnlyPagination',
  component: IconPagination,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<IconPaginationProps> = args => {
  return <IconPagination {...args} />;
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

const WithLabelTemplate: Story<IconPaginationProps> = args => {
  return <IconPagination {...args} />;
};

export const WithLabel = WithLabelTemplate.bind({});
WithLabel.args = {
  label: (
    <Typography as="div" variant="caption">
      Label
    </Typography>
  ),
};
