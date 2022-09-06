import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children"];
import React from 'react';
import { Heading } from './Heading';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
export default {
  title: 'General/Heading',
  component: Heading,
  decorators: [function (Story) {
    return /*#__PURE__*/React.createElement(BaseContainer, null, Story());
  }]
};

var Template = function Template(_ref) {
  var children = _ref.children,
      args = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Heading, args, children || 'Glints Aries');
};

export var Interactive = Template.bind({});
Interactive.args = {
  children: 'Glints Aries'
};