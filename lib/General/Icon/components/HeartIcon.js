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
var HeartIcon = function HeartIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M92.342 8.645C87.429 3.07 80.613 0 73.15 0 62.655 0 56.01 6.268 52.284 11.527a38.193 38.193 0 0 0-2.48 4.02 38.16 38.16 0 0 0-2.479-4.02C43.599 6.268 36.955 0 26.459 0 18.996 0 12.18 3.07 7.267 8.645 2.581 13.963 0 21.085 0 28.699c0 8.288 3.236 15.997 10.184 24.26 6.21 7.385 15.142 14.998 25.487 23.812 3.854 3.285 7.84 6.682 12.084 10.395l.127.112c.55.481 1.237.722 1.923.722.686 0 1.372-.24 1.922-.722l.127-.112c4.244-3.713 8.23-7.11 12.085-10.395 10.344-8.814 19.277-16.427 25.486-23.812C96.373 44.696 99.61 36.987 99.61 28.7c0-7.614-2.58-14.736-7.267-20.054zM60.153 72.329a1351.73 1351.73 0 0 0-10.348 8.88 1358.657 1358.657 0 0 0-10.35-8.88C19.211 55.077 5.836 43.68 5.836 28.699c0-6.193 2.064-11.944 5.81-16.195 3.79-4.3 9.05-6.668 14.813-6.668 8.001 0 13.174 4.93 16.104 9.065 2.628 3.71 4 7.448 4.467 8.883a2.918 2.918 0 0 0 5.55 0c.467-1.435 1.838-5.174 4.466-8.883 2.93-4.135 8.103-9.065 16.104-9.065 5.763 0 11.024 2.368 14.813 6.668 3.746 4.25 5.81 10.002 5.81 16.195 0 14.982-13.375 26.378-33.62 43.63z"
  }));
};

var _default = HeartIcon;
exports["default"] = _default;