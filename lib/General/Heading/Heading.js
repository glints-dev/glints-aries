"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.Heading = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _HeadingStyle = require("./HeadingStyle");

var _excluded = ["className", "inline", "children", "uppercaseText"];

var Heading = function Heading(props) {
  var className = props.className,
      _props$inline = props.inline,
      inline = _props$inline === void 0 ? false : _props$inline,
      children = props.children,
      _props$uppercaseText = props.uppercaseText,
      uppercaseText = _props$uppercaseText === void 0 ? false : _props$uppercaseText,
      defaultProps = (0, _objectWithoutPropertiesLoose2["default"])(props, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_HeadingStyle.HeadingContainer, (0, _extends2["default"])({
    role: "heading",
    className: (0, _classnames["default"])('aries-heading', className),
    inline: inline,
    uppercaseText: uppercaseText
  }, defaultProps), /*#__PURE__*/_react["default"].createElement("span", {
    className: "heading-text"
  }, children));
};

exports.Heading = Heading;
var _default = Heading;
exports["default"] = _default;