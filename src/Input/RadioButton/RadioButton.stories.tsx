import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Props, RadioButton } from './RadioButton';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';

export default {
  title: 'Input/RadioButton',
  component: RadioButton,
  decorators: [Story => <BaseContainer>{Story()}</BaseContainer>],
} as Meta;

const Template: Story<Props> = args => <RadioButton {...args} />;

export const Interactive = Template.bind({});
Interactive.args = {
  label: 'Radio Button',
  name: 'default',
};

export const RadioButtonWithError = Template.bind({});
RadioButtonWithError.args = {
  label: 'Radio Button With Error',
  name: 'default',
  error: true,
};

export const RadioButtonWithBorder = Template.bind({});
RadioButtonWithBorder.args = {
  label: 'Radio Button With Border',
  name: 'default',
  border: true,
};

export const DisabledRadioButton = Template.bind({});
DisabledRadioButton.args = {
  label: 'Disabled Radio Button',
  name: 'default',
  disabled: true,
};

export const SmallRadioButton = Template.bind({});
SmallRadioButton.args = {
  label: 'Small Radio Button',
  name: 'default',
  size: 'small',
};
