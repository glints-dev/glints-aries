"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Title = exports.TITLE_VARIANTS = exports.TITLE_FONT_SIZES = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _TITLE_FONT_SIZES;

var TITLE_VARIANTS = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6'
};
exports.TITLE_VARIANTS = TITLE_VARIANTS;
var TITLE_FONT_SIZES = (_TITLE_FONT_SIZES = {}, _TITLE_FONT_SIZES[TITLE_VARIANTS.h1] = 50, _TITLE_FONT_SIZES[TITLE_VARIANTS.h2] = 36, _TITLE_FONT_SIZES[TITLE_VARIANTS.h3] = 30, _TITLE_FONT_SIZES[TITLE_VARIANTS.h4] = 26, _TITLE_FONT_SIZES[TITLE_VARIANTS.h5] = 22, _TITLE_FONT_SIZES[TITLE_VARIANTS.h6] = 18, _TITLE_FONT_SIZES);
exports.TITLE_FONT_SIZES = TITLE_FONT_SIZES;

var Title = _styledComponents["default"].h1.withConfig({
  displayName: "TitleStyles__Title",
  componentId: "sc-6snwzj-0"
})(["margin:0;font-weight:bold;font-stretch:normal;font-style:normal;letter-spacing:normal;color:", ";text-transform:", ";", ";", ""], function (props) {
  return props.color;
}, function (props) {
  if (props.uppercase) return 'uppercase';
}, function (props) {
  switch (props.as) {
    case TITLE_VARIANTS.h1:
      return "\n        font-size: " + TITLE_FONT_SIZES.h1 + "px;\n        font-weight: 900;\n        line-height: " + (props.uppercase ? '60px' : '70px') + ";\n      ";

    case TITLE_VARIANTS.h2:
      return "\n        font-size: " + TITLE_FONT_SIZES.h2 + "px;\n        line-height: line-height: " + (props.uppercase ? '43.2px' : '50.4px') + ";\n      ";

    case TITLE_VARIANTS.h3:
      return "\n        font-size: " + TITLE_FONT_SIZES.h3 + "px;\n        line-height: line-height: " + (props.uppercase ? '36px' : '42px') + ";\n      ";

    case TITLE_VARIANTS.h4:
      return "\n        font-size: " + TITLE_FONT_SIZES.h4 + "px;\n        line-height: 36.4px;\n      ";

    case TITLE_VARIANTS.h5:
      return "\n        font-size: " + TITLE_FONT_SIZES.h5 + "px;\n        line-height: 28px;\n      ";

    case TITLE_VARIANTS.h6:
      return "\n        font-size: " + TITLE_FONT_SIZES.h6 + "px;\n        line-height: 25.2px;\n      ";

    default:
      return "\n        font-size: " + TITLE_FONT_SIZES.h1 + "px;\n        font-weight: 900;\n        line-height: " + (props.uppercase ? '60px' : '70px') + ";\n    ";
  }
}, function (props) {
  if (props.ellipsis) {
    return "\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n      ";
  }
});

exports.Title = Title;