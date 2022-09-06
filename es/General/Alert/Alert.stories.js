import _extends from "@babel/runtime/helpers/extends";
import React, { useState } from 'react';
import { Alert } from './Alert';
import { Button } from '../Button';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
export default {
  title: 'General/Alert',
  component: Alert,
  decorators: [function (Story) {
    return /*#__PURE__*/React.createElement(BaseContainer, null, Story());
  }],
  argTypes: {
    className: {
      control: {
        disable: true
      }
    }
  }
};

var Template = function Template(args) {
  var _useState = useState(args.isOpen),
      isOpen = _useState[0],
      setOpen = _useState[1];

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return setOpen(true);
    },
    variant: "solid-blue"
  }, "Show Pop up"), /*#__PURE__*/React.createElement(Alert, _extends({}, args, {
    isOpen: isOpen,
    onClose: function onClose() {
      return setOpen(false);
    }
  })));
};

export var Interactive = Template.bind({});
Interactive.args = {
  type: 'info',
  message: 'You have successfully applied to Glints as Software Engineer.'
};