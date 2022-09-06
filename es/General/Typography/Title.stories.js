import React from 'react';
import { Title } from './Title';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { PrimaryColor } from '../../Utils/Colors';
Title.displayName = 'Typography.Title';
export default {
  title: 'Typography/Title',
  component: Title,
  decorators: [function (Story) {
    return /*#__PURE__*/React.createElement(BaseContainer, null, Story());
  }],
  argTypes: {
    className: {
      table: {
        disable: true
      }
    },
    color: {
      control: 'color'
    },
    tag: {
      control: 'radio'
    }
  }
};

var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(Title, args, args.children || 'Glints Aries');
};

export var Interactive = Template.bind({});
Interactive.args = {};
export var Color = Template.bind({});
Color.args = {
  color: PrimaryColor.glintsblue
};
export var Ellipsis = Template.bind({});
Ellipsis.args = {
  ellipsis: true,
  children: "Tanya farnuva naar cam utinu en lokirim tanka tel' taurnin. Lirimaerea vedui' il'er Lotesse Shaalth."
};
export var Tag = Template.bind({});
Tag.args = {
  tag: 'h6'
};
export var Uppercase = Template.bind({});
Uppercase.args = {
  uppercase: true
};