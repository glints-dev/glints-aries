"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.Interactive = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _PointingModal = _interopRequireDefault(require("./PointingModal"));

var _ProfilePicture = _interopRequireDefault(require("../../General/ProfilePicture"));

var _Divider = _interopRequireDefault(require("../../General/Divider"));

var _GlintsContainer = require("../../Layout/GlintsContainer/GlintsContainer");

var _default = {
  title: 'Display/PointingModal',
  component: _PointingModal["default"],
  decorators: [function (Story) {
    return /*#__PURE__*/_react["default"].createElement(_GlintsContainer.BaseContainer, null, Story());
  }]
};
exports["default"] = _default;

var Template = function Template(_ref) {
  var args = (0, _extends2["default"])({}, _ref);
  return /*#__PURE__*/_react["default"].createElement(_PointingModal["default"], args, /*#__PURE__*/_react["default"].createElement(_PointingModal["default"].Header, null, /*#__PURE__*/_react["default"].createElement(_ProfilePicture["default"], {
    editable: true
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&w=750&q=80",
    alt: "profile"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "aries-modal-profile"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Hello,"), /*#__PURE__*/_react["default"].createElement("a", {
    href: "."
  }, "Fredy Yanto"))), /*#__PURE__*/_react["default"].createElement(_Divider["default"], {
    theme: "grey"
  }), /*#__PURE__*/_react["default"].createElement(_PointingModal["default"].Body, null, /*#__PURE__*/_react["default"].createElement(_PointingModal["default"].Item, null, "View Profile"), /*#__PURE__*/_react["default"].createElement(_PointingModal["default"].Item, null, "Edit Profile"), /*#__PURE__*/_react["default"].createElement(_PointingModal["default"].Item, null, "Sign Out")), /*#__PURE__*/_react["default"].createElement(_PointingModal["default"].Footer, null, "Have a nice day"));
};

var Interactive = Template.bind({});
exports.Interactive = Interactive;
Interactive.args = {};