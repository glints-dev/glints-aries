import React from 'react';
import { Flex } from '../../Layout/Flex';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Button } from './Button';
import { ArrowBackDoubleIcon, ArrowBackIcon, ArrowNextDoubleIcon, ArrowNextIcon, ViewIcon } from '../Icon/components';
export default {
  title: 'General/Button',
  component: Button,
  argTypes: {
    startIcon: {
      control: {
        type: 'select',
        options: {
          'Example: ArrowBackIcon': /*#__PURE__*/React.createElement(ArrowBackIcon, null),
          'Example: ArrowBackDoubleIcon': /*#__PURE__*/React.createElement(ArrowBackDoubleIcon, null)
        }
      }
    },
    endIcon: {
      control: {
        type: 'select',
        options: {
          'Example: ArrowBackIcon': /*#__PURE__*/React.createElement(ArrowNextIcon, null),
          'Example: ArrowNextDoubleIcon': /*#__PURE__*/React.createElement(ArrowNextDoubleIcon, null)
        }
      }
    },
    tag: {
      control: {
        type: 'text'
      }
    },
    className: {
      table: {
        disable: true
      }
    },
    ref: {
      table: {
        disable: true
      }
    },
    theme: {
      control: null
    }
  },
  decorators: [function (Story) {
    return /*#__PURE__*/React.createElement(BaseContainer, null, Story());
  }]
};

var Template = function Template(args) {
  return /*#__PURE__*/React.createElement(Button, args, "Button");
};

export var SolidBlue = Template.bind({});
SolidBlue.args = {
  variant: 'solid-blue'
};
export var Variants = function Variants() {
  return /*#__PURE__*/React.createElement(Flex, {
    flexWrap: "wrap",
    style: {
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "solid-blue"
  }, "solid-blue"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "ghost"), /*#__PURE__*/React.createElement(Button, {
    variant: "white-grey"
  }, "white-grey"), /*#__PURE__*/React.createElement(Button, {
    variant: "yellow"
  }, "yellow"), /*#__PURE__*/React.createElement(Button, {
    variant: "solid-white"
  }, "solid-white"), /*#__PURE__*/React.createElement(Button, {
    variant: "link"
  }, "link"));
};
export var Sizes = function Sizes() {
  return /*#__PURE__*/React.createElement(Flex, {
    alignItems: "flex-end",
    flexWrap: "wrap",
    style: {
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "solid-blue",
    small: true
  }, "Small"), /*#__PURE__*/React.createElement(Button, {
    variant: "solid-blue"
  }, "Default"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "solid-blue",
    block: true,
    small: true
  }, "Small Block")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "solid-blue",
    block: true
  }, "Default Block")));
};
export var Disable = function Disable() {
  return /*#__PURE__*/React.createElement(Flex, {
    style: {
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "solid-blue"
  }, "enabled"), /*#__PURE__*/React.createElement(Button, {
    variant: "solid-blue",
    disabled: true
  }, "disabled"));
};
export var WithIcon = function WithIcon() {
  return /*#__PURE__*/React.createElement(Flex, {
    style: {
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "solid-blue",
    startIcon: /*#__PURE__*/React.createElement(ViewIcon, null)
  }, "button icon left"), /*#__PURE__*/React.createElement(Button, {
    variant: "solid-blue",
    endIcon: /*#__PURE__*/React.createElement(ArrowNextIcon, null)
  }, "button icon right"));
};
export var WithDifferentTag = function WithDifferentTag() {
  return /*#__PURE__*/React.createElement(Flex, {
    style: {
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "solid-blue",
    tag: "a"
  }, "button as anchor"));
};
export var WithRoundedCorner = function WithRoundedCorner() {
  return /*#__PURE__*/React.createElement(Flex, {
    style: {
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "solid-blue",
    isRoundedCorner: true
  }, "Rounded corner button"));
};