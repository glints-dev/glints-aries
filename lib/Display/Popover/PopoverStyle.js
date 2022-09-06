"use strict";

exports.__esModule = true;
exports.PopoverItemWrapper = exports.PopoverIcon = exports.PopoverContentWrapper = exports.PopoverContainer = exports.PopoverChildren = exports.PopOverContent = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var opacityAnimation = (0, _styledComponents.keyframes)(["0%{opacity:0}80%{opacity:1;}"]);

var PopoverContainer = _styledComponents["default"].div.withConfig({
  displayName: "PopoverStyle__PopoverContainer",
  componentId: "sc-1cb03rg-0"
})(["position:relative;outline:none;display:flex;justify-content:flex-end;cursor:pointer;"]);

exports.PopoverContainer = PopoverContainer;

var PopoverChildren = _styledComponents["default"].div.withConfig({
  displayName: "PopoverStyle__PopoverChildren",
  componentId: "sc-1cb03rg-1"
})(["position:relative;"]);

exports.PopoverChildren = PopoverChildren;

var PopoverContentWrapper = _styledComponents["default"].div.withConfig({
  displayName: "PopoverStyle__PopoverContentWrapper",
  componentId: "sc-1cb03rg-2"
})(["display:flex;align-items:center;margin-left:1em;"]);

exports.PopoverContentWrapper = PopoverContentWrapper;

var PopoverItemWrapper = _styledComponents["default"].div.withConfig({
  displayName: "PopoverStyle__PopoverItemWrapper",
  componentId: "sc-1cb03rg-3"
})(["position:relative;"]);

exports.PopoverItemWrapper = PopoverItemWrapper;

var PopoverIcon = _styledComponents["default"].div.withConfig({
  displayName: "PopoverStyle__PopoverIcon",
  componentId: "sc-1cb03rg-4"
})(["display:flex;font-size:1.5em;"]);

exports.PopoverIcon = PopoverIcon;

var PopOverContent = _styledComponents["default"].div.withConfig({
  displayName: "PopoverStyle__PopOverContent",
  componentId: "sc-1cb03rg-5"
})(["position:absolute;right:50%;top:2.5em;animation:", " 0.2s linear;z-index:10;min-width:250px;transform:translateX(calc(1em + 0.7em)) translateY(0.5em);"], opacityAnimation);

exports.PopOverContent = PopOverContent;