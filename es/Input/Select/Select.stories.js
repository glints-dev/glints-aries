import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import Select from './Select';
import { WarningOutlineIcon } from '../../General/Icon/components';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
export default {
  title: 'Input/Select',
  component: Select,
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
    return /*#__PURE__*/React.createElement(BaseContainer, null, Story());
  }]
};
var Options = [/*#__PURE__*/React.createElement(Select.Option, {
  key: 1,
  value: "accountant"
}, "Accountant"), /*#__PURE__*/React.createElement(Select.Option, {
  key: 2,
  value: "business development"
}, "Business Development"), /*#__PURE__*/React.createElement(Select.Option, {
  key: 3,
  value: "software engineer"
}, "Software Engineer")];

var Template = function Template(args) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '200px'
    }
  }, /*#__PURE__*/React.createElement(Select, _extends({
    label: "Jobs"
  }, args, {
    // set undefined to prevent these properties are shown in code sample
    onBlur: undefined,
    onFocus: undefined,
    onChange: undefined,
    onInputChange: undefined
  }), Options));
};

export var DefaultSelect = Template.bind({});
export var BasicUsage = Template.bind({});
BasicUsage.args = {
  label: 'Label',
  value: 'Accountant'
};
export var LoadingOptions = Template.bind({});
LoadingOptions.args = {
  isLoading: true
};
export var Error = function Error() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '250px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Boolean",
    error: true
  }, Options)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "String",
    error: "error message"
  }, Options)), /*#__PURE__*/React.createElement(Select, {
    label: "React Node",
    error: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WarningOutlineIcon, null), " error message")
  }, Options));
};
export var Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};
export var DefaultValue = Template.bind({});
DefaultValue.args = {
  defaultValue: 'Accountant'
};
export var DisableTyping = Template.bind({});
DisableTyping.args = {
  disableTyping: true
};
export var CustomizeNoOptionResultMessage = Template.bind({});
CustomizeNoOptionResultMessage.args = {
  noOptionResult: 'Customized no option result message'
};
export var RemoveFloatingLabel = Template.bind({});
RemoveFloatingLabel.args = {
  removeFloatingLabel: true
};
export var RemoveDropIcon = Template.bind({});
RemoveDropIcon.args = {
  removeDropIcon: true
};
export var Sizes = function Sizes() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '200px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Small",
    small: true
  }, Options)), /*#__PURE__*/React.createElement(Select, {
    label: "Default"
  }, Options));
};
export var CustomizeFilterFunction = function CustomizeFilterFunction() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '200px'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Jobs",
    filterFunction: function filterFunction(option, search) {
      return !option.toLowerCase().includes(search.toLowerCase());
    }
  }, Options));
};