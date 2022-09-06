"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.SmallRadioButton = exports.RadioButtonWithError = exports.RadioButtonWithBorder = exports.Interactive = exports.DisabledRadioButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _RadioButton = require("./RadioButton");

var _GlintsContainer = require("../../Layout/GlintsContainer/GlintsContainer");

var _default = {
  title: 'Input/RadioButton',
  component: _RadioButton.RadioButton,
  decorators: [function (Story) {
    return /*#__PURE__*/_react["default"].createElement(_GlintsContainer.BaseContainer, null, Story());
  }]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_RadioButton.RadioButton, args);
};

var Interactive = Template.bind({});
exports.Interactive = Interactive;
Interactive.args = {
  label: 'Radio Button',
  name: 'default'
};
var RadioButtonWithError = Template.bind({});
exports.RadioButtonWithError = RadioButtonWithError;
RadioButtonWithError.args = {
  label: 'Radio Button With Error',
  name: 'default',
  error: true
};
var RadioButtonWithBorder = Template.bind({});
exports.RadioButtonWithBorder = RadioButtonWithBorder;
RadioButtonWithBorder.args = {
  label: 'Radio Button With Border',
  name: 'default',
  border: true
};
var DisabledRadioButton = Template.bind({});
exports.DisabledRadioButton = DisabledRadioButton;
DisabledRadioButton.args = {
  label: 'Disabled Radio Button',
  name: 'default',
  disabled: true
};
var SmallRadioButton = Template.bind({});
exports.SmallRadioButton = SmallRadioButton;
SmallRadioButton.args = {
  label: 'Small Radio Button',
  name: 'default',
  size: 'small'
};