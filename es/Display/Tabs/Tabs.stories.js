import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Tabs } from './Tabs';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import Badge from '../../General/Badge';
export default {
  title: 'Display/Tabs',
  component: Tabs,
  decorators: [function (Story) {
    return /*#__PURE__*/React.createElement(BaseContainer, null, Story());
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

var Template = function Template(_ref) {
  var args = _extends({}, _ref);

  return /*#__PURE__*/React.createElement(Tabs, args, /*#__PURE__*/React.createElement(Tabs.Pane, {
    tab: 'Location Tab'
  }, "Tab Location"), /*#__PURE__*/React.createElement(Tabs.Pane, {
    tab: "Salary"
  }, "Tab Salary"), /*#__PURE__*/React.createElement(Tabs.Pane, {
    tab: "Job"
  }, "Tab Job"), /*#__PURE__*/React.createElement(Tabs.Pane, {
    tab: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
      label: 4
    }), "Company")
  }, "Tab Company"));
};

var OverflowTemplate = function OverflowTemplate(_ref2) {
  var args = _extends({}, _ref2);

  return /*#__PURE__*/React.createElement(Tabs, args, /*#__PURE__*/React.createElement(Tabs.Pane, {
    tab: 'Tab 1'
  }, "Tab 1"), /*#__PURE__*/React.createElement(Tabs.Pane, {
    tab: 'Tab 2'
  }, "Tab 2"), /*#__PURE__*/React.createElement(Tabs.Pane, {
    tab: 'Tab 3'
  }, "Tab 3"), /*#__PURE__*/React.createElement(Tabs.Pane, {
    tab: 'Tab 4'
  }, " Tab 4"), /*#__PURE__*/React.createElement(Tabs.Pane, {
    tab: 'Tab 5'
  }, "Tab 5"), /*#__PURE__*/React.createElement(Tabs.Pane, {
    tab: 'Tab 6'
  }, "Tab 6"), /*#__PURE__*/React.createElement(Tabs.Pane, {
    tab: 'Tab 7'
  }, "Tab 7"), /*#__PURE__*/React.createElement(Tabs.Pane, {
    tab: 'Tab 8'
  }, "Tab 8"), /*#__PURE__*/React.createElement(Tabs.Pane, {
    tab: 'Tab 9'
  }, "Tab 9"), /*#__PURE__*/React.createElement(Tabs.Pane, {
    tab: 'Tab 10'
  }, "Tab 10"), /*#__PURE__*/React.createElement(Tabs.Pane, {
    tab: 'Tab 11'
  }, "Tab 11"), /*#__PURE__*/React.createElement(Tabs.Pane, {
    tab: 'Tab 12'
  }, "Tab 12"), /*#__PURE__*/React.createElement(Tabs.Pane, {
    tab: 'Tab 13'
  }, "Tab 13"), /*#__PURE__*/React.createElement(Tabs.Pane, {
    tab: 'Tab 14'
  }, "Tab 14"), /*#__PURE__*/React.createElement(Tabs.Pane, {
    tab: 'Tab 15'
  }, "Tab 15"), /*#__PURE__*/React.createElement(Tabs.Pane, {
    tab: 'Tab 16'
  }, "Tab 16"), /*#__PURE__*/React.createElement(Tabs.Pane, {
    tab: 'Tab 17'
  }, "Tab 17"), /*#__PURE__*/React.createElement(Tabs.Pane, {
    tab: 'Tab 18'
  }, "Tab 18"), /*#__PURE__*/React.createElement(Tabs.Pane, {
    tab: 'Tab 19'
  }, "Tab 19"), /*#__PURE__*/React.createElement(Tabs.Pane, {
    tab: 'Tab 20'
  }, "Tab 20"), /*#__PURE__*/React.createElement(Tabs.Pane, {
    tab: 'Tab 21'
  }, "Tab 21"), /*#__PURE__*/React.createElement(Tabs.Pane, {
    tab: 'Tab 22'
  }, "Tab 22"));
};

export var Interactive = Template.bind({});
export var Alignment = Template.bind({});
Alignment.args = {
  alignment: 'vertical'
};
export var Theme = Template.bind({});
Theme.args = {
  theme: 'blue'
};
export var OverflowEffect = OverflowTemplate.bind({});
OverflowEffect.args = {
  theme: 'blue'
};