"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.Interactive = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _Collapsible = require("./Collapsible");

var _GlintsContainer = require("../../Layout/GlintsContainer/GlintsContainer");

var _excluded = ["children"];
var _default = {
  title: 'Display/Collapsible',
  component: _Collapsible.Collapsible,
  decorators: [function (Story) {
    return /*#__PURE__*/_react["default"].createElement(_GlintsContainer.BaseContainer, null, Story());
  }]
};
exports["default"] = _default;
var defaultText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

var Template = function Template(_ref) {
  var children = _ref.children,
      args = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_Collapsible.Collapsible, args, children || defaultText);
};

var Interactive = Template.bind({});
exports.Interactive = Interactive;
Interactive.args = {
  label: 'Lorem Ipsum',
  children: defaultText,
  isOpen: true
};