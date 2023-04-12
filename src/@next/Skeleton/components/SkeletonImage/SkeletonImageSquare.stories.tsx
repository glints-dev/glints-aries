import { Meta, Story } from '@storybook/react';
import React from 'react';

import { BaseContainer } from '../../../../Layout/GlintsContainer/GlintsContainer';
import {
  SkeletonImageSquare,
  SkeletonImageSquareProps,
} from './SkeletonImageSquare';

(
  SkeletonImageSquare as React.FunctionComponent<SkeletonImageSquareProps>
).displayName = 'Skeleton';

export default {
  title: '@next/SkeletonImageSquare',
  component: SkeletonImageSquare,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<SkeletonImageSquareProps> = args => {
  return <SkeletonImageSquare {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  height: '80px',
  width: '80px',
};

Default.parameters = {
  docs: {
    source: {
      code: `
      <SkeletonImageSquare height='80px' width='80px' />
      `,
    },
  },
};
