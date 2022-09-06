import _extends from "@babel/runtime/helpers/extends";
import React, { useState } from 'react';
import { default as Drawer } from './Drawer';
import { Button } from '../../General/Button/Button';
export default {
  title: 'Navigation/Drawer',
  component: Drawer
};

var Template = function Template(args) {
  var _useState = useState(false),
      isDrawerOpen = _useState[0],
      setIsDrawerOpen = _useState[1];

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    variant: "solid-blue",
    onClick: function onClick() {
      return setIsDrawerOpen(!isDrawerOpen);
    }
  }, "Toggle"), /*#__PURE__*/React.createElement(Drawer, _extends({}, args, {
    isOpen: isDrawerOpen,
    onClose: function onClose() {
      return setIsDrawerOpen(false);
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "solid-blue",
    onClick: function onClick() {
      return setIsDrawerOpen(false);
    }
  }, "Close")));
};

export var Default = Template.bind({});