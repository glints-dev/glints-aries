"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TagContent = exports.TagContainer = exports.StartIconContainer = exports.EndIconContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../../Utils/Colors");

var TagContent = _styledComponents["default"].label.withConfig({
  displayName: "TagStyle__TagContent",
  componentId: "sc-66xi2f-0"
})(["display:flex;align-items:center;padding:5px 15px;outline:none;"]);

exports.TagContent = TagContent;

var TagContainer = _styledComponents["default"].div.withConfig({
  displayName: "TagStyle__TagContainer",
  componentId: "sc-66xi2f-1"
})(["display:inline-flex;border-radius:", ";border-width:1px;border-style:solid;font-size:14px;color:", ";", ";", " &:focus{outline:none;}&:focus > ", "{outline:5px auto -webkit-focus-ring-color;}"], function (_ref) {
  var block = _ref.block;
  return !block && '20px';
}, _Colors.Greyscale.black, function (_ref2) {
  var isClickable = _ref2.isClickable;

  if (isClickable) {
    return TagContent + " {\n        cursor: pointer;\n      }";
  }
}, function (_ref3) {
  var outline = _ref3.outline;

  if (!outline) {
    return "\n        background: " + _Colors.Greyscale.softgrey + ";\n        border-color: " + _Colors.Greyscale.lightgrey + ";\n      ";
  } else {
    return "\n        border-color: " + _Colors.Greyscale.black + ";\n      ";
  }
}, TagContent);

exports.TagContainer = TagContainer;

var IconContainer = _styledComponents["default"].span.withConfig({
  displayName: "TagStyle__IconContainer",
  componentId: "sc-66xi2f-2"
})(["display:inline-flex;svg{width:12px;height:12px;}"]);

var StartIconContainer = (0, _styledComponents["default"])(IconContainer).withConfig({
  displayName: "TagStyle__StartIconContainer",
  componentId: "sc-66xi2f-3"
})(["margin-right:8px;"]);
exports.StartIconContainer = StartIconContainer;
var EndIconContainer = (0, _styledComponents["default"])(IconContainer).withConfig({
  displayName: "TagStyle__EndIconContainer",
  componentId: "sc-66xi2f-4"
})(["margin-left:8px;svg{fill:", ";cursor:pointer;&:hover,&:active{fill:", ";}}"], _Colors.Greyscale.grey, _Colors.Greyscale.black);
exports.EndIconContainer = EndIconContainer;