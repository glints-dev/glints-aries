"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.AddTag = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../../../Utils/Colors");

var _BasicTag = _interopRequireDefault(require("../BasicTag"));

var AddTag = (0, _styledComponents["default"])(_BasicTag["default"]).withConfig({
  displayName: "AddTag",
  componentId: "sc-ggz15u-0"
})(["border-style:dashed;border-color:", ";&:hover{border-color:", ";&:active{border-color:", ";}"], _Colors.Greyscale.lightgrey, _Colors.Greyscale.grey, _Colors.Greyscale.black);
exports.AddTag = AddTag;