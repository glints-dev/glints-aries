"use strict";

exports.__esModule = true;
exports.AlertMessage = exports.AlertIcon = exports.AlertContainer = exports.AlertClose = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _StyleConfig = require("../../Utils/StyleConfig");

var _Shadow = require("../../Utils/Shadow");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var fadeDown = (0, _styledComponents.keyframes)(["0%{transform:translateY(-100%);top:0;}100%{transform:translateY(0%);top:16px;}"]);
var fadeUp = (0, _styledComponents.keyframes)(["0%{transform:translateY(0%);top:12px;}100%{transform:translateY(-100%);top:0;}"]);

var AlertContainer = _styledComponents["default"].div.withConfig({
  displayName: "AlertStyle__AlertContainer",
  componentId: "sc-fcjw72-0"
})(["position:fixed;left:0;right:0;margin:0 auto;top:16px;animation:", " 0.3s ease-in-out;&[aria-hidden='true']{top:0;animation:", " 0.3s ease-in-out;}display:flex;align-items:center;box-shadow:", ";padding:12px;border-radius:4px;z-index:5000;min-width:296px;max-width:", "px;outline:none;line-height:1.5;font-size:14px;color:#454545;@media (max-width:", "px){max-width:95%;}background:#c5ecfa;&[data-type='success']{background:#c2e2da;}&[data-type='warning']{background:#fde9cc;}&[data-type='danger']{background:#facbcc;}"], fadeDown, fadeUp, _Shadow.Shadow.down4, _StyleConfig.ScreenSize.tablet, _StyleConfig.ScreenSize.tablet);

exports.AlertContainer = AlertContainer;

var AlertIcon = _styledComponents["default"].div.withConfig({
  displayName: "AlertStyle__AlertIcon",
  componentId: "sc-fcjw72-1"
})(["margin-right:8px;line-height:1;svg{display:block;}"]);

exports.AlertIcon = AlertIcon;

var AlertMessage = _styledComponents["default"].div.withConfig({
  displayName: "AlertStyle__AlertMessage",
  componentId: "sc-fcjw72-2"
})(["margin-right:8px;flex-grow:1;"]);

exports.AlertMessage = AlertMessage;

var AlertClose = _styledComponents["default"].div.withConfig({
  displayName: "AlertStyle__AlertClose",
  componentId: "sc-fcjw72-3"
})(["line-height:1;cursor:pointer;font-size:10px;"]);

exports.AlertClose = AlertClose;