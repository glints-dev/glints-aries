"use strict";

exports.__esModule = true;
exports.Spinner = exports.LoadingContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Colors = require("../../Utils/Colors");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var spin = (0, _styledComponents.keyframes)(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]);
var spinnerGlobal = (0, _styledComponents.css)(["content:'';position:absolute;width:100%;height:100%;border-radius:100%;border:0.35em solid transparent;border-top-color:", ";"], _Colors.Greyscale.white);

var LoadingContainer = _styledComponents["default"].div.withConfig({
  displayName: "LoadingStyle__LoadingContainer",
  componentId: "sc-fg2qx3-0"
})(["position:relative;display:inline-flex;"]);

exports.LoadingContainer = LoadingContainer;

var Spinner = _styledComponents["default"].div.withConfig({
  displayName: "LoadingStyle__Spinner",
  componentId: "sc-fg2qx3-1"
})(["position:relative;display:flex;justify-content:center;align-items:center;width:2em;height:2em;&:before{", ";z-index:100;animation:", " 1s infinite;}&:after{", ";border:0.35em solid ", ";}"], spinnerGlobal, spin, spinnerGlobal, _Colors.SecondaryColor.actionblue);

exports.Spinner = Spinner;