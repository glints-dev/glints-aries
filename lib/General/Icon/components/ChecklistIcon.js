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
var ChecklistIcon = function ChecklistIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M29.831 43.661L42.91 57.202l37.07-45.97c1.249-1.467 3.415-1.64 4.831-.432 1.416 1.294 1.583 3.536.417 5.002L45.825 64.706A3.762 3.762 0 0 1 43.326 66h-.166a3.28 3.28 0 0 1-2.416-1.035L25 48.664c-1.333-1.38-1.333-3.623 0-5.003a3.337 3.337 0 0 1 4.831 0zM76.4 7.64c1.637 1.033 2.154 3.185 1.12 4.82-1.034 1.636-3.189 2.152-4.826 1.119C55.63 2.99 33.826 5.487 19.52 19.69 2.8 36.389 2.8 63.675 19.52 80.374c16.72 16.7 44.039 16.7 60.758 0 14.306-14.289 16.805-36.152 6.033-53.196-1.035-1.635-.517-3.787 1.12-4.82 1.637-1.033 3.792-.517 4.826 1.119 12.496 19.798 9.652 45.277-6.98 61.89A49.965 49.965 0 0 1 49.941 100a49.965 49.965 0 0 1-35.334-14.633c-19.477-19.454-19.477-51.216 0-70.67C31.155-1.83 56.578-4.757 76.4 7.639z"
  }));
};

var _default = ChecklistIcon;
exports["default"] = _default;