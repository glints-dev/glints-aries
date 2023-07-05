import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { IconPaginationProps } from './paginationUtils';
import { IconPagination } from './IconPagination';
import { Typography } from '../Typography';
import { Neutral } from '../utilities/colors';

(IconPagination as React.FunctionComponent<IconPaginationProps>).displayName =
  'Pagination';

export default {
  title: '@next/IconPagination',
  component: IconPagination,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<IconPaginationProps> = args => {
  return <IconPagination {...args} />;
};

export const Interactive = Template.bind({});
Interactive.args = {};

const WithLabelTemplate: Story<IconPaginationProps> = args => {
  return <IconPagination {...args} />;
};

export const WithLabel = WithLabelTemplate.bind({});
WithLabel.args = {
  label: (
    <Typography as="div" variant="caption" color={Neutral.B18}>
      Label
    </Typography>
  ),
};
