import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Flex } from './index';
import { FlexProps } from './types';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import * as S from './FlexStoryStyle';

export default {
  title: 'Layout/Flex',
  component: Flex,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<FlexProps> = args => (
  <S.Flex {...args}>
    <S.Item>1</S.Item>
    <S.Item>2</S.Item>
    <S.Item>3</S.Item>
  </S.Flex>
);

export const Interactive = Template.bind({});
