"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.Interactive = exports.ButtonTag = exports.BasicTag = exports.ActionTag = void 0;

var _react = _interopRequireDefault(require("react"));

var _Tag = _interopRequireDefault(require("./Tag"));

var _components = require("../Icon/components");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var TagStack = (0, _styledComponents["default"])('div').withConfig({
  displayName: "Tagstories__TagStack",
  componentId: "sc-1uupdfc-0"
})(["div{margin-right:20px;}"]);
var _default = {
  title: 'General/Tag',
  component: _Tag["default"],
  argTypes: {
    icon: {
      control: {
        disable: true
      }
    }
  }
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_Tag["default"], args, "hello");
};

var Interactive = Template.bind({});
exports.Interactive = Interactive;
Interactive.args = {
  icon: /*#__PURE__*/_react["default"].createElement(_components.CloseIcon, {
    onClick: function onClick() {
      return alert('Clicked!');
    }
  }),
  onClick: function onClick() {
    return alert('Clicked!');
  }
};

var BasicTag = function BasicTag() {
  return /*#__PURE__*/_react["default"].createElement(TagStack, null, /*#__PURE__*/_react["default"].createElement(_Tag["default"], null, "Default"), /*#__PURE__*/_react["default"].createElement(_Tag["default"], {
    block: true
  }, "Block"), /*#__PURE__*/_react["default"].createElement(_Tag["default"], {
    outline: true
  }, "Outline"), /*#__PURE__*/_react["default"].createElement(_Tag["default"], {
    block: true,
    outline: true
  }, "Block and Outline"));
};

exports.BasicTag = BasicTag;

var ButtonTag = function ButtonTag() {
  return /*#__PURE__*/_react["default"].createElement(TagStack, null, /*#__PURE__*/_react["default"].createElement(_Tag["default"], {
    variant: "button",
    icon: /*#__PURE__*/_react["default"].createElement(_components.CloseIcon, {
      onClick: function onClick() {
        return alert('Clicked!');
      }
    })
  }, "Close"));
};

exports.ButtonTag = ButtonTag;

var ActionTag = function ActionTag() {
  return /*#__PURE__*/_react["default"].createElement(TagStack, null, /*#__PURE__*/_react["default"].createElement(_Tag["default"], {
    variant: "action",
    action: "add",
    onClick: function onClick() {
      return alert('Clicked!');
    }
  }, "Add"), /*#__PURE__*/_react["default"].createElement(_Tag["default"], {
    variant: "action",
    action: "reset",
    onClick: function onClick() {
      return alert('Clicked!');
    }
  }, "Reset"));
};

exports.ActionTag = ActionTag;