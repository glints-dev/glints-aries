import _extends from "@babel/runtime/helpers/extends";
import React, { useState } from 'react';
import { NumberInput } from './NumberInput';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
export default {
  title: 'Input/NumberInput',
  component: NumberInput,
  decorators: [function (Story) {
    return /*#__PURE__*/React.createElement(BaseContainer, null, Story());
  }]
};

var Template = function Template(args) {
  var _useState = useState('4'),
      number = _useState[0],
      setNumber = _useState[1];

  return /*#__PURE__*/React.createElement(NumberInput, _extends({
    value: number,
    onChange: function onChange(e) {
      return setNumber(e.target.value);
    }
  }, args));
};

export var Interactive = Template.bind({});
Interactive.args = {
  label: 'Number'
};
export var MinimumValue3AndMaximumValue10 = Template.bind({});
MinimumValue3AndMaximumValue10.args = {
  label: 'Number',
  min: 3,
  max: 10
};
export var StepValue2 = Template.bind({});
StepValue2.args = {
  label: 'Number',
  step: 2
};