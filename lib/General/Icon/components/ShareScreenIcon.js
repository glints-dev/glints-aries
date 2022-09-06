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
var ShareScreenIcon = function ShareScreenIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("g", {
    transform: "scale(6)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13.3333 12.0001C14.0667 12.0001 14.6667 11.4001 14.6667 10.6667V4.00008C14.6667 3.26675 14.0667 2.66675 13.3333 2.66675H2.66667C1.93333 2.66675 1.33333 3.26675 1.33333 4.00008V10.6667C1.33333 11.0204 1.47381 11.3595 1.72386 11.6096C1.97391 11.8596 2.31304 12.0001 2.66667 12.0001H0.666667C0.3 12.0001 0 12.3001 0 12.6667C0 13.0334 0.3 13.3334 0.666667 13.3334H15.3333C15.7 13.3334 16 13.0334 16 12.6667C16 12.3001 15.7 12.0001 15.3333 12.0001H13.3333ZM8.66667 9.64675V8.18675C6.81333 8.18675 5.59333 8.75341 4.66667 10.0001C5.04 8.22008 6.07333 6.44675 8.66667 6.08675V4.66675L11.0733 6.90675C11.2133 7.04008 11.2133 7.26008 11.0733 7.39341L8.66667 9.64675Z"
  })));
};

var _default = ShareScreenIcon;
exports["default"] = _default;