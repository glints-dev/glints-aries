import * as React from 'react';
import { Textarea } from './Textarea';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
export default {
  title: 'Input/Textarea',
  component: Textarea,
  decorators: [function (Story) {
    return /*#__PURE__*/React.createElement(BaseContainer, null, Story());
  }]
};

var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(Textarea, args);
};

export var Interactive = Template.bind({});
Interactive.args = {
  label: 'Description'
};
export var removeFloatingLabelIsTrue = Template.bind({});
removeFloatingLabelIsTrue.args = {
  label: 'Remove Floating Label Is True',
  removeFloatingLabel: true
};