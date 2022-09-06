"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.levels = exports.levelUsages = exports.PreviewCell = exports.PreviewBox = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require(".");

var _Colors = require("../Colors");

var levels = [[_.Shadow.up1, _.Shadow.down1], [_.Shadow.up2, _.Shadow.down2], [_.Shadow.up3, _.Shadow.down3], [_.Shadow.up4, _.Shadow.down4]];
exports.levels = levels;
var levelUsages = ['Elements that uses shadow by default', 'Elements in hovered state', 'Sticky elements, dropdown elements', 'Alerts'];
exports.levelUsages = levelUsages;

var PreviewCell = _styledComponents["default"].div.withConfig({
  displayName: "ShadowsStoriesHelpers__PreviewCell",
  componentId: "sc-cigkku-0"
})(["background-color:white;padding:16px;display:flex;*{margin-top:0 !important;margin-bottom:0 !important;}"]);

exports.PreviewCell = PreviewCell;

var PreviewBox = _styledComponents["default"].div.withConfig({
  displayName: "ShadowsStoriesHelpers__PreviewBox",
  componentId: "sc-cigkku-1"
})(["box-shadow:", ";margin:16px;border:1px solid black;background-color:", ";width:32px;height:32px;"], function (_ref) {
  var shadow = _ref.shadow;
  return shadow;
}, _Colors.PrimaryColor.glintsyellow);

exports.PreviewBox = PreviewBox;