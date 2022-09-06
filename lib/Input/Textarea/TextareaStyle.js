"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TextareaLabel = exports.TextareaInput = exports.TextareaContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../../Utils/Colors");

var TextareaContainer = _styledComponents["default"].div.withConfig({
  displayName: "TextareaStyle__TextareaContainer",
  componentId: "sc-1998n74-0"
})(["flex-grow:1;position:relative;display:flex;"]);

exports.TextareaContainer = TextareaContainer;

var TextareaLabel = _styledComponents["default"].label.withConfig({
  displayName: "TextareaStyle__TextareaLabel",
  componentId: "sc-1998n74-1"
})(["position:absolute;left:22px;top:1em;color:", ";transition:all 0.2s;pointer-events:none;font-weight:400;font-size:16px;", ""], _Colors.Greyscale.devilsgrey, function (_ref) {
  var floating = _ref.floating;

  if (floating) {
    return "\n        padding: 0 5px;\n        transform: translate3d(-15px,-20px,0);\n        transition: all .2s;\n        font-size: 12px;\n        background: " + _Colors.Greyscale.white + "\n      ";
  }
});

exports.TextareaLabel = TextareaLabel;

var TextareaInput = _styledComponents["default"].textarea.withConfig({
  displayName: "TextareaStyle__TextareaInput",
  componentId: "sc-1998n74-2"
})(["position:relative;width:100%;outline:none;font-size:16px;line-height:1.5;padding:", ";background-color:", ";border:unset;transition:border 0.5s;resize:vertical;overflow:auto;height:auto;border-radius:", ";&:disabled{cursor:not-allowed;background:", ";+ ", "{background:transparent;color:", ";}&:hover{border:2px solid ", ";}}&:hover{background-color:", ";border:unset;+ ", "{color:", ";}}&:focus{background-color:", ";border:unset;+ ", "{padding:0 5px;transform:translate3d(-15px,-20px,0);transition:all 0.2s;color:", ";font-size:12px;background:", ";}}"], function (_ref2) {
  var small = _ref2.small;
  return small ? '8px 16px' : '12px 16px';
}, function (_ref3) {
  var status = _ref3.status;
  return status === 'error' ? ' rgba(236, 39, 43, 0.08)' : 'rgb(1, 126, 183, 0.08)';
}, function (_ref4) {
  var small = _ref4.small;
  return small ? '4px' : '8px';
}, _Colors.Greyscale.softgrey, TextareaLabel, _Colors.Greyscale.grey, _Colors.Greyscale.lightgrey, function (_ref5) {
  var status = _ref5.status;
  return status === 'error' ? ' rgba(236, 39, 43, 0.08)' : 'rgb(1, 126, 183, 0.16)';
}, TextareaLabel, _Colors.Greyscale.devilsgrey, function (_ref6) {
  var status = _ref6.status;
  return status === 'error' ? ' rgba(236, 39, 43, 0.08)' : 'rgb(1, 126, 183, 0.24)';
}, TextareaLabel, _Colors.Greyscale.devilsgrey, _Colors.Greyscale.white);

exports.TextareaInput = TextareaInput;