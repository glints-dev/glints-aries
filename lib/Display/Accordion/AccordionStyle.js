"use strict";

exports.__esModule = true;
exports.PanelWrapper = exports.Label = exports.IconWrapper = exports.IconLabelWrapper = exports.ContentWrapper = exports.Content = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Colors = require("../../Utils/Colors");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var iconSize = 15;
var iconMargin = 30;
var offsetIcon = iconSize + iconMargin;
var transitionTiming = '0.24s';

var PanelWrapper = _styledComponents["default"].div.withConfig({
  displayName: "AccordionStyle__PanelWrapper",
  componentId: "sc-7hk6zs-0"
})(["border-top:solid 1px ", ";outline:none;"], _Colors.Greyscale.lightgrey);

exports.PanelWrapper = PanelWrapper;

var Container = _styledComponents["default"].div.withConfig({
  displayName: "AccordionStyle__Container",
  componentId: "sc-7hk6zs-1"
})(["", ":first-child{border-top:none;}"],
/* sc-selector */
PanelWrapper);

exports.Container = Container;

var IconLabelWrapper = _styledComponents["default"].div.withConfig({
  displayName: "AccordionStyle__IconLabelWrapper",
  componentId: "sc-7hk6zs-2"
})(["position:relative;display:flex;justify-content:", ";margin-top:30px;padding-bottom:30px;cursor:pointer;outline:none;transition:", ";&:hover{color:", ";svg{fill:", ";}}"], function (_ref) {
  var position = _ref.position;
  return position === 'left' ? 'flex-start' : 'space-between';
}, function (_ref2) {
  var active = _ref2.active;
  return active ? 'none' : "padding-bottom " + transitionTiming + " ease-in-out";
}, _Colors.SecondaryColor.actionblue, _Colors.SecondaryColor.actionblue);

exports.IconLabelWrapper = IconLabelWrapper;

var ContentWrapper = _styledComponents["default"].div.withConfig({
  displayName: "AccordionStyle__ContentWrapper",
  componentId: "sc-7hk6zs-3"
})(["visibility:", ";opacity:", ";max-height:", ";transition:all ", " ease-in-out;"], function (_ref3) {
  var active = _ref3.active;
  return active ? 'visible' : 'hidden';
}, function (_ref4) {
  var active = _ref4.active;
  return active ? '1' : '0';
}, function (_ref5) {
  var active = _ref5.active;
  return active ? '100rem' : '0';
}, transitionTiming);

exports.ContentWrapper = ContentWrapper;

var Content = _styledComponents["default"].div.withConfig({
  displayName: "AccordionStyle__Content",
  componentId: "sc-7hk6zs-4"
})(["margin-left:", ";margin-right:", ";padding-bottom:30px;cursor:default;"], function (_ref6) {
  var position = _ref6.position;
  return position === 'left' ? offsetIcon + "px" : '0';
}, function (_ref7) {
  var position = _ref7.position;
  return position === 'right' ? offsetIcon + "px" : '0';
});

exports.Content = Content;

var Label = _styledComponents["default"].div.withConfig({
  displayName: "AccordionStyle__Label",
  componentId: "sc-7hk6zs-5"
})(["margin:0;font-size:18px;font-weight:bold;line-height:1.4em;"]);

exports.Label = Label;

var IconWrapper = _styledComponents["default"].div.withConfig({
  displayName: "AccordionStyle__IconWrapper",
  componentId: "sc-7hk6zs-6"
})(["display:flex;align-items:center;svg{width:", ";height:", ";}", ""], iconSize + "px", iconSize + "px", function (_ref8) {
  var position = _ref8.position,
      active = _ref8.active;

  if (position === 'right') {
    return (0, _styledComponents.css)(["transform:", ";transition:transform ", ";"], active ? 'rotate(180deg)' : 'none', transitionTiming);
  }

  return (0, _styledComponents.css)(["margin-right:", ";"], iconMargin + "px");
});

exports.IconWrapper = IconWrapper;