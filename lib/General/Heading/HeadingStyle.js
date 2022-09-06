"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.HeadingContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../../Utils/Colors");

var HeadingContainer = _styledComponents["default"].h1.withConfig({
  displayName: "HeadingStyle__HeadingContainer",
  componentId: "sc-2rxtwu-0"
})(["position:relative;display:", ";font-size:2em;text-transform:", ";span{background-image:", ";}"], function (_ref) {
  var inline = _ref.inline;
  return inline ? 'inline-block' : 'block';
}, function (_ref2) {
  var uppercaseText = _ref2.uppercaseText;
  return uppercaseText ? 'uppercase' : null;
}, "linear-gradient(to top, " + _Colors.PrimaryColor.glintsyellow + " 40%, transparent 0)");

exports.HeadingContainer = HeadingContainer;