"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.DividerContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../../Utils/Colors");

var DividerContainer = _styledComponents["default"].div.withConfig({
  displayName: "DividerStyle__DividerContainer",
  componentId: "sc-1s5eeou-0"
})(["display:flex;width:100%;height:0.15em;", ""], function (_ref) {
  var theme = _ref.theme;

  switch (theme) {
    case 'red':
      return "\n          background: " + _Colors.PrimaryColor.glintsred + ";\n        ";

    case 'blue':
      return "\n          background: " + _Colors.PrimaryColor.glintsblue + ";\n        ";

    case 'yellow':
      return "\n          background: " + _Colors.PrimaryColor.glintsyellow + ";\n        ";

    case 'white':
      return "\n          background: " + _Colors.Greyscale.white + ";\n        ";

    case 'grey':
      return "\n          background: " + _Colors.Greyscale.lightgrey + ";\n        ";

    default:
      return "\n          background: " + _Colors.Greyscale.black + ";\n        ";
  }
});

exports.DividerContainer = DividerContainer;