import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { CurrencyInputProps, CurrencyInput } from './CurrencyInput';

(CurrencyInput as React.FunctionComponent<CurrencyInputProps>).displayName =
  'Currency';

export default {
  title: '@next/CurrencyInput',
  component: CurrencyInput,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
  argTypes: {},
} as Meta;

const Template: Story<CurrencyInputProps> = args => <CurrencyInput {...args} />;

export const Interactive = Template.bind({});
Interactive.args = {
  placeholder: '0.0',
  disabled: false,
  locale: 'en',
  value: 10000,
  onChange: (value: number) => {
    console.log('Currency on changed value: ', value);
  },
  prefix: '$',
};
