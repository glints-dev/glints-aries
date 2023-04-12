import { Meta, Story } from '@storybook/react';
import React from 'react';

import { BaseContainer } from '../../../../Layout/GlintsContainer/GlintsContainer';
import { SkeletonText, SkeletonTextProps } from './SkeletonText';

(SkeletonText as React.FunctionComponent<SkeletonTextProps>).displayName =
  'Skeleton';

export default {
  title: '@next/SkeletonText',
  component: SkeletonText,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<SkeletonTextProps> = args => {
  return <SkeletonText {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  rows: [
    { width: '100%', variant: 'body1' },
    { width: '100%', variant: 'body1' },
    { width: '100%', variant: 'body1' },
    { width: '100%', variant: 'body1' },
  ],
};
Default.parameters = {
  docs: {
    source: {
      code: `
      <SkeletonText />
      `,
    },
  },
};

const WithCustomRowsTemplate: Story<SkeletonTextProps> = args => {
  return <SkeletonText {...args} />;
};

export const WithCustomRows = WithCustomRowsTemplate.bind({});
WithCustomRows.args = {
  rows: [
    { width: '50%', variant: 'headline1' },
    { width: '45%', variant: 'headline3' },
    { width: '800px', variant: 'body1' },
    { width: '100%', variant: 'subtitle2' },
    { width: '90%', variant: 'overline' },
  ],
};
WithCustomRows.parameters = {
  docs: {
    source: {
      code: `
      <SkeletonText
      rows={[
        { width: '50%', variant: 'headline1' },
        { width: '45%', variant: 'headline3' },
        { width: '800px', variant: 'body1' },
        { width: '100%', variant: 'subtitle2' },
        { width: '90%', variant: 'overline' },
      ]}
    />
      `,
    },
  },
};
