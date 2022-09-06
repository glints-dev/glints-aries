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
var VimeoIcon = function VimeoIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M99.948 27.043c-.43 9.706-7.249 23.037-20.395 39.992C65.915 84.665 54.49 93.512 45.03 93.512c-5.836 0-10.75-5.406-14.744-16.157-2.702-9.829-5.405-19.719-8.108-29.61-2.95-10.75-6.205-16.094-9.645-16.094-.737 0-3.317 1.535-7.802 4.668L0 30.3c4.914-4.361 9.768-8.784 14.62-13.023 6.512-5.775 11.488-8.662 14.805-8.97 7.802-.736 12.532 4.547 14.375 15.912 1.905 12.286 3.318 19.965 4.055 22.913 2.273 10.198 4.668 15.297 7.371 15.297 2.09 0 5.222-3.256 9.46-9.89 4.178-6.635 6.39-11.673 6.697-15.113.553-5.713-1.659-8.539-6.696-8.539-2.396 0-4.853.553-7.433 1.597C62.168 14.39 71.567 6.587 85.45 7.017c10.258.307 15.112 7.003 14.497 20.026z"
  }));
};

var _default = VimeoIcon;
exports["default"] = _default;