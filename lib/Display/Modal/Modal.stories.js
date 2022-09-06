"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.ScreenCenteredWithALotOfContent = exports.ScreenCentered = exports.Interactive = exports.FullScreen = exports.FooterResponsiveness = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _lodash = require("lodash");

var _Modal = require("./Modal");

var _Button = require("../../General/Button/Button");

var _GlintsContainer = require("../../Layout/GlintsContainer/GlintsContainer");

var _excluded = ["children", "title", "buttonTexts"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  title: 'Display/Modal',
  component: _Modal.Modal,
  decorators: [function (Story) {
    return /*#__PURE__*/_react["default"].createElement(_GlintsContainer.BaseContainer, null, Story());
  }]
};
exports["default"] = _default;
var defaultTitle = 'Lorem Ipsum';
var defaultChildren = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

var Template = function Template(_ref) {
  var children = _ref.children,
      title = _ref.title,
      _ref$buttonTexts = _ref.buttonTexts,
      buttonTexts = _ref$buttonTexts === void 0 ? [] : _ref$buttonTexts,
      args = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);

  var _useState = (0, _react.useState)(false),
      isModalVisible = _useState[0],
      setIsModalVisible = _useState[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "solid-blue",
    onClick: function onClick() {
      return setIsModalVisible(!isModalVisible);
    }
  }, "Toggle"), /*#__PURE__*/_react["default"].createElement(_Modal.Modal, (0, _extends2["default"])({}, args, {
    title: title || defaultTitle,
    isVisible: isModalVisible,
    onClose: function onClose() {
      return setIsModalVisible(false);
    },
    footer: [/*#__PURE__*/_react["default"].createElement(_Button.Button, {
      variant: "ghost",
      onClick: function onClick() {
        return setIsModalVisible(false);
      },
      key: "cancel"
    }, buttonTexts[0] || 'Cancel'), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      variant: "solid-blue",
      onClick: function onClick() {
        return setIsModalVisible(false);
      },
      key: "save"
    }, buttonTexts[1] || 'Save')]
  }), children || defaultChildren));
};

var Interactive = Template.bind({});
exports.Interactive = Interactive;
Interactive.args = {
  title: defaultTitle,
  children: defaultChildren
};
var ScreenCentered = Template.bind({});
exports.ScreenCentered = ScreenCentered;
ScreenCentered.args = {
  centering: true
};
var FullScreen = Template.bind({});
exports.FullScreen = FullScreen;
FullScreen.args = {
  fullscreen: true,
  children: (0, _lodash.times)(1000, (0, _lodash.constant)(defaultChildren)).join(' ')
};
var ScreenCenteredWithALotOfContent = Template.bind({});
exports.ScreenCenteredWithALotOfContent = ScreenCenteredWithALotOfContent;
ScreenCenteredWithALotOfContent.args = {
  centering: true,
  children: (0, _lodash.times)(10, (0, _lodash.constant)(defaultChildren)).join(' ')
};
var FooterResponsiveness = Template.bind({});
exports.FooterResponsiveness = FooterResponsiveness;
FooterResponsiveness.args = {
  buttonTexts: ['Looooooong Cancel', 'Loooooooong Save'],
  size: 's'
};
FooterResponsiveness.parameters = {
  docs: {
    description: {
      story: 'If all the buttons cannot fit in one row, then they will be expanded to the 100% width of the container and break into two rows.'
    }
  }
};