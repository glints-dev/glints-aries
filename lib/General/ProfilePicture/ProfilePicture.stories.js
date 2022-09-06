"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.ShowEditIconOnHover = exports.Interactive = void 0;

var _react = _interopRequireDefault(require("react"));

var _ProfilePicture = _interopRequireDefault(require("./ProfilePicture"));

var _default = {
  title: 'General/ProfilePicture',
  component: _ProfilePicture["default"]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_ProfilePicture["default"], args, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://images.unsplash.com/photo-1537530360953-3b8b369e01fe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ecc5073c4eb34e6c480e32b48e6208db&auto=format&fit=crop&w=750&q=80",
    alt: "Ying Cong"
  }));
};

var Interactive = Template.bind({});
exports.Interactive = Interactive;
var ShowEditIconOnHover = Template.bind({});
exports.ShowEditIconOnHover = ShowEditIconOnHover;
ShowEditIconOnHover.args = {
  editable: true
};