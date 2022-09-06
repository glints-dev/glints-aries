"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// GENERATE BY ./src/General/Icon/generateIcons.js
// DO NOT EDIT IT MANUALLY
var BoxWithHandleSolidIcon = function BoxWithHandleSolidIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M93.9453125,35.296875 L93.9453125,93.890625 L6.0546875,93.890625 L6.0546875,35.296875 L93.9453125,35.296875 Z M61.71875,41.15625 L38.28125,41.15625 C33.4355469,41.15625 29.4921875,45.0996094 29.4921875,49.9453125 C29.4921875,54.7910156 33.4355469,58.734375 38.28125,58.734375 L38.28125,58.734375 L61.71875,58.734375 C66.5644531,58.734375 70.5078125,54.7910156 70.5078125,49.9453125 C70.5078125,45.0996094 66.5644531,41.15625 61.71875,41.15625 L61.71875,41.15625 Z M61.71875,47.015625 C63.3339844,47.015625 64.6484375,48.3300781 64.6484375,49.9453125 C64.6484375,51.5605469 63.3339844,52.875 61.71875,52.875 L38.28125,52.875 C36.6660156,52.875 35.3515625,51.5605469 35.3515625,49.9453125 C35.3515625,48.3300781 36.6660156,47.015625 38.28125,47.015625 L61.71875,47.015625 Z M100,6 L100,29.4375 L0,29.4375 L0,6 L100,6 Z"
  }));
};

var _default = BoxWithHandleSolidIcon;
exports["default"] = _default;