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
var TwitterIcon = function TwitterIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M100 18.702a40.666 40.666 0 0 1-11.78 3.261 20.761 20.761 0 0 0 9.018-11.45 41.121 41.121 0 0 1-13.035 5.029C80.46 11.51 75.136 9 69.23 9 57.9 9 48.716 18.273 48.716 29.703c0 1.622.18 3.205.53 4.719-17.046-.864-32.162-9.11-42.279-21.637a20.701 20.701 0 0 0-2.774 10.408 20.75 20.75 0 0 0 9.123 17.234 20.37 20.37 0 0 1-9.292-2.599v.259c0 10.03 7.074 18.4 16.453 20.306-1.718.467-3.53.725-5.405.725-1.325 0-2.606-.132-3.862-.384 2.612 8.232 10.186 14.218 19.16 14.382a40.913 40.913 0 0 1-25.477 8.85c-1.656 0-3.287-.1-4.893-.283C9.08 87.568 19.859 91 31.444 91c37.737 0 58.364-31.554 58.364-58.918L89.74 29.4A41.18 41.18 0 0 0 100 18.7z"
  }));
};

var _default = TwitterIcon;
exports["default"] = _default;