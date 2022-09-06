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
var ShareIcon = function ShareIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M82.877 65.081c-4.885 0-9.278 2.055-12.397 5.339L34.033 52.57a17.17 17.17 0 0 0 .211-2.56c0-.85-.082-1.68-.201-2.496l36.394-17.65c3.121 3.307 7.533 5.382 12.44 5.382 9.458 0 17.123-7.666 17.123-17.123C100 8.665 92.335 1 82.877 1c-9.459 0-17.123 7.665-17.123 17.123 0 .85.082 1.679.201 2.497l-36.39 17.65c-3.12-3.307-7.533-5.383-12.44-5.383C7.665 32.887 0 40.554 0 50.011c0 9.458 7.665 17.123 17.123 17.123 4.885 0 9.278-2.055 12.397-5.335l36.445 17.847a16.895 16.895 0 0 0-.213 2.558c0 9.46 7.664 17.123 17.123 17.123 9.458 0 17.123-7.662 17.123-17.123.002-9.458-7.663-17.123-17.121-17.123z"
  }));
};

var _default = ShareIcon;
exports["default"] = _default;