"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.TextFieldWithStartIcon = exports.TextFieldWithEndIcon = exports.TextFieldWithClearIcon = exports.PasswordField = exports.Interactive = exports.Disabled = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _TextField = require("./TextField");

var _GlintsContainer = require("../../Layout/GlintsContainer/GlintsContainer");

var _SearchIcon = _interopRequireDefault(require("../../General/Icon/components/SearchIcon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  title: 'Input/TextField',
  component: _TextField.TextField,
  decorators: [function (Story) {
    return /*#__PURE__*/_react["default"].createElement(_GlintsContainer.BaseContainer, null, Story());
  }]
};
exports["default"] = _default;

var Template = function Template(args) {
  var _useState = (0, _react.useState)(''),
      textValue = _useState[0],
      setTextValue = _useState[1];

  return /*#__PURE__*/_react["default"].createElement(_TextField.TextField, (0, _extends2["default"])({
    value: textValue,
    onChange: function onChange(e) {
      return setTextValue(e.target.value);
    }
  }, args));
};

var Interactive = Template.bind({});
exports.Interactive = Interactive;
Interactive.args = {
  label: 'Description',
  type: 'text'
};
var TextFieldWithClearIcon = Template.bind({});
exports.TextFieldWithClearIcon = TextFieldWithClearIcon;
TextFieldWithClearIcon.args = {
  label: 'Description',
  allowClear: true,
  type: 'text'
};
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = {
  label: 'Description',
  type: 'text',
  disabled: true
};
var TextFieldWithStartIcon = Template.bind({});
exports.TextFieldWithStartIcon = TextFieldWithStartIcon;
TextFieldWithStartIcon.args = {
  label: 'Description',
  type: 'text',
  startIcon: /*#__PURE__*/_react["default"].createElement(_SearchIcon["default"], null)
};
var TextFieldWithEndIcon = Template.bind({});
exports.TextFieldWithEndIcon = TextFieldWithEndIcon;
TextFieldWithEndIcon.args = {
  label: 'Description',
  type: 'text',
  endIcon: /*#__PURE__*/_react["default"].createElement(_SearchIcon["default"], null)
};
var PasswordField = Template.bind({});
exports.PasswordField = PasswordField;
PasswordField.args = {
  label: 'Description',
  type: 'password'
};