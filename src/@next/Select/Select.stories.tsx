import { Meta, Story } from '@storybook/react';
import React from 'react';

import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { InlineError } from '../InlineError';
import { Select, SelectProps } from './Select';

(Select as React.FunctionComponent<SelectProps>).displayName = 'Select';

export default {
  title: '@next/Select',
  component: Select,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const options = ['Product Designer', 'UI/UX Designer'];

const Template: Story<SelectProps> = args => {
  return (
    <Select {...args} style={{ width: '200px' }} options={options}>
      Select
    </Select>
  );
};

export const Interactive = Template.bind({});

Interactive.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  helpText: 'Help text',
};

const WithInlineErrorTemplate: Story<SelectProps> = args => {
  return <Select {...args} style={{ width: '200px' }} options={options} />;
};

export const WithInlineError = WithInlineErrorTemplate.bind({});
WithInlineError.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  helpText: <InlineError text="Error message" />,
  hasError: true,
};
