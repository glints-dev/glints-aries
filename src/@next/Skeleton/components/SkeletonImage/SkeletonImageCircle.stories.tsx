import { Meta, Story } from '@storybook/react';
import React from 'react';

import { BaseContainer } from '../../../../Layout/GlintsContainer/GlintsContainer';
import {
  SkeletonImageCircle,
  SkeletonImageCircleProps,
} from './SkeletonImageCircle';

(
  SkeletonImageCircle as React.FunctionComponent<SkeletonImageCircleProps>
).displayName = 'Skeleton';

export default {
  title: '@next/SkeletonImageCircle',
  component: SkeletonImageCircle,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<SkeletonImageCircleProps> = args => {
  return <SkeletonImageCircle {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  size: '48px',
};
