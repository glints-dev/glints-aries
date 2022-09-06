import _extends from "@babel/runtime/helpers/extends";
import React, { useState } from 'react';
import { TextField } from './TextField';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import SearchIcon from '../../General/Icon/components/SearchIcon';
export default {
  title: 'Input/TextField',
  component: TextField,
  decorators: [function (Story) {
    return /*#__PURE__*/React.createElement(BaseContainer, null, Story());
  }]
};

var Template = function Template(args) {
  var _useState = useState(''),
      textValue = _useState[0],
      setTextValue = _useState[1];

  return /*#__PURE__*/React.createElement(TextField, _extends({
    value: textValue,
    onChange: function onChange(e) {
      return setTextValue(e.target.value);
    }
  }, args));
};

export var Interactive = Template.bind({});
Interactive.args = {
  label: 'Description',
  type: 'text'
};
export var TextFieldWithClearIcon = Template.bind({});
TextFieldWithClearIcon.args = {
  label: 'Description',
  allowClear: true,
  type: 'text'
};
export var Disabled = Template.bind({});
Disabled.args = {
  label: 'Description',
  type: 'text',
  disabled: true
};
export var TextFieldWithStartIcon = Template.bind({});
TextFieldWithStartIcon.args = {
  label: 'Description',
  type: 'text',
  startIcon: /*#__PURE__*/React.createElement(SearchIcon, null)
};
export var TextFieldWithEndIcon = Template.bind({});
TextFieldWithEndIcon.args = {
  label: 'Description',
  type: 'text',
  endIcon: /*#__PURE__*/React.createElement(SearchIcon, null)
};
export var PasswordField = Template.bind({});
PasswordField.args = {
  label: 'Description',
  type: 'password'
};