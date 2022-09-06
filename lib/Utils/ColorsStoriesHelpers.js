"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ColorSampler = exports.ColorSample = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Shadow = require("./Shadow");

var ColorSampler = _styledComponents["default"].div.withConfig({
  displayName: "ColorsStoriesHelpers__ColorSampler",
  componentId: "sc-1euu88z-0"
})(["display:flex;flex-wrap:wrap;justify-content:space-evenly;"]);

exports.ColorSampler = ColorSampler;

var StyledColorSample = _styledComponents["default"].div.withConfig({
  displayName: "ColorsStoriesHelpers__StyledColorSample",
  componentId: "sc-1euu88z-1"
})(["margin:1em;flex:'1 20%';"]);

var ColorBox = _styledComponents["default"].div.withConfig({
  displayName: "ColorsStoriesHelpers__ColorBox",
  componentId: "sc-1euu88z-2"
})(["display:flex;justify-content:center;align-items:center;width:120px;height:80px;margin:1em auto;background-color:", ";font-size:14px;font-weight:bold;color:", ";box-shadow:", ";"], function (_ref) {
  var bgColor = _ref.bgColor;
  return bgColor;
}, function (_ref2) {
  var fontColor = _ref2.fontColor;
  return fontColor;
}, _Shadow.Shadow.down1);

var ColorLabel = _styledComponents["default"].code.withConfig({
  displayName: "ColorsStoriesHelpers__ColorLabel",
  componentId: "sc-1euu88z-3"
})(["display:flex;justify-content:center;font-size:16px;"]);

var ColorSample = function ColorSample(_ref3) {
  var bgColor = _ref3.bgColor,
      fontColor = _ref3.fontColor,
      name = _ref3.name;
  return /*#__PURE__*/_react["default"].createElement(StyledColorSample, null, /*#__PURE__*/_react["default"].createElement(ColorBox, {
    bgColor: bgColor,
    fontColor: fontColor
  }, /*#__PURE__*/_react["default"].createElement("code", null, bgColor)), /*#__PURE__*/_react["default"].createElement(ColorLabel, null, name));
};

exports.ColorSample = ColorSample;