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
var AddCircleOutlineIcon = function AddCircleOutlineIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M75.098 6.738C82.78 11.165 88.85 17.22 93.31 24.902 97.77 32.585 100 40.95 100 50s-2.23 17.415-6.69 25.098C88.85 82.78 82.78 88.85 75.099 93.31 67.415 97.77 59.05 100 50 100s-17.415-2.23-25.098-6.69C17.22 88.85 11.15 82.78 6.69 75.099 2.23 67.415 0 59.05 0 50s2.23-17.415 6.69-25.098C11.15 17.22 17.22 11.15 24.901 6.69 32.585 2.23 40.95 0 50 0s17.415 2.246 25.098 6.738zm5.273 73.633A43.47 43.47 0 0 0 89.648 66.7c2.214-5.273 3.32-10.84 3.32-16.699 0-5.86-1.139-11.426-3.417-16.7-2.149-5.142-5.209-9.7-9.18-13.671A43.47 43.47 0 0 0 66.7 10.352C61.426 8.138 55.86 7.032 50 7.032c-5.86 0-11.426 1.139-16.7 3.417-5.142 2.149-9.7 5.209-13.671 9.18A43.47 43.47 0 0 0 10.352 33.3C8.138 38.574 7.032 44.14 7.032 50c0 5.86 1.139 11.426 3.417 16.7 2.149 5.142 5.209 9.7 9.18 13.671A43.47 43.47 0 0 0 33.3 89.648c5.273 2.214 10.84 3.32 16.699 3.32 5.86 0 11.426-1.139 16.7-3.417 5.142-2.149 9.7-5.209 13.671-9.18zm-8.887-33.887c.977 0 1.807.358 2.49 1.075C74.659 48.275 75 49.089 75 50c0 .977-.342 1.807-1.025 2.49-.684.684-1.514 1.026-2.49 1.026h-17.97v17.87c0 .977-.341 1.807-1.025 2.491-.683.684-1.513 1.025-2.49 1.025-.911 0-1.725-.341-2.441-1.025-.717-.684-1.075-1.514-1.075-2.49V53.516H28.516c-.977 0-1.807-.342-2.49-1.026C25.341 51.807 25 50.977 25 50c0-.911.342-1.725 1.025-2.441.684-.717 1.514-1.075 2.49-1.075h17.97v-17.87c0-.977.357-1.807 1.074-2.491.716-.684 1.53-1.025 2.441-1.025.977 0 1.807.341 2.49 1.025.684.684 1.026 1.514 1.026 2.49v17.871h17.968z"
  }));
};

var _default = AddCircleOutlineIcon;
exports["default"] = _default;