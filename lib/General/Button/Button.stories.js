"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.WithRoundedCorner = exports.WithIcon = exports.WithDifferentTag = exports.Variants = exports.SolidBlue = exports.Sizes = exports.Disable = void 0;

var _react = _interopRequireDefault(require("react"));

var _Flex = require("../../Layout/Flex");

var _GlintsContainer = require("../../Layout/GlintsContainer/GlintsContainer");

var _Button = require("./Button");

var _components = require("../Icon/components");

var _default = {
  title: 'General/Button',
  component: _Button.Button,
  argTypes: {
    startIcon: {
      control: {
        type: 'select',
        options: {
          'Example: ArrowBackIcon': /*#__PURE__*/_react["default"].createElement(_components.ArrowBackIcon, null),
          'Example: ArrowBackDoubleIcon': /*#__PURE__*/_react["default"].createElement(_components.ArrowBackDoubleIcon, null)
        }
      }
    },
    endIcon: {
      control: {
        type: 'select',
        options: {
          'Example: ArrowBackIcon': /*#__PURE__*/_react["default"].createElement(_components.ArrowNextIcon, null),
          'Example: ArrowNextDoubleIcon': /*#__PURE__*/_react["default"].createElement(_components.ArrowNextDoubleIcon, null)
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
    return /*#__PURE__*/_react["default"].createElement(_GlintsContainer.BaseContainer, null, Story());
  }]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_Button.Button, args, "Button");
};

var SolidBlue = Template.bind({});
exports.SolidBlue = SolidBlue;
SolidBlue.args = {
  variant: 'solid-blue'
};

var Variants = function Variants() {
  return /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    flexWrap: "wrap",
    style: {
      gap: '10px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "solid-blue"
  }, "solid-blue"), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "ghost"
  }, "ghost"), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "white-grey"
  }, "white-grey"), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "yellow"
  }, "yellow"), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "solid-white"
  }, "solid-white"), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "link"
  }, "link"));
};

exports.Variants = Variants;

var Sizes = function Sizes() {
  return /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    alignItems: "flex-end",
    flexWrap: "wrap",
    style: {
      gap: '10px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "solid-blue",
    small: true
  }, "Small"), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "solid-blue"
  }, "Default"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "solid-blue",
    block: true,
    small: true
  }, "Small Block")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "solid-blue",
    block: true
  }, "Default Block")));
};

exports.Sizes = Sizes;

var Disable = function Disable() {
  return /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    style: {
      gap: '10px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "solid-blue"
  }, "enabled"), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "solid-blue",
    disabled: true
  }, "disabled"));
};

exports.Disable = Disable;

var WithIcon = function WithIcon() {
  return /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    style: {
      gap: '10px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "solid-blue",
    startIcon: /*#__PURE__*/_react["default"].createElement(_components.ViewIcon, null)
  }, "button icon left"), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "solid-blue",
    endIcon: /*#__PURE__*/_react["default"].createElement(_components.ArrowNextIcon, null)
  }, "button icon right"));
};

exports.WithIcon = WithIcon;

var WithDifferentTag = function WithDifferentTag() {
  return /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    style: {
      gap: '10px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "solid-blue",
    tag: "a"
  }, "button as anchor"));
};

exports.WithDifferentTag = WithDifferentTag;

var WithRoundedCorner = function WithRoundedCorner() {
  return /*#__PURE__*/_react["default"].createElement(_Flex.Flex, {
    style: {
      gap: '10px'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "solid-blue",
    isRoundedCorner: true
  }, "Rounded corner button"));
};

exports.WithRoundedCorner = WithRoundedCorner;