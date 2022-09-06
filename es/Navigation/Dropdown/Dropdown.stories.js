import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Dropdown } from './Dropdown';
import { ArrowNextIcon, ArrowNextDoubleIcon, InfoIcon } from '../../General/Icon/components';
export default {
  title: 'Navigation/Dropdown',
  component: Dropdown,
  argTypes: {
    iconDefaultColor: {
      control: 'color'
    },
    leftIcon: {
      control: {
        type: 'select',
        options: {
          'Example: ArrowBackIcon': /*#__PURE__*/React.createElement(ArrowNextIcon, null),
          'Example: ArrowNextDoubleIcon': /*#__PURE__*/React.createElement(ArrowNextDoubleIcon, null)
        }
      }
    }
  }
};

var Template = function Template(args) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '150px'
    }
  }, /*#__PURE__*/React.createElement(Dropdown, _extends({
    label: "Career"
  }, args), /*#__PURE__*/React.createElement(Dropdown.Item, {
    value: "pm"
  }, "Product Manager"), /*#__PURE__*/React.createElement(Dropdown.Item, {
    value: "se"
  }, "Software Engineer")));
};

export var Default = Template.bind({});
export var HoverToOpen = Template.bind({});
HoverToOpen.args = {
  hoverToOpen: true
};
export var DropdownWithIconAndDefaultIconColour = Template.bind({});
DropdownWithIconAndDefaultIconColour.args = {
  leftIcon: /*#__PURE__*/React.createElement(InfoIcon, null),
  iconDefaultColor: 'red'
};
export var DropdownWithHoverLineEffect = Template.bind({});
DropdownWithHoverLineEffect.args = {
  showHoverLine: true
};
export var DropdownWithRightPlacement = Template.bind({});
DropdownWithRightPlacement.args = {
  dropDownPlacement: 'right'
};
export var DropdownWithFullWidth = Template.bind({});
DropdownWithFullWidth.args = {
  showFullWidth: true
};
export var DisabledDropdown = Template.bind({});
DisabledDropdown.args = {
  disabled: true
};