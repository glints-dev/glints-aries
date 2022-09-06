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
var MicIcon = function MicIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("g", {
    transform: "scale(4, 4)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.25 18.75C3.25 18.3358 3.58579 18 4 18H10C10.4142 18 10.75 18.3358 10.75 18.75C10.75 19.1642 10.4142 19.5 10 19.5H4C3.58579 19.5 3.25 19.1642 3.25 18.75Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 6.75C1.41421 6.75 1.75 7.08579 1.75 7.5V9C1.75 11.8858 4.11421 14.25 7 14.25C9.88579 14.25 12.25 11.8858 12.25 9V7.5C12.25 7.08579 12.5858 6.75 13 6.75C13.4142 6.75 13.75 7.08579 13.75 7.5V9C13.75 12.7142 10.7142 15.75 7 15.75C3.28579 15.75 0.25 12.7142 0.25 9V7.5C0.25 7.08579 0.585786 6.75 1 6.75Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 14.25C7.41421 14.25 7.75 14.5858 7.75 15V18.75C7.75 19.1642 7.41421 19.5 7 19.5C6.58579 19.5 6.25 19.1642 6.25 18.75V15C6.25 14.5858 6.58579 14.25 7 14.25Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.00003 12.75C6.50505 12.7489 6.01534 12.6483 5.55999 12.4542C5.10463 12.2602 4.6929 11.9766 4.34925 11.6203C3.64573 10.9108 3.2507 9.95232 3.25003 8.95315V3.75003C3.24811 3.25703 3.34379 2.76853 3.53157 2.3127C3.71934 1.85686 3.99549 1.4427 4.34409 1.09409C4.6927 0.745491 5.10686 0.469341 5.56269 0.281566C6.01853 0.0937917 6.50703 -0.00189317 7.00003 2.83769e-05C9.10284 2.83769e-05 10.75 1.64722 10.75 3.75003V8.95315C10.75 11.0466 9.06768 12.75 7.00003 12.75Z"
  })));
};

var _default = MicIcon;
exports["default"] = _default;