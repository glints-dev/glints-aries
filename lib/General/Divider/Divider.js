"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.Divider = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _DividerStyle = require("./DividerStyle");

var _excluded = ["theme", "className"];

/**
 * Use className or style to change the divider's
 * height
 */
var Divider = function Divider(_ref) {
  var _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'default' : _ref$theme,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_DividerStyle.DividerContainer, (0, _extends2["default"])({}, props, {
    className: (0, _classnames["default"])('aries-divider', className),
    theme: theme
  }));
};

exports.Divider = Divider;
var _default = Divider;
exports["default"] = _default;