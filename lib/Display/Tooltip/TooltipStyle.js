"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TooltipMessage = exports.TooltipContent = exports.TooltipContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../../Utils/Colors");

var TooltipContainer = _styledComponents["default"].div.withConfig({
  displayName: "TooltipStyle__TooltipContainer",
  componentId: "sc-16e8edg-0"
})(["position:relative;display:inline-flex;"]);

exports.TooltipContainer = TooltipContainer;

var TooltipContent = _styledComponents["default"].div.withConfig({
  displayName: "TooltipStyle__TooltipContent",
  componentId: "sc-16e8edg-1"
})(["position:absolute;z-index:10;width:100%;", " &:after{content:'';position:absolute;}"], function (_ref) {
  var position = _ref.position;

  switch (position) {
    case 'bottom':
      return "\n          top: 100%;\n          left: 50%;\n          padding-top: 9px;\n          transform: translateX(-50%);\n\n          &:after {\n            border-left: 9px solid transparent;\n            border-right: 9px solid transparent;\n            border-bottom: 9px solid " + _Colors.Greyscale.black + ";\n            top: 0;\n            left: 50%;\n            transform: translateX(-50%);\n          }\n        ";

    case 'left':
      return "\n          top: 50%;\n          right: 100%;\n          padding-right: 9px;\n          transform: translateY(-50%);\n          \n          &:after {\n            border-left: 9px solid " + _Colors.Greyscale.black + ";\n            border-top: 9px solid transparent;\n            border-bottom: 9px solid transparent;\n            top: 50%;\n            right: 0;\n            transform: translateY(-50%);\n          }\n        ";

    case 'right':
      return "\n          top: 50%;\n          left: 100%;\n          padding-left: 9px;\n          transform: translateY(-50%);\n          \n          &::after {\n            border-right: 9px solid " + _Colors.Greyscale.black + ";\n            border-top: 9px solid transparent;\n            border-bottom: 9px solid transparent;\n            top: 50%;\n            left: 0;\n            transform: translateY(-50%);\n          }\n        ";

    default:
      return "\n          bottom: 100%;\n          left: 50%;\n          padding-bottom: 9px;\n          transform: translateX(-50%);\n\n          &:after {\n            border-left: 9px solid transparent;\n            border-right: 9px solid transparent;\n            border-top: 9px solid " + _Colors.Greyscale.black + ";\n            bottom: 0;\n            left: 50%;\n            transform: translateX(-50%);\n          }\n        ";
  }
});

exports.TooltipContent = TooltipContent;

var TooltipMessage = _styledComponents["default"].div.withConfig({
  displayName: "TooltipStyle__TooltipMessage",
  componentId: "sc-16e8edg-2"
})(["background:", ";border-radius:3px;color:", ";line-height:1.5;font-size:12px;padding:10px;text-align:center;"], _Colors.Greyscale.black, _Colors.Greyscale.white);

exports.TooltipMessage = TooltipMessage;