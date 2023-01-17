import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Avatar, AvatarProps } from './Avatar';

export default {
  title: '@next/Avatar',
  component: Avatar,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
  argTypes: {},
} as Meta;

const Template: Story<AvatarProps> = args => <Avatar {...args} />;

export const Interactive = Template.bind({});
Interactive.args = {
  initials: 'HE',
};
