"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.SwipeableItemWrapper = exports.SwipeableContainer = exports.SwipeableCardExample = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _StyleConfig = require("../../Utils/StyleConfig");

var _Colors = require("../../Utils/Colors");

var _Shadow = require("../../Utils/Shadow");

var SwipeableContainer = _styledComponents["default"].div.withConfig({
  displayName: "SwipeableStyle__SwipeableContainer",
  componentId: "sc-xvh6jb-0"
})(["display:flex;position:relative;overflow-x:auto;&::-webkit-scrollbar{appearance:none;height:7px;}&::-webkit-scrollbar-thumb{border-radius:4px;background-color:rgba(0,0,0,0.25);}@media (max-width:", "px){scrollbar-width:none;&::-webkit-scrollbar{display:none;}}"], _StyleConfig.ScreenSize.desktopS);

exports.SwipeableContainer = SwipeableContainer;

var SwipeableItemWrapper = _styledComponents["default"].div.withConfig({
  displayName: "SwipeableStyle__SwipeableItemWrapper",
  componentId: "sc-xvh6jb-1"
})(["display:inline-flex;margin:0 1em;padding:1em 0;&:first-child{margin-left:0;}&:last-child{margin-right:0;}"]);

exports.SwipeableItemWrapper = SwipeableItemWrapper;

var SwipeableCardExample = _styledComponents["default"].div.withConfig({
  displayName: "SwipeableStyle__SwipeableCardExample",
  componentId: "sc-xvh6jb-2"
})(["width:150px;height:150px;background:", ";box-shadow:", ";display:flex;justify-content:center;align-items:center;"], _Colors.Greyscale.white, _Shadow.Shadow.down1);

exports.SwipeableCardExample = SwipeableCardExample;