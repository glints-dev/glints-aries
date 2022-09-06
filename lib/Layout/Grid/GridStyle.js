"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.RowContainer = exports.ColumnContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _StyleConfig = require("../../Utils/StyleConfig");

var ColumnContainer = _styledComponents["default"].div.withConfig({
  displayName: "GridStyle__ColumnContainer",
  componentId: "sc-10a4cmt-0"
})(["", ""], function (_ref) {
  var xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      xsOrder = _ref.xsOrder,
      smOrder = _ref.smOrder,
      mdOrder = _ref.mdOrder;
  return "\n    max-width: 100%;\n    flex-basis: calc(100% / 12 * " + xs + ");\n    order: " + (xsOrder || 0) + ";\n    @media (min-width: " + _StyleConfig.ScreenSize.mobileS + "px) {\n      flex-basis: calc(100% / 12 * " + xs + ");\n      order: " + (xsOrder || 0) + ";\n    }\n\n    @media (min-width: " + _StyleConfig.ScreenSize.mobileM + "px) {\n      flex-basis: calc(100% / 12 * " + xs + ");\n      order: " + (xsOrder || 0) + ";\n    }\n\n    @media (min-width: " + _StyleConfig.ScreenSize.mobileL + "px) {\n      flex-basis: calc(100% / 12 * " + xs + ");\n      order: " + (xsOrder || 0) + ";\n    }\n\n    @media (min-width: " + _StyleConfig.ScreenSize.tablet + "px) {\n      flex-basis: calc(100% / 12 * " + sm + ");\n      order: " + (smOrder || 0) + ";\n    }\n\n    @media (min-width: " + _StyleConfig.ScreenSize.desktopS + "px) {\n      flex-basis: calc(100% / 12 * " + md + ");\n      order: " + (mdOrder || 0) + ";\n    }\n\n    @media (min-width: " + _StyleConfig.ScreenSize.desktopM + "px) {\n      flex-basis: calc(100% / 12 * " + md + ");\n      order: " + (mdOrder || 0) + ";\n    }\n\n    @media (min-width: " + _StyleConfig.ScreenSize.desktopL + "px) {\n      flex-basis: calc(100% / 12 * " + md + ");\n      order: " + (mdOrder || 0) + ";\n    }\n  ";
});

exports.ColumnContainer = ColumnContainer;

var RowContainer = _styledComponents["default"].div.withConfig({
  displayName: "GridStyle__RowContainer",
  componentId: "sc-10a4cmt-1"
})(["display:flex;flex-direction:row;flex-wrap:wrap;flex-basis:100%;", " ", ""], function (_ref2) {
  var alignContent = _ref2.alignContent;

  if (alignContent) {
    return "\n        align-content: " + alignContent + ";\n        align-items: " + alignContent + ";\n        ";
  }

  return null;
}, function (_ref3) {
  var justifyContent = _ref3.justifyContent;

  if (justifyContent) {
    return "\n        justify-content: " + justifyContent + ";\n        justify-items: " + justifyContent + ";\n      ";
  }

  return null;
});

exports.RowContainer = RowContainer;