"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.Theme = exports.OverflowEffect = exports.Interactive = exports.Alignment = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Tabs = require("./Tabs");

var _GlintsContainer = require("../../Layout/GlintsContainer/GlintsContainer");

var _Badge = _interopRequireDefault(require("../../General/Badge"));

var _default = {
  title: 'Display/Tabs',
  component: _Tabs.Tabs,
  decorators: [function (Story) {
    return /*#__PURE__*/_react["default"].createElement(_GlintsContainer.BaseContainer, null, Story());
  }],
  argTypes: {
    className: {
      table: {
        disable: true
      }
    },
    activeTab: {
      control: {
        type: null
      }
    },
    onTabClick: {
      control: {
        type: null
      }
    }
  }
};
exports["default"] = _default;

var Template = function Template(_ref) {
  var args = (0, _extends2["default"])({}, _ref);
  return /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs, args, /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs.Pane, {
    tab: 'Location Tab'
  }, "Tab Location"), /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs.Pane, {
    tab: "Salary"
  }, "Tab Salary"), /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs.Pane, {
    tab: "Job"
  }, "Tab Job"), /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs.Pane, {
    tab: /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
      label: 4
    }), "Company")
  }, "Tab Company"));
};

var OverflowTemplate = function OverflowTemplate(_ref2) {
  var args = (0, _extends2["default"])({}, _ref2);
  return /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs, args, /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs.Pane, {
    tab: 'Tab 1'
  }, "Tab 1"), /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs.Pane, {
    tab: 'Tab 2'
  }, "Tab 2"), /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs.Pane, {
    tab: 'Tab 3'
  }, "Tab 3"), /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs.Pane, {
    tab: 'Tab 4'
  }, " Tab 4"), /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs.Pane, {
    tab: 'Tab 5'
  }, "Tab 5"), /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs.Pane, {
    tab: 'Tab 6'
  }, "Tab 6"), /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs.Pane, {
    tab: 'Tab 7'
  }, "Tab 7"), /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs.Pane, {
    tab: 'Tab 8'
  }, "Tab 8"), /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs.Pane, {
    tab: 'Tab 9'
  }, "Tab 9"), /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs.Pane, {
    tab: 'Tab 10'
  }, "Tab 10"), /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs.Pane, {
    tab: 'Tab 11'
  }, "Tab 11"), /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs.Pane, {
    tab: 'Tab 12'
  }, "Tab 12"), /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs.Pane, {
    tab: 'Tab 13'
  }, "Tab 13"), /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs.Pane, {
    tab: 'Tab 14'
  }, "Tab 14"), /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs.Pane, {
    tab: 'Tab 15'
  }, "Tab 15"), /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs.Pane, {
    tab: 'Tab 16'
  }, "Tab 16"), /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs.Pane, {
    tab: 'Tab 17'
  }, "Tab 17"), /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs.Pane, {
    tab: 'Tab 18'
  }, "Tab 18"), /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs.Pane, {
    tab: 'Tab 19'
  }, "Tab 19"), /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs.Pane, {
    tab: 'Tab 20'
  }, "Tab 20"), /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs.Pane, {
    tab: 'Tab 21'
  }, "Tab 21"), /*#__PURE__*/_react["default"].createElement(_Tabs.Tabs.Pane, {
    tab: 'Tab 22'
  }, "Tab 22"));
};

var Interactive = Template.bind({});
exports.Interactive = Interactive;
var Alignment = Template.bind({});
exports.Alignment = Alignment;
Alignment.args = {
  alignment: 'vertical'
};
var Theme = Template.bind({});
exports.Theme = Theme;
Theme.args = {
  theme: 'blue'
};
var OverflowEffect = OverflowTemplate.bind({});
exports.OverflowEffect = OverflowEffect;
OverflowEffect.args = {
  theme: 'blue'
};