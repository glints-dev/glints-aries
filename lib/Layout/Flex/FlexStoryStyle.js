"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Item = exports.Flex = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Flex = require("../../../src/Layout/Flex");

var Item = _styledComponents["default"].span.withConfig({
  displayName: "FlexStoryStyle__Item",
  componentId: "sc-jlb02q-0"
})(["display:flex;justify-content:center;align-items:center;width:50px;height:50px;background-color:#f3f3f3;"]);

exports.Item = Item;
var Flex = (0, _styledComponents["default"])(_Flex.Flex).withConfig({
  displayName: "FlexStoryStyle__Flex",
  componentId: "sc-jlb02q-1"
})(["width:500px;height:150px;padding:16px;background-color:#4caf50;"]);
exports.Flex = Flex;