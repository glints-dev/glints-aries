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
var ClipboardIcon = function ClipboardIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("g", {
    transform: "scale(5)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 13H13V8H9.75C9.33594 8 9 7.66406 9 7.25V4H6V13ZM8 1.75V1.25C8 1.11719 7.88281 1 7.75 1H2.25C2.11719 1 2 1.11719 2 1.25V1.75C2 1.88281 2.11719 2 2.25 2H7.75C7.88281 2 8 1.88281 8 1.75ZM10 7H12.3359L10 4.66406V7ZM14 8V13.25C14 13.6641 13.6641 14 13.25 14H5.75C5.33594 14 5 13.6641 5 13.25V12H0.75C0.335938 12 0 11.6641 0 11.25V0.75C0 0.335938 0.335938 0 0.75 0H9.25C9.66406 0 10 0.335938 10 0.75V3.3125C10.1016 3.375 10.1953 3.44531 10.2812 3.53125L13.4688 6.71875C13.7656 7.01562 14 7.58594 14 8Z"
  })));
};

var _default = ClipboardIcon;
exports["default"] = _default;