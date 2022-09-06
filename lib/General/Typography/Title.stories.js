"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.Uppercase = exports.Tag = exports.Interactive = exports.Ellipsis = exports.Color = void 0;

var _react = _interopRequireDefault(require("react"));

var _Title = require("./Title");

var _GlintsContainer = require("../../Layout/GlintsContainer/GlintsContainer");

var _Colors = require("../../Utils/Colors");

_Title.Title.displayName = 'Typography.Title';
var _default = {
  title: 'Typography/Title',
  component: _Title.Title,
  decorators: [function (Story) {
    return /*#__PURE__*/_react["default"].createElement(_GlintsContainer.BaseContainer, null, Story());
  }],
  argTypes: {
    className: {
      table: {
        disable: true
      }
    },
    color: {
      control: 'color'
    },
    tag: {
      control: 'radio'
    }
  }
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_Title.Title, args, args.children || 'Glints Aries');
};

var Interactive = Template.bind({});
exports.Interactive = Interactive;
Interactive.args = {};
var Color = Template.bind({});
exports.Color = Color;
Color.args = {
  color: _Colors.PrimaryColor.glintsblue
};
var Ellipsis = Template.bind({});
exports.Ellipsis = Ellipsis;
Ellipsis.args = {
  ellipsis: true,
  children: "Tanya farnuva naar cam utinu en lokirim tanka tel' taurnin. Lirimaerea vedui' il'er Lotesse Shaalth."
};
var Tag = Template.bind({});
exports.Tag = Tag;
Tag.args = {
  tag: 'h6'
};
var Uppercase = Template.bind({});
exports.Uppercase = Uppercase;
Uppercase.args = {
  uppercase: true
};