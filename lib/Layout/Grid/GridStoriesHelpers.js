"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Cell = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../../Utils/Colors");

var Cell = _styledComponents["default"].div.withConfig({
  displayName: "GridStoriesHelpers__Cell",
  componentId: "sc-8evtou-0"
})(["background-color:", ";text-align:center;padding:8px;border:1px solid black;"], _Colors.Greyscale.softgrey);

exports.Cell = Cell;