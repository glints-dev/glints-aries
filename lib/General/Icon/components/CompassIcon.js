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
var CompassIcon = function CompassIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M45.982 46.205c1.19-1.19 2.53-1.785 4.018-1.785s2.79.558 3.906 1.674C55.022 47.21 55.58 48.512 55.58 50s-.558 2.79-1.674 3.906C52.79 55.022 51.488 55.58 50 55.58s-2.79-.558-3.906-1.674C44.978 52.79 44.42 51.488 44.42 50s.52-2.753 1.562-3.795zm-31.25-31.473C24.554 4.911 36.31 0 50 0c13.69 0 25.446 4.91 35.268 14.732C95.089 24.554 100 36.31 100 50c0 13.69-4.91 25.446-14.732 35.268C75.446 95.089 63.69 100 50 100c-13.69 0-25.446-4.91-35.268-14.732C4.911 75.446 0 63.69 0 50c0-13.69 4.91-25.446 14.732-35.268zm46.206 46.206L79.91 20.089 39.062 39.063 20.09 79.91l40.849-18.974z"
  }));
};

var _default = CompassIcon;
exports["default"] = _default;