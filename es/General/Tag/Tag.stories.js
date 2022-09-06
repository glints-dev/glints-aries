import React from 'react';
import Tag from './Tag';
import { CloseIcon } from '../Icon/components';
import styled from 'styled-components';
var TagStack = styled('div').withConfig({
  displayName: "Tagstories__TagStack",
  componentId: "sc-1uupdfc-0"
})(["div{margin-right:20px;}"]);
export default {
  title: 'General/Tag',
  component: Tag,
  argTypes: {
    icon: {
      control: {
        disable: true
      }
    }
  }
};

var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(Tag, args, "hello");
};

export var Interactive = Template.bind({});
Interactive.args = {
  icon: /*#__PURE__*/React.createElement(CloseIcon, {
    onClick: function onClick() {
      return alert('Clicked!');
    }
  }),
  onClick: function onClick() {
    return alert('Clicked!');
  }
};
export var BasicTag = function BasicTag() {
  return /*#__PURE__*/React.createElement(TagStack, null, /*#__PURE__*/React.createElement(Tag, null, "Default"), /*#__PURE__*/React.createElement(Tag, {
    block: true
  }, "Block"), /*#__PURE__*/React.createElement(Tag, {
    outline: true
  }, "Outline"), /*#__PURE__*/React.createElement(Tag, {
    block: true,
    outline: true
  }, "Block and Outline"));
};
export var ButtonTag = function ButtonTag() {
  return /*#__PURE__*/React.createElement(TagStack, null, /*#__PURE__*/React.createElement(Tag, {
    variant: "button",
    icon: /*#__PURE__*/React.createElement(CloseIcon, {
      onClick: function onClick() {
        return alert('Clicked!');
      }
    })
  }, "Close"));
};
export var ActionTag = function ActionTag() {
  return /*#__PURE__*/React.createElement(TagStack, null, /*#__PURE__*/React.createElement(Tag, {
    variant: "action",
    action: "add",
    onClick: function onClick() {
      return alert('Clicked!');
    }
  }, "Add"), /*#__PURE__*/React.createElement(Tag, {
    variant: "action",
    action: "reset",
    onClick: function onClick() {
      return alert('Clicked!');
    }
  }, "Reset"));
};