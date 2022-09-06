import React from 'react';
import { RadioButton } from './RadioButton';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
export default {
  title: 'Input/RadioButton',
  component: RadioButton,
  decorators: [function (Story) {
    return /*#__PURE__*/React.createElement(BaseContainer, null, Story());
  }]
};

var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(RadioButton, args);
};

export var Interactive = Template.bind({});
Interactive.args = {
  label: 'Radio Button',
  name: 'default'
};
export var RadioButtonWithError = Template.bind({});
RadioButtonWithError.args = {
  label: 'Radio Button With Error',
  name: 'default',
  error: true
};
export var RadioButtonWithBorder = Template.bind({});
RadioButtonWithBorder.args = {
  label: 'Radio Button With Border',
  name: 'default',
  border: true
};
export var DisabledRadioButton = Template.bind({});
DisabledRadioButton.args = {
  label: 'Disabled Radio Button',
  name: 'default',
  disabled: true
};
export var SmallRadioButton = Template.bind({});
SmallRadioButton.args = {
  label: 'Small Radio Button',
  name: 'default',
  size: 'small'
};