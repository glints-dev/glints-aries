"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.GreyBackground = exports.Content = exports.Box = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = require("../../../src/Layout/Box");

var GreyBackground = _styledComponents["default"].div.withConfig({
  displayName: "BoxStoryStyle__GreyBackground",
  componentId: "sc-1avr4wr-0"
})(["display:inline-block;background-color:#f3f3f3;"]);

exports.GreyBackground = GreyBackground;

var Content = _styledComponents["default"].span.withConfig({
  displayName: "BoxStoryStyle__Content",
  componentId: "sc-1avr4wr-1"
})(["background-color:white;"]);

exports.Content = Content;
var Box = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "BoxStoryStyle__Box",
  componentId: "sc-1avr4wr-2"
})(["background-color:#4caf50;"]);
exports.Box = Box;