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
var InfoSolidIcon = function InfoSolidIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M99.997 49.33c.148 13.839-4.576 25.668-14.174 35.49-9.597 9.82-21.315 14.879-35.153 15.177-13.839.148-25.668-4.576-35.49-14.174C5.36 76.226.302 64.508.004 50.67-.145 36.83 4.58 25.002 14.177 15.18 23.774 5.36 35.492.302 49.33.004 63.17-.145 74.998 4.58 84.82 14.177c9.82 9.597 14.879 21.315 15.177 35.153zM55.134 19.868c-1.34-1.34-3.05-2.009-5.134-2.009-2.083 0-3.794.67-5.134 2.01-1.339 1.338-2.008 3.05-2.008 5.133s.67 3.794 2.008 5.133c1.34 1.34 3.05 2.01 5.134 2.01 2.083 0 3.794-.67 5.134-2.01 1.339-1.339 2.008-3.05 2.008-5.133s-.67-3.795-2.008-5.134zm4.687 61.157v-2.456h-4.91V40.18H40.178v2.679h4.91v35.711h-4.91v2.456h19.642z"
  }));
};

var _default = InfoSolidIcon;
exports["default"] = _default;