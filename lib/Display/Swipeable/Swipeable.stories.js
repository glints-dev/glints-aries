"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.Default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Swipeable = require("./Swipeable");

var _SwipeableStyle = require("./SwipeableStyle");

var _default = {
  title: 'Display/Swipeable',
  component: _Swipeable.Swipeable,
  argTypes: {
    className: {
      table: {
        disable: true
      }
    }
  }
};
exports["default"] = _default;

var Template = function Template(_ref) {
  var args = (0, _extends2["default"])({}, _ref);
  return /*#__PURE__*/_react["default"].createElement(_Swipeable.Swipeable, args, Array.from(Array(10).keys()).map(function (number) {
    return /*#__PURE__*/_react["default"].createElement(_Swipeable.Swipeable.Item, {
      key: number
    }, /*#__PURE__*/_react["default"].createElement(_SwipeableStyle.SwipeableCardExample, null, /*#__PURE__*/_react["default"].createElement("h1", null, "Card. ", number)));
  }));
};

var Default = Template.bind({});
exports.Default = Default;