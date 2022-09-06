"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.Loading = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _LoadingStyle = require("./LoadingStyle");

/** The loading spinner does not support resizing at the moment, but as a workaround you can use the className attribute to change it's styles manually. */
var Loading = function Loading(props) {
  var className = props.className;
  return /*#__PURE__*/_react["default"].createElement(_LoadingStyle.LoadingContainer, (0, _extends2["default"])({
    "data-testid": "alert"
  }, props, {
    className: (0, _classnames["default"])('aries-loading', className),
    role: "alert",
    "aria-busy": "true",
    "aria-live": "polite"
  }), /*#__PURE__*/_react["default"].createElement(_LoadingStyle.Spinner, null));
};

exports.Loading = Loading;
var _default = Loading;
exports["default"] = _default;