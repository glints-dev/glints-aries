"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.WithHtmlContent = exports.Interactive = exports.DifferentPosition = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Tooltip = require("./Tooltip");

var _GlintsContainer = require("../../Layout/GlintsContainer/GlintsContainer");

var _BasicTag = _interopRequireDefault(require("../../General/Tag/BasicTag"));

var _excluded = ["text"],
    _excluded2 = ["text"];
var Container = (0, _styledComponents["default"])(_GlintsContainer.BaseContainer).withConfig({
  displayName: "Tooltipstories__Container",
  componentId: "sc-qjslxe-0"
})(["width:100%;height:150px;display:flex;align-items:center;justify-content:center;"]);
var defaultText = 'Lorem Ipsum';
var _default = {
  title: 'General/Tooltip',
  component: _Tooltip.Tooltip,
  decorators: [function (Story) {
    return /*#__PURE__*/_react["default"].createElement(Container, null, Story());
  }]
};
exports["default"] = _default;

var StringTooltipTemplate = function StringTooltipTemplate(_ref) {
  var text = _ref.text,
      args = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_Tooltip.Tooltip, (0, _extends2["default"])({}, args, {
    text: text || defaultText
  }), /*#__PURE__*/_react["default"].createElement(_BasicTag["default"], null, "Glints Aries"));
};

var HtmlTooltipTemplate = function HtmlTooltipTemplate(_ref2) {
  var text = _ref2.text,
      args = (0, _objectWithoutPropertiesLoose2["default"])(_ref2, _excluded2);
  return /*#__PURE__*/_react["default"].createElement(_Tooltip.Tooltip, (0, _extends2["default"])({}, args, {
    text: text || defaultText
  }), /*#__PURE__*/_react["default"].createElement(_BasicTag["default"], null, "Glints Aries"));
};

var Interactive = StringTooltipTemplate.bind({});
exports.Interactive = Interactive;
Interactive.args = {
  text: defaultText,
  position: 'top'
};
var DifferentPosition = StringTooltipTemplate.bind({});
exports.DifferentPosition = DifferentPosition;
DifferentPosition.args = {
  position: 'left'
};
var WithHtmlContent = HtmlTooltipTemplate.bind({});
exports.WithHtmlContent = WithHtmlContent;
WithHtmlContent.args = {
  text: /*#__PURE__*/_react["default"].createElement("b", null, "Hello World"),
  textAsString: 'Hello World'
};