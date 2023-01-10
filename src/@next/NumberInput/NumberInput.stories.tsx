import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { NumberInputProps, NumberInput } from './NumberInput';

(NumberInput as React.FunctionComponent<NumberInputProps>).displayName =
  'Number';

export default {
  title: '@next/NumberInput',
  component: NumberInput,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
  argTypes: {},
} as Meta;

const Template: Story<NumberInputProps> = args => <NumberInput {...args} />;

export const Interactive = Template.bind({});
Interactive.args = {
  placeholder: '0.0',
  disabled: false,
};
