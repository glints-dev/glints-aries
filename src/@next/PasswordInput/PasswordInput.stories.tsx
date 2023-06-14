import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { PasswordInput, PasswordInputProps } from './PasswordInput';

(PasswordInput as React.FunctionComponent<PasswordInputProps>).displayName =
  'Password Input';

export default {
  title: '@next/PasswordInput',
  component: PasswordInput,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
  argTypes: {},
} as Meta;

const Template: Story<PasswordInputProps> = args => {
  const [password, setPassword] = useState('');

  return <PasswordInput {...args} value={password} onChange={setPassword} />;
};

export const Interactive = Template.bind({});
Interactive.args = {
  placeholder: 'Enter Password',
  disabled: false,
  error: false,
};
