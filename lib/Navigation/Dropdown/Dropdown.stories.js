"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.HoverToOpen = exports.DropdownWithRightPlacement = exports.DropdownWithIconAndDefaultIconColour = exports.DropdownWithHoverLineEffect = exports.DropdownWithFullWidth = exports.DisabledDropdown = exports.Default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Dropdown = require("./Dropdown");

var _components = require("../../General/Icon/components");

var _default = {
  title: 'Navigation/Dropdown',
  component: _Dropdown.Dropdown,
  argTypes: {
    iconDefaultColor: {
      control: 'color'
    },
    leftIcon: {
      control: {
        type: 'select',
        options: {
          'Example: ArrowBackIcon': /*#__PURE__*/_react["default"].createElement(_components.ArrowNextIcon, null),
          'Example: ArrowNextDoubleIcon': /*#__PURE__*/_react["default"].createElement(_components.ArrowNextDoubleIcon, null)
        }
      }
    }
  }
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: '150px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Dropdown.Dropdown, (0, _extends2["default"])({
    label: "Career"
  }, args), /*#__PURE__*/_react["default"].createElement(_Dropdown.Dropdown.Item, {
    value: "pm"
  }, "Product Manager"), /*#__PURE__*/_react["default"].createElement(_Dropdown.Dropdown.Item, {
    value: "se"
  }, "Software Engineer")));
};

var Default = Template.bind({});
exports.Default = Default;
var HoverToOpen = Template.bind({});
exports.HoverToOpen = HoverToOpen;
HoverToOpen.args = {
  hoverToOpen: true
};
var DropdownWithIconAndDefaultIconColour = Template.bind({});
exports.DropdownWithIconAndDefaultIconColour = DropdownWithIconAndDefaultIconColour;
DropdownWithIconAndDefaultIconColour.args = {
  leftIcon: /*#__PURE__*/_react["default"].createElement(_components.InfoIcon, null),
  iconDefaultColor: 'red'
};
var DropdownWithHoverLineEffect = Template.bind({});
exports.DropdownWithHoverLineEffect = DropdownWithHoverLineEffect;
DropdownWithHoverLineEffect.args = {
  showHoverLine: true
};
var DropdownWithRightPlacement = Template.bind({});
exports.DropdownWithRightPlacement = DropdownWithRightPlacement;
DropdownWithRightPlacement.args = {
  dropDownPlacement: 'right'
};
var DropdownWithFullWidth = Template.bind({});
exports.DropdownWithFullWidth = DropdownWithFullWidth;
DropdownWithFullWidth.args = {
  showFullWidth: true
};
var DisabledDropdown = Template.bind({});
exports.DisabledDropdown = DisabledDropdown;
DisabledDropdown.args = {
  disabled: true
};