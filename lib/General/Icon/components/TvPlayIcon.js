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
var TvPlayIcon = function TvPlayIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M82.5639 20.5879H54.892L66.8868 8.49228L64.3347 5.88199L49.7514 20.5879L35.168 5.88199L32.5795 8.49228L44.6108 20.5879H16.9389C15.005 20.5879 13.1503 21.3626 11.7829 22.7415C10.4154 24.1204 9.64722 25.9907 9.64722 27.9408V72.0585C9.64722 76.1026 12.9285 79.4114 16.9389 79.4114H82.5639C86.5743 79.4114 89.8555 76.1026 89.8555 72.0585V27.9408C89.8555 25.9907 89.0873 24.1204 87.7199 22.7415C86.3524 21.3626 84.4977 20.5879 82.5639 20.5879ZM82.5639 72.0585H16.9389V27.9408H82.5639V72.0585ZM38.8139 35.2938V64.7055L64.3347 49.9996L38.8139 35.2938Z"
  }));
};

var _default = TvPlayIcon;
exports["default"] = _default;