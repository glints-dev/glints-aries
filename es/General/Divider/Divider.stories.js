import * as React from 'react';
import { Divider } from './Divider';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
export default {
  title: 'General/Divider',
  component: Divider,
  decorators: [function (Story) {
    return /*#__PURE__*/React.createElement(BaseContainer, null, Story());
  }]
};

var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(Divider, args);
};

export var Interactive = Template.bind({});
export var dividerWithGreyTheme = Template.bind({});
dividerWithGreyTheme.args = {
  theme: 'grey'
};