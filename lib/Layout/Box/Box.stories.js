"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.ResponsiveSpacing = exports.Interactive = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("./index");

var _GlintsContainer = require("../../Layout/GlintsContainer/GlintsContainer");

var S = _interopRequireWildcard(require("./BoxStoryStyle"));

var _constants = require("./constants");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = {
  title: 'Layout/Box',
  component: _index.Box,
  argTypes: _constants.boxArgTypes,
  decorators: [function (Story) {
    return /*#__PURE__*/_react["default"].createElement(_GlintsContainer.BaseContainer, null, Story());
  }]
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(S.GreyBackground, null, /*#__PURE__*/_react["default"].createElement(S.Box, args, /*#__PURE__*/_react["default"].createElement(S.Content, null, "Content")));
};

var Interactive = Template.bind({});
exports.Interactive = Interactive;
Interactive.args = {
  p: 32,
  m: 64
};
var ResponsiveSpacing = Template.bind({});
exports.ResponsiveSpacing = ResponsiveSpacing;
ResponsiveSpacing.args = {
  p: {
    "default": 32,
    desktopS: 64
  },
  m: {
    "default": 64,
    desktopS: 32
  }
};
ResponsiveSpacing.parameters = {
  docs: {
    description: {
      story: "Resize the viewport to see the responsive padding and margin change\n\n      Following is the Breakpoint Aliases table for Responsive Space Object\n\n      | Alias    | Device         | Description                           |\n      |----------|----------------|---------------------------------------|\n      | default  | -              | define the base, non-responsive value |\n      | mobileS  | Mobile Small   | @media screen and (min-width: 320px)  |\n      | mobileM  | Mobile Medium  | @media screen and (min-width: 480px)  |\n      | mobileL  | Mobile Large   | @media screen and (min-width: 640px)  |\n      | tablet   | Tablet         | @media screen and (min-width: 768px)  |\n      | desktopS | Desktop Small  | @media screen and (min-width: 1024px) |\n      | desktopM | Desktop Medium | @media screen and (min-width: 1260px) |\n      | desktopL | Desktop Large  | @media screen and (min-width: 1440px) |\n      "
    }
  }
};