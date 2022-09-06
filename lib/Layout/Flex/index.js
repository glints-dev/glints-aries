"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.StyledFlex = exports.Flex = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = require("../Box");

var _excluded = ["flexDirection", "justifyContent", "alignItems", "flexWrap"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledFlex = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "Flex__StyledFlex",
  componentId: "sc-11ryoct-0"
})(["display:flex;flex-direction:", ";justify-content:", ";align-items:", ";flex-wrap:", ";"], function (_ref) {
  var flexDirection = _ref.flexDirection;
  return flexDirection;
}, function (_ref2) {
  var justifyContent = _ref2.justifyContent;
  return justifyContent;
}, function (_ref3) {
  var alignItems = _ref3.alignItems;
  return alignItems;
}, function (_ref4) {
  var flexWrap = _ref4.flexWrap;
  return flexWrap;
});
exports.StyledFlex = StyledFlex;

var Flex = function Flex(_ref5) {
  var _ref5$flexDirection = _ref5.flexDirection,
      flexDirection = _ref5$flexDirection === void 0 ? 'row' : _ref5$flexDirection,
      _ref5$justifyContent = _ref5.justifyContent,
      justifyContent = _ref5$justifyContent === void 0 ? 'flex-start' : _ref5$justifyContent,
      _ref5$alignItems = _ref5.alignItems,
      alignItems = _ref5$alignItems === void 0 ? 'stretch' : _ref5$alignItems,
      _ref5$flexWrap = _ref5.flexWrap,
      flexWrap = _ref5$flexWrap === void 0 ? 'nowrap' : _ref5$flexWrap,
      restProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref5, _excluded);
  return /*#__PURE__*/React.createElement(StyledFlex, (0, _extends2["default"])({
    flexDirection: flexDirection,
    justifyContent: justifyContent,
    alignItems: alignItems,
    flexWrap: flexWrap
  }, restProps));
};

exports.Flex = Flex;