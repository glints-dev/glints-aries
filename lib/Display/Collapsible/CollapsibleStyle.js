"use strict";

exports.__esModule = true;
exports.CollapsibleHeader = exports.CollapsibleContent = exports.CollapsibleContainer = exports.CollapsibleBody = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Colors = require("../../Utils/Colors");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var animateCollapsible = (0, _styledComponents.keyframes)(["from{opacity:0;transform:translate3d(0,10%,0);}to{opacity:1;transform:translate3d(0,0,0);}"]);

var CollapsibleContent = _styledComponents["default"].div.withConfig({
  displayName: "CollapsibleStyle__CollapsibleContent",
  componentId: "sc-133mwvh-0"
})(["position:relative;outline:none;"]);

exports.CollapsibleContent = CollapsibleContent;

var CollapsibleContainer = _styledComponents["default"].div.withConfig({
  displayName: "CollapsibleStyle__CollapsibleContainer",
  componentId: "sc-133mwvh-1"
})(["cursor:pointer;color:black;background-color:", ";border:solid 1px ", ";font-size:1em;&:focus{outline:none;}&:focus > ", "{outline:5px auto -webkit-focus-ring-color;}"], _Colors.Greyscale.white, _Colors.Greyscale.lightgrey, CollapsibleContent);

exports.CollapsibleContainer = CollapsibleContainer;

var CollapsibleHeader = _styledComponents["default"].div.withConfig({
  displayName: "CollapsibleStyle__CollapsibleHeader",
  componentId: "sc-133mwvh-2"
})(["background:", ";display:flex;justify-content:space-between;align-items:center;padding:1.2em;&:hover{color:", ";}svg{transform:rotate(0);transition:transform 0.5s;", "}"], _Colors.Greyscale.white, _Colors.SecondaryColor.actionblue, function (_ref) {
  var isOpen = _ref.isOpen;

  if (isOpen) {
    return "\n        transform: rotate(180deg);\n        transition: transform .5s;\n      ";
  }
});

exports.CollapsibleHeader = CollapsibleHeader;

var CollapsibleBody = _styledComponents["default"].div.withConfig({
  displayName: "CollapsibleStyle__CollapsibleBody",
  componentId: "sc-133mwvh-3"
})(["padding:0 1.2em 1.2em 1.2em;margin-bottom:0;animation:", " 0.3s linear;cursor:default;"], animateCollapsible);

exports.CollapsibleBody = CollapsibleBody;