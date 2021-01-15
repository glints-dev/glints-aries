import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Box } from './index';
import { BoxProps } from './types';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import * as S from './BoxStoryStyle';

export default {
  title: 'Layout/Box',
  component: Box,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<BoxProps> = args => (
  <S.GreyBackground>
    <S.Box {...args}>
      <S.Content>Content</S.Content>
    </S.Box>
  </S.GreyBackground>
);

export const Interactive = Template.bind({});
Interactive.args = {
  p: 32,
  m: 64,
};
