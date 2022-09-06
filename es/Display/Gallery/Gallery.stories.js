import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import Gallery from './Gallery';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
export default {
  title: 'Display/Gallery',
  component: Gallery,
  decorators: [function (Story) {
    return /*#__PURE__*/React.createElement(BaseContainer, null, Story());
  }],
  argTypes: {
    className: {
      table: {
        disable: true
      }
    }
  }
};

var Template = function Template(_ref) {
  var args = _extends({}, _ref);

  return /*#__PURE__*/React.createElement(Gallery, args, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&h=500&q=80",
    alt: "Profile Picture"
  }), /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1599335937498-90b82b84d603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80",
    alt: "Nature"
  }), /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80",
    alt: "Keyboard"
  }), /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&h=500&q=80",
    alt: "Profile Picture"
  }), /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1599335937498-90b82b84d603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80",
    alt: "Nature"
  }), /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80",
    alt: "Keyboard"
  }), /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&h=500&q=80",
    alt: "Profile Picture"
  }), /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1599335937498-90b82b84d603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80",
    alt: "Nature"
  }), /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80",
    alt: "Keyboard"
  }));
};

export var Interactive = Template.bind({});
Interactive.args = {};
export var ImagesDisplayed = Template.bind({});
ImagesDisplayed.args = {
  imagesDisplayed: 2
};