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
var WarningOutlineIcon = function WarningOutlineIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M97.788 68.852L62.979 7.716C60.62 2.968 55.31 0 50 0S39.97 2.968 37.02 7.716L2.213 68.852a14.561 14.561 0 0 0 0 15.432C4.572 89.032 9.882 92 15.192 92h69.616c5.9 0 10.62-2.968 12.98-7.716a14.561 14.561 0 0 0 0-15.432zm-4.72 13.058c-1.18 2.968-4.13 4.748-7.67 4.748H15.192c-2.95 0-5.9-1.78-7.67-4.748-1.77-2.968-1.77-6.529 0-9.497l34.809-61.136C43.51 8.309 46.46 6.529 50 6.529c3.54 0 6.49 1.78 8.26 4.748l34.808 61.136c1.77 2.968 1.77 6.53 0 9.497zM51 32c-1.8 0-3 1.217-3 3.044v21.912C48 58.782 49.2 60 51 60s3-1.217 3-3.044V35.044C54 33.217 52.8 32 51 32zm2.334 34.857a3.605 3.605 0 0 0-4.667 0C48 67.43 48 68.571 48 69.143c0 1.143 0 1.714.667 2.286.666.571 2 .571 2.666.571.667 0 2 0 1.334-.571.666-.572 1.333-1.715 1.333-2.286 0-1.143 0-1.714-.666-2.286z"
  }));
};

var _default = WarningOutlineIcon;
exports["default"] = _default;