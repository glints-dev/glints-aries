import React from 'react';
import styled from 'styled-components';
import { Shadow } from './Shadow';
export var ColorSampler = styled.div.withConfig({
  displayName: "ColorsStoriesHelpers__ColorSampler",
  componentId: "sc-1euu88z-0"
})(["display:flex;flex-wrap:wrap;justify-content:space-evenly;"]);
var StyledColorSample = styled.div.withConfig({
  displayName: "ColorsStoriesHelpers__StyledColorSample",
  componentId: "sc-1euu88z-1"
})(["margin:1em;flex:'1 20%';"]);
var ColorBox = styled.div.withConfig({
  displayName: "ColorsStoriesHelpers__ColorBox",
  componentId: "sc-1euu88z-2"
})(["display:flex;justify-content:center;align-items:center;width:120px;height:80px;margin:1em auto;background-color:", ";font-size:14px;font-weight:bold;color:", ";box-shadow:", ";"], function (_ref) {
  var bgColor = _ref.bgColor;
  return bgColor;
}, function (_ref2) {
  var fontColor = _ref2.fontColor;
  return fontColor;
}, Shadow.down1);
var ColorLabel = styled.code.withConfig({
  displayName: "ColorsStoriesHelpers__ColorLabel",
  componentId: "sc-1euu88z-3"
})(["display:flex;justify-content:center;font-size:16px;"]);
export var ColorSample = function ColorSample(_ref3) {
  var bgColor = _ref3.bgColor,
      fontColor = _ref3.fontColor,
      name = _ref3.name;
  return /*#__PURE__*/React.createElement(StyledColorSample, null, /*#__PURE__*/React.createElement(ColorBox, {
    bgColor: bgColor,
    fontColor: fontColor
  }, /*#__PURE__*/React.createElement("code", null, bgColor)), /*#__PURE__*/React.createElement(ColorLabel, null, name));
};