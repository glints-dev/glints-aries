"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ResetTag = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../../../Utils/Colors");

var _BasicTag = _interopRequireDefault(require("../BasicTag"));

var ResetTag = (0, _styledComponents["default"])(_BasicTag["default"]).withConfig({
  displayName: "ResetTag",
  componentId: "sc-be45u9-0"
})(["color:", ";border-style:solid;border-color:transparent;background-color:rgba(236,39,43,0.05);&:hover{background-color:rgba(236,39,43,0.1);}&:active{background-color:rgba(236,39,43,0.2);}"], _Colors.PrimaryColor.glintsred);
exports.ResetTag = ResetTag;