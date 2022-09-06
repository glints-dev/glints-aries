import _extends from "@babel/runtime/helpers/extends";
import * as React from 'react';
import { Checkbox } from './Checkbox';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import styled from 'styled-components';
var TestBox = styled.div.withConfig({
  displayName: "Checkboxstories__TestBox",
  componentId: "sc-1i1in83-0"
})(["div{font-size:", ";}&:not(:last-child){margin-bottom:4px;}"], function (_ref) {
  var fontSize = _ref.fontSize;
  return fontSize;
});
export default {
  title: 'General/Checkbox',
  component: Checkbox,
  decorators: [function (Story) {
    return /*#__PURE__*/React.createElement(BaseContainer, null, Story());
  }]
};

var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(Checkbox, args);
};

export var Interactive = Template.bind({});
Interactive.args = {
  id: 'software-engineer',
  value: 'software-engineer',
  label: 'Software Engineer'
};
export var Bordered = Template.bind({});
Bordered.args = {
  id: 'bordered-engineer',
  value: 'bordered-engineer',
  label: 'Bordered Engineer',
  border: true
};
export var Sizes = Template.bind({});
Sizes.args = {
  id: 'large-engineer',
  value: 'large-engineer',
  label: 'Large Engineer',
  size: 'large'
};
export var Indeterminate = Template.bind({});
Indeterminate.args = {
  id: 'indeterminate-engineer',
  value: 'indeterminate-engineer',
  label: 'Indeterminate Engineer',
  indeterminate: true
};

var FontSizeStory = function FontSizeStory(args) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TestBox, {
    fontSize: "10px"
  }, /*#__PURE__*/React.createElement(Checkbox, _extends({}, args, {
    checked: true,
    id: "10px",
    value: "10px",
    label: "10px"
  }))), /*#__PURE__*/React.createElement(TestBox, {
    fontSize: "14px"
  }, /*#__PURE__*/React.createElement(Checkbox, _extends({}, args, {
    checked: true,
    id: "14px",
    value: "14px",
    label: "14px"
  }))), /*#__PURE__*/React.createElement(TestBox, {
    fontSize: "18px"
  }, /*#__PURE__*/React.createElement(Checkbox, _extends({}, args, {
    checked: true,
    id: "18px",
    value: "18px",
    label: "18px"
  }))), /*#__PURE__*/React.createElement(TestBox, {
    fontSize: "48px"
  }, /*#__PURE__*/React.createElement(Checkbox, _extends({}, args, {
    checked: true,
    id: "48px",
    value: "48px",
    label: "48px"
  }))));
};

export var FontSize = FontSizeStory.bind({});
FontSize.parameters = {
  docs: {
    description: {
      story: "If you change the checkbox root div's font-size, the entire checkbox will adjust its size accordingly."
    }
  }
};