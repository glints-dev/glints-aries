import { Meta, Story } from '@storybook/react';
import React from 'react';

import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Skeleton, SkeletonProps } from './Skeleton';

(Skeleton as React.FunctionComponent<SkeletonProps>).displayName = 'Skeleton';

export default {
  title: '@next/Skeleton',
  component: Skeleton,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<SkeletonProps> = args => {
  return <Skeleton {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  text: {
    rows: 5,
    width: ['50%', '45%', '800px', '100%', '90%'],
    variant: ['headline1', 'headline3', 'body1', 'subtitle2', 'overline'],
  },
};
