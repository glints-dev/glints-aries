"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.Interactive = exports.ImagesDisplayed = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Gallery = _interopRequireDefault(require("./Gallery"));

var _GlintsContainer = require("../../Layout/GlintsContainer/GlintsContainer");

var _default = {
  title: 'Display/Gallery',
  component: _Gallery["default"],
  decorators: [function (Story) {
    return /*#__PURE__*/_react["default"].createElement(_GlintsContainer.BaseContainer, null, Story());
  }],
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
  return /*#__PURE__*/_react["default"].createElement(_Gallery["default"], args, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&h=500&q=80",
    alt: "Profile Picture"
  }), /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://images.unsplash.com/photo-1599335937498-90b82b84d603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80",
    alt: "Nature"
  }), /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80",
    alt: "Keyboard"
  }), /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&h=500&q=80",
    alt: "Profile Picture"
  }), /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://images.unsplash.com/photo-1599335937498-90b82b84d603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80",
    alt: "Nature"
  }), /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80",
    alt: "Keyboard"
  }), /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&h=500&q=80",
    alt: "Profile Picture"
  }), /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://images.unsplash.com/photo-1599335937498-90b82b84d603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80",
    alt: "Nature"
  }), /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80",
    alt: "Keyboard"
  }));
};

var Interactive = Template.bind({});
exports.Interactive = Interactive;
Interactive.args = {};
var ImagesDisplayed = Template.bind({});
exports.ImagesDisplayed = ImagesDisplayed;
ImagesDisplayed.args = {
  imagesDisplayed: 2
};