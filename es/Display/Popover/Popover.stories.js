import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import Popover from './Popover';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import ProfilePicture from '../../General/ProfilePicture';
import PointingModal from '../PointingModal';
export default {
  title: 'Display/Popover',
  component: Popover,
  decorators: [function (Story) {
    return /*#__PURE__*/React.createElement(BaseContainer, null, Story());
  }],
  argTypes: {
    className: {
      table: {
        disable: true
      }
    },
    content: {
      control: {
        type: null
      }
    }
  }
};

var Template = function Template(_ref) {
  var args = _extends({}, _ref);

  return /*#__PURE__*/React.createElement(Popover, args, /*#__PURE__*/React.createElement(ProfilePicture, null, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&h=500&q=80",
    alt: "Profile Picture"
  })));
};

export var Interactive = Template.bind({});
Interactive.args = {
  content: /*#__PURE__*/React.createElement(PointingModal, null, /*#__PURE__*/React.createElement("span", null, "Hello World"))
};