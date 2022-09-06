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
var LoadingIcon = function LoadingIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M 85.351562 14.648438 C 76 5.238281 63.269531 -0.0351562 50 0 C 36.730469 -0.0351562 24 5.238281 14.648438 14.648438 C 5.238281 24.003906 -0.0351562 36.730469 0 50 C -0.0351562 63.269531 5.238281 76 14.648438 85.351562 C 24 94.761719 36.730469 100.035156 50 100 C 63.351562 100 75.914062 94.800781 85.351562 85.351562 C 94.761719 75.996094 100.035156 63.269531 100 50 C 100 36.648438 94.800781 24.085938 85.351562 14.648438 Z M 82.140625 17.859375 C 90.691406 26.367188 95.484375 37.9375 95.453125 50 L 85.152344 50 C 85.140625 40.089844 80.949219 30.640625 73.609375 23.980469 C 66.269531 17.320312 56.460938 14.066406 46.59375 15.011719 L 46.59375 4.671875 C 59.804688 3.640625 72.800781 8.460938 82.140625 17.859375 Z M 50 80.601562 C 33.109375 80.578125 19.421875 66.890625 19.398438 50 C 19.398438 33.125 33.125 19.398438 50 19.398438 C 66.875 19.398438 80.601562 33.125 80.601562 50 C 80.601562 66.875 66.875 80.601562 50 80.601562 Z M 50 80.601562"
  }));
};

var _default = LoadingIcon;
exports["default"] = _default;