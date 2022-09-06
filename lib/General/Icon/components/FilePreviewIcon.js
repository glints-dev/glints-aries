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
var FilePreviewIcon = function FilePreviewIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M 68.421875 76.070312 C 71.367188 76.070312 73.683594 78.152344 73.683594 80.808594 C 73.683594 83.460938 71.367188 85.546875 68.421875 85.546875 C 65.472656 85.546875 63.15625 83.460938 63.15625 80.808594 C 63.15625 78.152344 65.472656 76.070312 68.421875 76.070312 M 68.421875 61.847656 C 54.050781 61.847656 41.789062 69.71875 36.84375 80.808594 C 41.789062 91.898438 54.050781 99.765625 68.421875 99.765625 C 82.789062 99.765625 95.050781 91.898438 100 80.808594 C 95.050781 69.71875 82.789062 61.847656 68.421875 61.847656 M 68.421875 92.65625 C 61.15625 92.65625 55.261719 87.351562 55.261719 80.808594 C 55.261719 74.265625 61.15625 68.960938 68.421875 68.960938 C 75.6875 68.960938 81.578125 74.265625 81.578125 80.808594 C 81.578125 87.351562 75.6875 92.65625 68.421875 92.65625 M 27.738281 85.546875 L 10.527344 85.546875 L 10.527344 9.710938 L 47.367188 9.710938 L 47.367188 33.410156 L 73.683594 33.410156 L 73.683594 52.703125 C 77.367188 53.082031 80.84375 53.886719 84.210938 55.023438 L 84.210938 28.671875 L 52.632812 0.234375 L 10.527344 0.234375 C 4.714844 0.234375 0 4.476562 0 9.710938 L 0 85.546875 C 0 90.785156 4.714844 95.027344 10.527344 95.027344 L 34.210938 95.027344 C 31.554688 92.164062 29.375 88.972656 27.738281 85.546875 Z M 27.738281 85.546875 "
  }));
};

var _default = FilePreviewIcon;
exports["default"] = _default;