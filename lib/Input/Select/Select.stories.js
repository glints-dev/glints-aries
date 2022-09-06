"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.Sizes = exports.RemoveFloatingLabel = exports.RemoveDropIcon = exports.LoadingOptions = exports.Error = exports.Disabled = exports.DisableTyping = exports.DefaultValue = exports.DefaultSelect = exports.CustomizeNoOptionResultMessage = exports.CustomizeFilterFunction = exports.BasicUsage = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Select = _interopRequireDefault(require("./Select"));

var _components = require("../../General/Icon/components");

var _GlintsContainer = require("../../Layout/GlintsContainer/GlintsContainer");

var _default = {
  title: 'Input/Select',
  component: _Select["default"],
  argTypes: {
    status: {
      control: null
    },
    error: {
      control: {
        type: 'boolean'
      }
    }
  },
  decorators: [function (Story) {
    return /*#__PURE__*/_react["default"].createElement(_GlintsContainer.BaseContainer, null, Story());
  }]
};
exports["default"] = _default;
var Options = [/*#__PURE__*/_react["default"].createElement(_Select["default"].Option, {
  key: 1,
  value: "accountant"
}, "Accountant"), /*#__PURE__*/_react["default"].createElement(_Select["default"].Option, {
  key: 2,
  value: "business development"
}, "Business Development"), /*#__PURE__*/_react["default"].createElement(_Select["default"].Option, {
  key: 3,
  value: "software engineer"
}, "Software Engineer")];

var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: '200px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Select["default"], (0, _extends2["default"])({
    label: "Jobs"
  }, args, {
    // set undefined to prevent these properties are shown in code sample
    onBlur: undefined,
    onFocus: undefined,
    onChange: undefined,
    onInputChange: undefined
  }), Options));
};

var DefaultSelect = Template.bind({});
exports.DefaultSelect = DefaultSelect;
var BasicUsage = Template.bind({});
exports.BasicUsage = BasicUsage;
BasicUsage.args = {
  label: 'Label',
  value: 'Accountant'
};
var LoadingOptions = Template.bind({});
exports.LoadingOptions = LoadingOptions;
LoadingOptions.args = {
  isLoading: true
};

var Error = function Error() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: '250px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    label: "Boolean",
    error: true
  }, Options)), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    label: "String",
    error: "error message"
  }, Options)), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    label: "React Node",
    error: /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_components.WarningOutlineIcon, null), " error message")
  }, Options));
};

exports.Error = Error;
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = {
  disabled: true
};
var DefaultValue = Template.bind({});
exports.DefaultValue = DefaultValue;
DefaultValue.args = {
  defaultValue: 'Accountant'
};
var DisableTyping = Template.bind({});
exports.DisableTyping = DisableTyping;
DisableTyping.args = {
  disableTyping: true
};
var CustomizeNoOptionResultMessage = Template.bind({});
exports.CustomizeNoOptionResultMessage = CustomizeNoOptionResultMessage;
CustomizeNoOptionResultMessage.args = {
  noOptionResult: 'Customized no option result message'
};
var RemoveFloatingLabel = Template.bind({});
exports.RemoveFloatingLabel = RemoveFloatingLabel;
RemoveFloatingLabel.args = {
  removeFloatingLabel: true
};
var RemoveDropIcon = Template.bind({});
exports.RemoveDropIcon = RemoveDropIcon;
RemoveDropIcon.args = {
  removeDropIcon: true
};

var Sizes = function Sizes() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: '200px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    label: "Small",
    small: true
  }, Options)), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    label: "Default"
  }, Options));
};

exports.Sizes = Sizes;

var CustomizeFilterFunction = function CustomizeFilterFunction() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: '200px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    label: "Jobs",
    filterFunction: function filterFunction(option, search) {
      return !option.toLowerCase().includes(search.toLowerCase());
    }
  }, Options));
};

exports.CustomizeFilterFunction = CustomizeFilterFunction;