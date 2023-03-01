import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { TextInputProps, TextInput } from './TextInput';
import { Icon } from '../Icon';

(TextInput as React.FunctionComponent<TextInputProps>).displayName = 'Text';

export default {
  title: '@next/TextInput',
  component: TextInput,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
  argTypes: {},
} as Meta;

const Template: Story<TextInputProps> = args => <TextInput {...args} />;
export const Interactive = Template.bind({});
Interactive.args = {
  placeholder: 'Placeholder',
  prefix: null,
  disabled: false,
};

const WithPrefixAndSuffixTemplate: Story<TextInputProps> = args => {
  const [value, setValue] = useState('Hi');

  return (
    <TextInput
      {...args}
      value={value}
      onChange={e => setValue(e.target.value)}
      suffix={<div>{value.length}/20</div>}
    />
  );
};

export const WithPrefixAndSuffix = WithPrefixAndSuffixTemplate.bind({});
WithPrefixAndSuffix.args = {
  placeholder: 'Placeholder',
  prefix: <Icon name="ri-search" />,
  disabled: false,
};
