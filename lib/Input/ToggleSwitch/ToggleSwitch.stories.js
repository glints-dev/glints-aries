"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.ToggleSwitchWithIcons = exports.ToggleSwitchInAnActiveState = exports.Interactive = void 0;

var _react = _interopRequireDefault(require("react"));

var _ToggleSwitch = require("./ToggleSwitch");

var _GlintsContainer = require("../../Layout/GlintsContainer/GlintsContainer");

var _EyeIcon = _interopRequireDefault(require("../../General/Icon/components/EyeIcon"));

var _EyeSlashedIcon = _interopRequireDefault(require("../../General/Icon/components/EyeSlashedIcon"));

var _default = {
  title: 'Input/ToggleSwitch',
  component: _ToggleSwitch.ToggleSwitch,
  decorators: [function (Story) {
    return /*#__PURE__*/_react["default"].createElement(_GlintsContainer.BaseContainer, null, Story());
  }]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_ToggleSwitch.ToggleSwitch, args);
};

var Interactive = Template.bind({});
exports.Interactive = Interactive;
Interactive.args = {
  defaultActive: false
};

var ToggleSwitchWithIcons = function ToggleSwitchWithIcons() {
  return /*#__PURE__*/_react["default"].createElement(_ToggleSwitch.ToggleSwitch, {
    defaultActive: false,
    iconOptions: {
      active: _EyeIcon["default"],
      inactive: _EyeSlashedIcon["default"]
    }
  });
};

exports.ToggleSwitchWithIcons = ToggleSwitchWithIcons;

var ToggleSwitchInAnActiveState = function ToggleSwitchInAnActiveState() {
  return /*#__PURE__*/_react["default"].createElement(_ToggleSwitch.ToggleSwitch, {
    active: true
  });
};

exports.ToggleSwitchInAnActiveState = ToggleSwitchInAnActiveState;