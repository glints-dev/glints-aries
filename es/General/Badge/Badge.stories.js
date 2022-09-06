import React from 'react';
import { Badge } from './Badge';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import styled from 'styled-components';
var BadgeStack = styled('div').withConfig({
  displayName: "Badgestories__BadgeStack",
  componentId: "sc-imkkqn-0"
})(["display:flex;align-items:flex-start;"]);
export default {
  title: 'General/Badge',
  component: Badge,
  decorators: [function (Story) {
    return /*#__PURE__*/React.createElement(BaseContainer, null, Story());
  }]
};

var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(Badge, args);
};

export var Interactive = Template.bind({});
Interactive.args = {
  label: 'hello'
};
export var Variants = function Variants() {
  return /*#__PURE__*/React.createElement(BadgeStack, null, /*#__PURE__*/React.createElement(Badge, {
    label: "4",
    variant: "default"
  }), /*#__PURE__*/React.createElement(Badge, {
    label: "4",
    variant: "dimmed"
  }), /*#__PURE__*/React.createElement(Badge, {
    label: "4",
    variant: "white"
  }), /*#__PURE__*/React.createElement(Badge, {
    label: "4",
    variant: "blue"
  }));
};