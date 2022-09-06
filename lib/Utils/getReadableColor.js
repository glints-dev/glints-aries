"use strict";

exports.__esModule = true;
exports.getReadableColor = void 0;

//https://stackoverflow.com/a/35970186
var getReadableColor = function getReadableColor(hex) {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
  }

  var r = parseInt(hex.slice(0, 2), 16);
  var g = parseInt(hex.slice(2, 4), 16);
  var b = parseInt(hex.slice(4, 6), 16);
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#FFFFFF';
};

exports.getReadableColor = getReadableColor;