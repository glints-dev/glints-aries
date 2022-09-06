import * as React from 'react';
import { Loading } from './Loading';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
export default {
  title: 'General/Loading',
  component: Loading,
  decorators: [function (Story) {
    return /*#__PURE__*/React.createElement(BaseContainer, null, Story());
  }]
};

var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(Loading, args);
};

export var Interactive = Template.bind({});
Interactive.args = {};