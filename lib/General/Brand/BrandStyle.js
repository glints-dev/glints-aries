"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.BrandImage = exports.BrandContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var BrandContainer = _styledComponents["default"].div.withConfig({
  displayName: "BrandStyle__BrandContainer",
  componentId: "sc-xckggx-0"
})(["position:relative;display:inline-flex;cursor:pointer;&:focus{outline:none;}&:focus > img{outline:5px auto -webkit-focus-ring-color;}"]);

exports.BrandContainer = BrandContainer;

var BrandImage = _styledComponents["default"].img.withConfig({
  displayName: "BrandStyle__BrandImage",
  componentId: "sc-xckggx-1"
})(["object-fit:contain;width:3em;height:3em;outline:none;"]);

exports.BrandImage = BrandImage;