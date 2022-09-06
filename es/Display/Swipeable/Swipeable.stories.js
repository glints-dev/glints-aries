import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Swipeable } from './Swipeable';
import { SwipeableCardExample } from './SwipeableStyle';
export default {
  title: 'Display/Swipeable',
  component: Swipeable,
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

  return /*#__PURE__*/React.createElement(Swipeable, args, Array.from(Array(10).keys()).map(function (number) {
    return /*#__PURE__*/React.createElement(Swipeable.Item, {
      key: number
    }, /*#__PURE__*/React.createElement(SwipeableCardExample, null, /*#__PURE__*/React.createElement("h1", null, "Card. ", number)));
  }));
};

export var Default = Template.bind({});