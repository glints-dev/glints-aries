import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children"];
import React from 'react';
import { Collapsible } from './Collapsible';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
export default {
  title: 'Display/Collapsible',
  component: Collapsible,
  decorators: [function (Story) {
    return /*#__PURE__*/React.createElement(BaseContainer, null, Story());
  }]
};
var defaultText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

var Template = function Template(_ref) {
  var children = _ref.children,
      args = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Collapsible, args, children || defaultText);
};

export var Interactive = Template.bind({});
Interactive.args = {
  label: 'Lorem Ipsum',
  children: defaultText,
  isOpen: true
};