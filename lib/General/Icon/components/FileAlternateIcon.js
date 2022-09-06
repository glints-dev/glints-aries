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
var FileAlternateIcon = function FileAlternateIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M 85.667969 20.582031 L 66.917969 1.832031 C 65.746094 0.660156 64.15625 0 62.5 0 L 18.75 0 C 15.296875 0 12.5 2.796875 12.5 6.25 L 12.5 93.75 C 12.5 97.203125 15.296875 100 18.75 100 L 81.25 100 C 84.703125 100 87.5 97.203125 87.5 93.75 L 87.5 25 C 87.5 23.34375 86.839844 21.753906 85.667969 20.582031 Z M 50 75 L 31.25 75 L 31.25 62.5 L 50 62.5 Z M 68.75 56.25 L 31.25 56.25 L 31.25 43.75 L 68.75 43.75 Z M 68.75 25 C 65.296875 25 62.5 22.203125 62.5 18.75 L 62.5 6.25 L 81.25 25 Z M 68.75 25 "
  }));
};

var _default = FileAlternateIcon;
exports["default"] = _default;