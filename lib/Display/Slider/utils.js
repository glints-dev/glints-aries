"use strict";

exports.__esModule = true;
exports.getArrowColor = void 0;

var _Colors = require("../../Utils/Colors");

var getArrowColor = function getArrowColor(isWhite, isDisabled) {
  var color = isWhite ? _Colors.Greyscale.white : _Colors.Greyscale.black;
  return isDisabled ? '#c7c7c7' : color;
};

exports.getArrowColor = getArrowColor;