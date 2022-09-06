import React from 'react';
import { Brand } from './index';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
export default {
  title: 'General/Brand',
  component: Brand,
  argTypes: {
    asset: {
      control: {
        type: 'radio',
        options: ['glints-black', 'glints-white']
      }
    },
    className: {
      control: {
        disable: true
      }
    },
    onContextMenu: {
      control: {
        disable: true
      }
    }
  },
  decorators: [function (Story) {
    return /*#__PURE__*/React.createElement(BaseContainer, null, Story());
  }]
};

var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(Brand, args);
};

export var Interactive = Template.bind({});
Interactive.args = {
  asset: 'glints-black'
};
export var RedirectToGlintsWhenRightClick = Template.bind({});
RedirectToGlintsWhenRightClick.args = {
  asset: 'glints-black',
  rightClickURL: 'https://glints.com'
};