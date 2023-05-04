import React from 'react';
import { Story, Meta } from '@storybook/react';

import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { EmptyState, EmptyStateProps } from './EmptyState';

(EmptyState as React.FunctionComponent<EmptyStateProps>).displayName =
  'Empty State';

export default {
  title: '@next/EmptyState',
  component: EmptyState,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<EmptyStateProps> = args => {
  return <EmptyState {...args} />;
};

const primaryButtonAction = { label: 'Primary Button' };
const basicButtonAction = { label: 'Basic Button' };

export const Interactive = Template.bind({});
Interactive.args = {
  imageName: 'empty-carton',
  title: 'Title',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis scelerisque dui sed pharetra.',
  basicButtonAction,
  primaryButtonAction,
  helpText:
    'Morbi gravida, neque at accumsan tempus, ante ante pulvinar lacus, eget tempor nisl libero eu metus.',
};

const WithLeastInfoTemplate: Story<EmptyStateProps> = args => {
  return <EmptyState {...args} />;
};

export const WithLeastInfo = WithLeastInfoTemplate.bind({});
WithLeastInfo.args = {
  title: 'Title',
  primaryButtonAction,
};

const WithPrimaryButtonOnlyTemplate: Story<EmptyStateProps> = args => {
  return <EmptyState {...args} />;
};

export const WithPrimaryButtonOnly = WithPrimaryButtonOnlyTemplate.bind({});
WithPrimaryButtonOnly.args = {
  title: 'Title',
  description: 'Lorem ipsum dolor sit amet',
  primaryButtonAction,
};

const WithBasicButtonOnlyTemplate: Story<EmptyStateProps> = args => {
  return <EmptyState {...args} />;
};

export const WithBasicButtonOnly = WithBasicButtonOnlyTemplate.bind({});
WithBasicButtonOnly.args = {
  imageName: 'empty-carton',
  title: 'Title',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis scelerisque dui sed pharetra.',
  basicButtonAction,
  helpText:
    'Morbi gravida, neque at accumsan tempus, ante ante pulvinar lacus, eget tempor nisl libero eu metus.',
};
