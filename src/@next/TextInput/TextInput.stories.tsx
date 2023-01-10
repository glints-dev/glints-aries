import React from 'react';
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

const WithIconsTemplate: Story<TextInputProps> = args => (
  <TextInput {...args} />
);
export const WithPrefixAndSuffix = WithIconsTemplate.bind({});
WithPrefixAndSuffix.args = {
  placeholder: 'Placeholder',
  prefix: <Icon name="ri-search" />,
  suffix: <div>2/20</div>,
  value: 'Hi',
  disabled: false,
};
