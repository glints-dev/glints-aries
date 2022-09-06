"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.Interactive = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Popover = _interopRequireDefault(require("./Popover"));

var _GlintsContainer = require("../../Layout/GlintsContainer/GlintsContainer");

var _ProfilePicture = _interopRequireDefault(require("../../General/ProfilePicture"));

var _PointingModal = _interopRequireDefault(require("../PointingModal"));

var _default = {
  title: 'Display/Popover',
  component: _Popover["default"],
  decorators: [function (Story) {
    return /*#__PURE__*/_react["default"].createElement(_GlintsContainer.BaseContainer, null, Story());
  }],
  argTypes: {
    className: {
      table: {
        disable: true
      }
    },
    content: {
      control: {
        type: null
      }
    }
  }
};
exports["default"] = _default;

var Template = function Template(_ref) {
  var args = (0, _extends2["default"])({}, _ref);
  return /*#__PURE__*/_react["default"].createElement(_Popover["default"], args, /*#__PURE__*/_react["default"].createElement(_ProfilePicture["default"], null, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&h=500&q=80",
    alt: "Profile Picture"
  })));
};

var Interactive = Template.bind({});
exports.Interactive = Interactive;
Interactive.args = {
  content: /*#__PURE__*/_react["default"].createElement(_PointingModal["default"], null, /*#__PURE__*/_react["default"].createElement("span", null, "Hello World"))
};