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
Default.args = {};
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
  rows: 5,
  width: ['50%', '45%', '800px', '100%', '90%'],
  variant: ['headline1', 'headline3', 'body1', 'subtitle2', 'overline'],
};
WithCustomRows.parameters = {
  docs: {
    source: {
      code: `
<SkeletonText
  rows={5}
  width={['50%', '45%', '800px', '100%', '90%']}
  variant={['headline1', 'headline3', 'body1', 'subtitle2', 'overline']}
/>
      `,
    },
  },
};
