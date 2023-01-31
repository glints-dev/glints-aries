import React, { useState } from 'react';

import { Story, Meta } from '@storybook/react';

import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { RadioButton, RadioButtonProps } from './RadioButton';
import { Typography } from '../Typography';

(RadioButton as React.FunctionComponent<RadioButtonProps>).displayName =
  'RadioButton';

export default {
  title: '@next/RadioButton',
  component: RadioButton,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story = args => {
  return <RadioButton {...args} />;
};

export const Interactive = Template.bind({});
Interactive.args = {
  label: 'Label',
  helperText: 'Helper Text',
  disabled: false,
  name: 'name',
  checked: false,
  value: 'value',
};

export const ControlledRadioButton = () => {
  const [value, setValue] = useState('1');

  return (
    <>
      <Typography variant="body1">Selected value: {value}</Typography>
      <RadioButton
        name="radio-name"
        label="Label 1"
        value="1"
        checked={value === '1'}
        onChange={e => setValue(e.target.value)}
      />
      <RadioButton
        name="radio-name"
        label="Label 2"
        value="2"
        checked={value === '2'}
        onChange={e => setValue(e.target.value)}
      />
      <RadioButton
        name="radio-name"
        label="Label 3"
        value="3"
        checked={value === '3'}
        onChange={e => setValue(e.target.value)}
      />
    </>
  );
};
