"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.RedirectToGlintsWhenRightClick = exports.Interactive = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("./index");

var _GlintsContainer = require("../../Layout/GlintsContainer/GlintsContainer");

var _default = {
  title: 'General/Brand',
  component: _index.Brand,
  argTypes: {
    asset: {
      control: {
        type: 'radio',
        options: ['glints-black', 'glints-white']
      }
    },
    className: {
      control: {
        disable: true
      }
    },
    onContextMenu: {
      control: {
        disable: true
      }
    }
  },
  decorators: [function (Story) {
    return /*#__PURE__*/_react["default"].createElement(_GlintsContainer.BaseContainer, null, Story());
  }]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_index.Brand, args);
};

var Interactive = Template.bind({});
exports.Interactive = Interactive;
Interactive.args = {
  asset: 'glints-black'
};
var RedirectToGlintsWhenRightClick = Template.bind({});
exports.RedirectToGlintsWhenRightClick = RedirectToGlintsWhenRightClick;
RedirectToGlintsWhenRightClick.args = {
  asset: 'glints-black',
  rightClickURL: 'https://glints.com'
};