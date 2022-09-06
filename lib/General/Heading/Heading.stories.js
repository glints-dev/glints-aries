"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.Interactive = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _Heading = require("./Heading");

var _GlintsContainer = require("../../Layout/GlintsContainer/GlintsContainer");

var _excluded = ["children"];
var _default = {
  title: 'General/Heading',
  component: _Heading.Heading,
  decorators: [function (Story) {
    return /*#__PURE__*/_react["default"].createElement(_GlintsContainer.BaseContainer, null, Story());
  }]
};
exports["default"] = _default;

var Template = function Template(_ref) {
  var children = _ref.children,
      args = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_Heading.Heading, args, children || 'Glints Aries');
};

var Interactive = Template.bind({});
exports.Interactive = Interactive;
Interactive.args = {
  children: 'Glints Aries'
};