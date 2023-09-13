import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import {
  AuthenticationInput,
  AuthenticationInputProps,
} from './AuthenticationInput';

export default {
  title: '@next/AuthenticationInput',
  component: AuthenticationInput,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
  argTypes: {},
} as Meta;

const Template: Story<AuthenticationInputProps> = args => {
  const handleChange = (value: string) => {
    console.log({ value });
  };

  return <AuthenticationInput {...args} onChange={handleChange} />;
};

export const Interactive = Template.bind({});
Interactive.args = {};
