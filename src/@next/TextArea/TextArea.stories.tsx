import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { TextArea } from './TextArea';
import { TextAreaProps } from './TextArea';

export default {
  title: '@next/TextArea',
  component: TextArea,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
  argTypes: {},
} as Meta;

const Template: Story<TextAreaProps> = args => {
  const [value, setValue] = useState<string>('');

  return (
    <>
      <TextArea {...args} value={value} onChange={val => setValue(val)} />
    </>
  );
};
export const Interactive = Template.bind({});
Interactive.args = {
  placeholder: 'Please enter...',
  disabled: false,
  error: false,
  rows: 3,
  maxLength: 0,
  width: '520px',
};
