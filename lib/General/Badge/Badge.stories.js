"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.Variants = exports.Interactive = void 0;

var _react = _interopRequireDefault(require("react"));

var _Badge = require("./Badge");

var _GlintsContainer = require("../../Layout/GlintsContainer/GlintsContainer");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var BadgeStack = (0, _styledComponents["default"])('div').withConfig({
  displayName: "Badgestories__BadgeStack",
  componentId: "sc-imkkqn-0"
})(["display:flex;align-items:flex-start;"]);
var _default = {
  title: 'General/Badge',
  component: _Badge.Badge,
  decorators: [function (Story) {
    return /*#__PURE__*/_react["default"].createElement(_GlintsContainer.BaseContainer, null, Story());
  }]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_Badge.Badge, args);
};

var Interactive = Template.bind({});
exports.Interactive = Interactive;
Interactive.args = {
  label: 'hello'
};

var Variants = function Variants() {
  return /*#__PURE__*/_react["default"].createElement(BadgeStack, null, /*#__PURE__*/_react["default"].createElement(_Badge.Badge, {
    label: "4",
    variant: "default"
  }), /*#__PURE__*/_react["default"].createElement(_Badge.Badge, {
    label: "4",
    variant: "dimmed"
  }), /*#__PURE__*/_react["default"].createElement(_Badge.Badge, {
    label: "4",
    variant: "white"
  }), /*#__PURE__*/_react["default"].createElement(_Badge.Badge, {
    label: "4",
    variant: "blue"
  }));
};

exports.Variants = Variants;