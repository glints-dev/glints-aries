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
var ZaloIcon = function ZaloIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M 52.015625 42.414062 L 52.015625 40.542969 L 57.621094 40.542969 L 57.621094 66.859375 L 54.414062 66.859375 C 53.09375 66.859375 52.023438 65.792969 52.015625 64.472656 C 52.015625 64.472656 52.015625 64.472656 52.015625 64.476562 C 49.757812 66.125 46.964844 67.105469 43.949219 67.105469 C 36.402344 67.105469 30.28125 60.988281 30.28125 53.445312 C 30.28125 45.898438 36.402344 39.78125 43.949219 39.78125 C 46.964844 39.78125 49.757812 40.761719 52.015625 42.414062 Z M 28.828125 32.082031 L 28.828125 32.933594 C 28.828125 34.523438 28.613281 35.824219 27.582031 37.347656 L 27.457031 37.492188 C 27.230469 37.746094 26.699219 38.347656 26.449219 38.675781 L 8.453125 61.261719 L 28.828125 61.261719 L 28.828125 64.457031 C 28.828125 65.785156 27.75 66.859375 26.425781 66.859375 L 0.0273438 66.859375 L 0.0273438 65.351562 C 0.0273438 63.503906 0.484375 62.679688 1.066406 61.820312 L 20.25 38.078125 L 0.828125 38.078125 L 0.828125 32.082031 Z M 64.421875 66.859375 C 63.320312 66.859375 62.421875 65.960938 62.421875 64.859375 L 62.421875 32.082031 L 68.421875 32.082031 L 68.421875 66.859375 Z M 86.164062 39.617188 C 93.765625 39.617188 99.929688 45.78125 99.929688 53.371094 C 99.929688 60.96875 93.765625 67.132812 86.164062 67.132812 C 78.5625 67.132812 72.398438 60.96875 72.398438 53.371094 C 72.398438 45.78125 78.5625 39.617188 86.164062 39.617188 Z M 43.949219 61.480469 C 48.394531 61.480469 51.996094 57.882812 51.996094 53.445312 C 51.996094 49.011719 48.394531 45.410156 43.949219 45.410156 C 39.507812 45.410156 35.90625 49.011719 35.90625 53.445312 C 35.90625 57.882812 39.507812 61.480469 43.949219 61.480469 Z M 86.164062 61.46875 C 90.632812 61.46875 94.261719 57.84375 94.261719 53.371094 C 94.261719 48.90625 90.632812 45.28125 86.164062 45.28125 C 81.6875 45.28125 78.066406 48.90625 78.066406 53.371094 C 78.066406 57.84375 81.6875 61.46875 86.164062 61.46875 Z M 86.164062 61.46875 "
  }));
};

var _default = ZaloIcon;
exports["default"] = _default;