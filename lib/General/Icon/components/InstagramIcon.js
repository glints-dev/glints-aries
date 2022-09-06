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
var InstagramIcon = function InstagramIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M68.75 0h-37.5C13.994 0 0 13.994 0 31.25v37.5C0 86.006 13.994 100 31.25 100h37.5C86.006 100 100 86.006 100 68.75v-37.5C100 13.994 86.006 0 68.75 0zm21.875 68.75c0 12.063-9.813 21.875-21.875 21.875h-37.5c-12.063 0-21.875-9.813-21.875-21.875v-37.5c0-12.063 9.813-21.875 21.875-21.875h37.5c12.063 0 21.875 9.813 21.875 21.875v37.5z"
  }), ' ', /*#__PURE__*/React.createElement("path", {
    d: "M52 26c-14.358 0-26 11.642-26 26 0 14.359 11.642 26 26 26 14.359 0 26-11.641 26-26 0-14.358-11.641-26-26-26zm0 42.25c-8.957 0-16.25-7.293-16.25-16.25 0-8.964 7.293-16.25 16.25-16.25S68.25 43.036 68.25 52c0 8.957-7.293 16.25-16.25 16.25z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "77",
    cy: "23",
    r: "3"
  })));
};

var _default = InstagramIcon;
exports["default"] = _default;