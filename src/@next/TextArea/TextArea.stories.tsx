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
  rows: 3,
  maxLength: 60,
};

const WithPopulatedValueTemplate: Story<TextAreaProps> = args => {
  const defaultValue =
    'The quick brown fox jumps over the lazy dog and finds a hidden treasure in the deep forest.';
  const [value, setValue] = useState<string>(defaultValue);

  return (
    <>
      <TextArea {...args} value={value} onChange={val => setValue(val)} />
    </>
  );
};
export const WithPopulatedValue = WithPopulatedValueTemplate.bind({});
WithPopulatedValue.args = {
  placeholder: 'Please enter...',
  rows: 3,
  maxLength: 120,
  disabled: false,
  error: false,
};
