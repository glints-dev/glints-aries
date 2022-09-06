"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.Sizes = exports.Interactive = exports.Indeterminate = exports.FontSize = exports.Bordered = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Checkbox = require("./Checkbox");

var _GlintsContainer = require("../../Layout/GlintsContainer/GlintsContainer");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TestBox = _styledComponents["default"].div.withConfig({
  displayName: "Checkboxstories__TestBox",
  componentId: "sc-1i1in83-0"
})(["div{font-size:", ";}&:not(:last-child){margin-bottom:4px;}"], function (_ref) {
  var fontSize = _ref.fontSize;
  return fontSize;
});

var _default = {
  title: 'General/Checkbox',
  component: _Checkbox.Checkbox,
  decorators: [function (Story) {
    return /*#__PURE__*/React.createElement(_GlintsContainer.BaseContainer, null, Story());
  }]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(_Checkbox.Checkbox, args);
};

var Interactive = Template.bind({});
exports.Interactive = Interactive;
Interactive.args = {
  id: 'software-engineer',
  value: 'software-engineer',
  label: 'Software Engineer'
};
var Bordered = Template.bind({});
exports.Bordered = Bordered;
Bordered.args = {
  id: 'bordered-engineer',
  value: 'bordered-engineer',
  label: 'Bordered Engineer',
  border: true
};
var Sizes = Template.bind({});
exports.Sizes = Sizes;
Sizes.args = {
  id: 'large-engineer',
  value: 'large-engineer',
  label: 'Large Engineer',
  size: 'large'
};
var Indeterminate = Template.bind({});
exports.Indeterminate = Indeterminate;
Indeterminate.args = {
  id: 'indeterminate-engineer',
  value: 'indeterminate-engineer',
  label: 'Indeterminate Engineer',
  indeterminate: true
};

var FontSizeStory = function FontSizeStory(args) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TestBox, {
    fontSize: "10px"
  }, /*#__PURE__*/React.createElement(_Checkbox.Checkbox, (0, _extends2["default"])({}, args, {
    checked: true,
    id: "10px",
    value: "10px",
    label: "10px"
  }))), /*#__PURE__*/React.createElement(TestBox, {
    fontSize: "14px"
  }, /*#__PURE__*/React.createElement(_Checkbox.Checkbox, (0, _extends2["default"])({}, args, {
    checked: true,
    id: "14px",
    value: "14px",
    label: "14px"
  }))), /*#__PURE__*/React.createElement(TestBox, {
    fontSize: "18px"
  }, /*#__PURE__*/React.createElement(_Checkbox.Checkbox, (0, _extends2["default"])({}, args, {
    checked: true,
    id: "18px",
    value: "18px",
    label: "18px"
  }))), /*#__PURE__*/React.createElement(TestBox, {
    fontSize: "48px"
  }, /*#__PURE__*/React.createElement(_Checkbox.Checkbox, (0, _extends2["default"])({}, args, {
    checked: true,
    id: "48px",
    value: "48px",
    label: "48px"
  }))));
};

var FontSize = FontSizeStory.bind({});
exports.FontSize = FontSize;
FontSize.parameters = {
  docs: {
    description: {
      story: "If you change the checkbox root div's font-size, the entire checkbox will adjust its size accordingly."
    }
  }
};