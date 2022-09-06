"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.RemoveDots = exports.Interactive = exports.InitialItem = exports.FullContent = exports.CustomizedRenderRightIcon = exports.CustomizedRenderLeftIcon = exports.Autoplay = exports.ArrowWhite = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Slider = require("./Slider");

var _GlintsContainer = require("../../Layout/GlintsContainer/GlintsContainer");

var _Colors = require("../../Utils/Colors");

var _components = require("../../General/Icon/components");

var _ArrowNextDoubleIcon = _interopRequireDefault(require("../../General/Icon/components/ArrowNextDoubleIcon"));

var _default = {
  title: 'Display/Slider',
  component: _Slider.Slider,
  decorators: [function (Story) {
    return /*#__PURE__*/_react["default"].createElement(_GlintsContainer.BaseContainer, null, Story());
  }],
  argTypes: {
    className: {
      table: {
        disable: true
      }
    },
    containerRef: {
      table: {
        disable: true
      }
    },
    afterChange: {
      control: {
        type: null
      }
    },
    renderLeftIcon: {
      control: {
        type: null
      }
    },
    renderRightIcon: {
      control: {
        type: null
      }
    }
  }
};
exports["default"] = _default;

var Template = function Template(_ref) {
  var args = (0, _extends2["default"])({}, _ref);
  return /*#__PURE__*/_react["default"].createElement(_Slider.Slider, args, /*#__PURE__*/_react["default"].createElement(_Slider.Slider.Item, null, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&h=500&q=80",
    alt: "Profile Picture"
  })), /*#__PURE__*/_react["default"].createElement(_Slider.Slider.Item, null, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://images.unsplash.com/photo-1599335937498-90b82b84d603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80",
    alt: "Nature"
  })), /*#__PURE__*/_react["default"].createElement(_Slider.Slider.Item, null, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80",
    alt: "Keyboard"
  })));
};

var Interactive = Template.bind({});
exports.Interactive = Interactive;
Interactive.args = {};
var Autoplay = Template.bind({});
exports.Autoplay = Autoplay;
Autoplay.args = {
  autoplay: true
};
var FullContent = Template.bind({});
exports.FullContent = FullContent;
FullContent.args = {
  fullContent: true
};
var ArrowWhite = Template.bind({});
exports.ArrowWhite = ArrowWhite;
ArrowWhite.args = {
  arrowWhite: true
};
var RemoveDots = Template.bind({});
exports.RemoveDots = RemoveDots;
RemoveDots.args = {
  removeDots: true
};
var InitialItem = Template.bind({});
exports.InitialItem = InitialItem;
InitialItem.args = {
  initialItem: 2
};

var CustomizedRenderLeftIcon = function CustomizedRenderLeftIcon() {
  return /*#__PURE__*/_react["default"].createElement(_Slider.Slider, {
    renderLeftIcon: function renderLeftIcon(disabled) {
      var color = disabled ? _Colors.Greyscale.grey : _Colors.SecondaryColor.actionblue;
      return /*#__PURE__*/_react["default"].createElement(_components.ArrowBackDoubleIcon, {
        color: color
      });
    }
  }, /*#__PURE__*/_react["default"].createElement(_Slider.Slider.Item, null, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&h=500&q=80",
    alt: "Profile Picture"
  })), /*#__PURE__*/_react["default"].createElement(_Slider.Slider.Item, null, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://images.unsplash.com/photo-1599335937498-90b82b84d603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80",
    alt: "Nature"
  })), /*#__PURE__*/_react["default"].createElement(_Slider.Slider.Item, null, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80",
    alt: "Keyboard"
  })));
};

exports.CustomizedRenderLeftIcon = CustomizedRenderLeftIcon;

var CustomizedRenderRightIcon = function CustomizedRenderRightIcon() {
  return /*#__PURE__*/_react["default"].createElement(_Slider.Slider, {
    renderRightIcon: function renderRightIcon(disabled) {
      var color = disabled ? _Colors.Greyscale.grey : _Colors.SecondaryColor.actionblue;
      return /*#__PURE__*/_react["default"].createElement(_ArrowNextDoubleIcon["default"], {
        color: color
      });
    }
  }, /*#__PURE__*/_react["default"].createElement(_Slider.Slider.Item, null, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://images.unsplash.com/photo-1512979797260-1a645592b48f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2fc2ca84d8c407bd48ab15ea27c87eaf&auto=format&fit=crop&h=500&q=80",
    alt: "Profile Picture"
  })), /*#__PURE__*/_react["default"].createElement(_Slider.Slider.Item, null, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://images.unsplash.com/photo-1599335937498-90b82b84d603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80",
    alt: "Nature"
  })), /*#__PURE__*/_react["default"].createElement(_Slider.Slider.Item, null, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://images.unsplash.com/photo-1598662779094-110c2bad80b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&q=80",
    alt: "Keyboard"
  })));
};

exports.CustomizedRenderRightIcon = CustomizedRenderRightIcon;