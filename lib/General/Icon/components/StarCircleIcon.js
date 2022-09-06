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
var StarCircleIcon = function StarCircleIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("g", {
    transform: "scale(5)"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "10"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "10.5",
    fill: "#FFFFFFE6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "7.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.6272 8.82618L10.5174 6.0625L9.39618 8.8261L6.5625 9.06981L8.74292 10.9834L8.03427 13.9375L10.5114 12.3705L12.924 13.9151L12.3003 10.9865L14.4375 9.06683L11.6272 8.82618Z",
    fill: "#098BBD"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.1272 8.82618L10.0174 6.0625L8.89618 8.8261L6.0625 9.06981L8.24292 10.9834L7.53427 13.9375L10.0114 12.3705L12.424 13.9151L11.8003 10.9865L13.9375 9.06683L11.1272 8.82618Z",
    fill: "white"
  })));
};

var _default = StarCircleIcon;
exports["default"] = _default;