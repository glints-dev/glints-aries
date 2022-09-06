"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.BreadcrumbItemWrapper = exports.BreadcrumbContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../../Utils/Colors");

var BreadcrumbItemWrapper = _styledComponents["default"].label.withConfig({
  displayName: "BreadcrumbStyle__BreadcrumbItemWrapper",
  componentId: "sc-eq3cq-0"
})(["cursor:", ";font-size:1em;line-height:1.5;*{color:", ";}span{margin:0 1em;color:#aaaaaa;}"], function (_ref) {
  var active = _ref.active;
  return active ? 'default' : 'pointer';
}, function (_ref2) {
  var active = _ref2.active;
  return active ? "" + _Colors.Greyscale.grey : "" + _Colors.Greyscale.black;
});

exports.BreadcrumbItemWrapper = BreadcrumbItemWrapper;

var BreadcrumbContainer = _styledComponents["default"].div.withConfig({
  displayName: "BreadcrumbStyle__BreadcrumbContainer",
  componentId: "sc-eq3cq-1"
})(["position:relative;display:flex;background-color:", ";padding:1em;label.aries-breadcrumb-item:last-child span{display:none;}"], _Colors.Greyscale.softgrey);

exports.BreadcrumbContainer = BreadcrumbContainer;