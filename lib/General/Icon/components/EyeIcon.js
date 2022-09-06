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
var EyeIcon = function EyeIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M92.857 49.143c-5.301-8.203-12.556-15.235-21.261-19.699A24.802 24.802 0 0 1 75 42c0 13.783-11.217 25-25 25S25 55.783 25 42c0-4.408 1.172-8.761 3.404-12.556-8.705 4.464-15.96 11.496-21.261 19.699 9.542 14.732 24.944 25 42.857 25s33.315-10.268 42.857-25zM52.68 27.714c0-1.45-1.228-2.678-2.679-2.678-9.32 0-16.964 7.645-16.964 16.964 0 1.45 1.227 2.679 2.678 2.679 1.451 0 2.679-1.228 2.679-2.679 0-6.362 5.245-11.607 11.607-11.607 1.45 0 2.679-1.228 2.679-2.679zM100 49.143c0 1.395-.446 2.678-1.116 3.85C88.616 69.902 69.81 81.286 50 81.286S11.384 69.846 1.116 52.993C.446 51.821 0 50.538 0 49.143s.446-2.679 1.116-3.85C11.384 28.44 30.19 17 50 17s38.616 11.44 48.884 28.292c.67 1.172 1.116 2.456 1.116 3.85z"
  }));
};

var _default = EyeIcon;
exports["default"] = _default;