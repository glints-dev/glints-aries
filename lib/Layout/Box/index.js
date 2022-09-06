"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.StyledBox = exports.Box = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _StyleConfig = require("../../Utils/StyleConfig");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var theme = {
  breakpoints: {
    mobileS: _StyleConfig.ScreenSize.mobileS + "px",
    mobileM: _StyleConfig.ScreenSize.mobileM + "px",
    mobileL: _StyleConfig.ScreenSize.mobileL + "px",
    tablet: _StyleConfig.ScreenSize.tablet + "px",
    desktopS: _StyleConfig.ScreenSize.desktopS + "px",
    desktopM: _StyleConfig.ScreenSize.desktopM + "px",
    desktopL: _StyleConfig.ScreenSize.desktopL + "px"
  },

  /*
    To overwrite default space theme in case <Box p={8} /> will be styled as
    `padding: 512px` instead of `padding: 8px`. Because the index 8 of default
    space theme is 512, can refer to https://styled-system.com/api/#defaults
  */
  space: [0]
};

var StyledBox = _styledComponents["default"].div.withConfig({
  displayName: "Box__StyledBox",
  componentId: "sc-pr7b7l-0"
})(["", " ", ""], _styledSystem.space, _styledSystem.shadow);

exports.StyledBox = StyledBox;

var Box = function Box(props) {
  return /*#__PURE__*/React.createElement(StyledBox, (0, _extends2["default"])({
    theme: theme
  }, props));
};

exports.Box = Box;