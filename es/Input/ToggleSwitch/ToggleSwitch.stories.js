import React from 'react';
import { ToggleSwitch } from './ToggleSwitch';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import EyeIcon from '../../General/Icon/components/EyeIcon';
import EyeSlashedIcon from '../../General/Icon/components/EyeSlashedIcon';
export default {
  title: 'Input/ToggleSwitch',
  component: ToggleSwitch,
  decorators: [function (Story) {
    return /*#__PURE__*/React.createElement(BaseContainer, null, Story());
  }]
};

var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(ToggleSwitch, args);
};

export var Interactive = Template.bind({});
Interactive.args = {
  defaultActive: false
};
export var ToggleSwitchWithIcons = function ToggleSwitchWithIcons() {
  return /*#__PURE__*/React.createElement(ToggleSwitch, {
    defaultActive: false,
    iconOptions: {
      active: EyeIcon,
      inactive: EyeSlashedIcon
    }
  });
};
export var ToggleSwitchInAnActiveState = function ToggleSwitchInAnActiveState() {
  return /*#__PURE__*/React.createElement(ToggleSwitch, {
    active: true
  });
};