"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.BadgeContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../../Utils/Colors");

var _BadgeVariant = require("./BadgeVariant");

var _Spacing = require("../../Layout/Spacing");

var BadgeContainer = _styledComponents["default"].div.withConfig({
  displayName: "BadgeStyle__BadgeContainer",
  componentId: "sc-vaj8hs-0"
})(["position:relative;display:inline-flex;color:", ";", " border-radius:3px;margin:0 ", "px;padding:0 ", "px;height:17px;min-width:18px;align-items:center;justify-content:center;span{font-size:12px;font-weight:700;text-align:center;}"], _Colors.Greyscale.white, function (_ref) {
  var variant = _ref.variant;

  switch (variant) {
    case _BadgeVariant.BadgeVariant.BLUE:
      return "\n          background: " + _Colors.SecondaryColor.actionblue + ";\n        ";

    case _BadgeVariant.BadgeVariant.DIMMED:
      return "\n          background: " + _Colors.Greyscale.devilsgrey + ";\n        ";

    case _BadgeVariant.BadgeVariant.WHITE:
      return "\n          background: " + _Colors.Greyscale.white + ";\n          color: " + _Colors.SecondaryColor.actionblue + ";\n        ";

    default:
      return "\n          background: #ed9300;\n        ";
  }
}, _Spacing.Spacing[4], _Spacing.Spacing[4]);

exports.BadgeContainer = BadgeContainer;