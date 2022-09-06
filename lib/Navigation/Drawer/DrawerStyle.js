"use strict";

exports.__esModule = true;
exports.DrawerWrapper = exports.DrawerContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var openFromRight = (0, _styledComponents.keyframes)(["from{transform:translateX(100%);}to{transform:translateX(0%);}"]);
var closeToRight = (0, _styledComponents.keyframes)(["from{transform:translateX(0%);}to{transform:translateX(100%);}"]);
var openFromLeft = (0, _styledComponents.keyframes)(["from{transform:translateX(-100%);}to{transform:translateX(0%);}"]);
var closeToLeft = (0, _styledComponents.keyframes)(["from{transform:translateX(0%);}to{transform:translateX(-100%);}"]);

var DrawerContainer = _styledComponents["default"].div.withConfig({
  displayName: "DrawerStyle__DrawerContainer",
  componentId: "sc-13skgii-0"
})(["position:fixed;min-height:100vh;max-height:100vh;width:100vw;top:0px;left:0px;", ";z-index:9999;"], function (_ref) {
  var open = _ref.open;
  return open ? "\n    opacity: 1;\n    visibility: visible;\n    background-color: rgba(0, 0, 0, 0.5);\n    transition: opacity 0.5s, visibility 0.1s, background-color 0.5s;\n  " : "\n    opacity: 0;\n    visibility: hidden;\n    background-color: transparent;\n    transition: opacity 0.5s, visibility 0.4s 0.1s, background-color 0.5s;\n  ";
});

exports.DrawerContainer = DrawerContainer;

var DrawerWrapper = _styledComponents["default"].div.withConfig({
  displayName: "DrawerStyle__DrawerWrapper",
  componentId: "sc-13skgii-1"
})(["position:absolute;height:100vh;width:80vw;max-width:300px;top:0px;", " background-color:white;animation:", " 0.3s ease-in-out;transform:", ";outline:none;box-shadow:-2px 0 8px rgba(0,0,0,0.15);overflow-y:auto;"], function (_ref2) {
  var position = _ref2.position;
  return {
    left: "\n    left: 0px;\n  ",
    right: "\n    right: 0px;\n  "
  }[position];
}, function (_ref3) {
  var open = _ref3.open,
      position = _ref3.position;
  return {
    right: open ? openFromRight : closeToRight,
    left: open ? openFromLeft : closeToLeft
  }[position];
}, function (_ref4) {
  var open = _ref4.open,
      position = _ref4.position;
  return {
    right: open ? 'translateX(0%)' : 'translateX(100%)',
    left: open ? 'translateX(0%)' : 'translateX(-100%)'
  }[position];
});

exports.DrawerWrapper = DrawerWrapper;