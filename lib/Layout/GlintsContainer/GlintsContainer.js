"use strict";

exports.__esModule = true;
exports["default"] = exports.PageContainer = exports.GlintsContainer = exports.BaseContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _StyleConfig = require("../../Utils/StyleConfig");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var BaseStyles = (0, _styledComponents.css)(["font-family:Poppins,sans-serif;*,*:before,*:after{box-sizing:border-box;}"]);
var PageStyles = (0, _styledComponents.css)(["position:relative;@media ", "{width:100%;margin:0 12px;}@media ", "{width:720px;margin:0 16px;}@media ", "{width:960px;margin:0 auto;}@media ", "{width:1140px;}@media ", "{width:1260px;}"], "(max-width: " + (_StyleConfig.ScreenSize.tablet - 1) + "px)", _StyleConfig.Device.tablet, _StyleConfig.Device.desktopS, _StyleConfig.Device.desktopM, _StyleConfig.Device.desktopL);

var BaseContainer = _styledComponents["default"].div.withConfig({
  displayName: "GlintsContainer__BaseContainer",
  componentId: "sc-13x4ui7-0"
})(["", ""], BaseStyles);

exports.BaseContainer = BaseContainer;

var PageContainer = _styledComponents["default"].div.withConfig({
  displayName: "GlintsContainer__PageContainer",
  componentId: "sc-13x4ui7-1"
})(["", ""], PageStyles);

exports.PageContainer = PageContainer;

var GlintsContainer = _styledComponents["default"].div.withConfig({
  displayName: "GlintsContainer",
  componentId: "sc-13x4ui7-2"
})(["", " ", ""], BaseStyles, PageStyles);

exports.GlintsContainer = GlintsContainer;
var _default = GlintsContainer;
exports["default"] = _default;