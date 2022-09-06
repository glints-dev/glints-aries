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
var CloseCircleSolidIcon = function CloseCircleSolidIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M14.509 14.732C24.33 4.911 36.16 0 50 0c13.84 0 25.632 4.873 35.38 14.62C95.126 24.369 100 36.16 100 50c0 13.84-4.873 25.632-14.62 35.38C75.631 95.126 63.84 100 50 100c-13.84 0-25.632-4.873-35.38-14.62C4.874 75.631 0 63.84 0 50c0-13.84 4.836-25.595 14.509-35.268zm59.598 52.01L57.367 50 74.33 33.259c.893-.893.893-1.786 0-2.679l-4.91-4.687c-.447-.447-.893-.67-1.34-.67-.297 0-.67.223-1.116.67L50 42.41 33.036 25.893c-.447-.447-.819-.67-1.116-.67-.447 0-.893.223-1.34.67l-4.687 4.687c-.893.893-.893 1.786 0 2.679L42.857 50 25.893 66.964c-.298.15-.447.521-.447 1.116 0 .596.15 1.042.447 1.34l4.687 4.91c.298.298.744.447 1.34.447.595 0 1.041-.149 1.339-.447L50 57.366l16.964 16.741c.447.447.819.67 1.116.67.447 0 .893-.223 1.34-.67l4.687-4.687c.447-.298.67-.744.67-1.34 0-.446-.223-.892-.67-1.339z"
  }));
};

var _default = CloseCircleSolidIcon;
exports["default"] = _default;