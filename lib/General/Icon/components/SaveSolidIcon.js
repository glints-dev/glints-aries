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
var SaveSolidIcon = function SaveSolidIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M66.6666667,33.3333333 L66.6666667,11.2 L11.2,11.2 L11.2,33.3333333 L66.6666667,33.3333333 Z M50,88.8 C52.933348,88.8 55.688876,88.044452 58.2666667,86.5333333 C60.8444573,85.0222147 62.8888813,82.9777907 64.4,80.4 C65.9111187,77.8222093 66.6666667,75.0666813 66.6666667,72.1333333 C66.6666667,69.1999853 65.9111187,66.4444573 64.4,63.8666667 C62.8888813,61.288876 60.8444573,59.244452 58.2666667,57.7333333 C55.688876,56.2222147 52.933348,55.4666667 50,55.4666667 C47.066652,55.4666667 44.311124,56.2222147 41.7333333,57.7333333 C39.1555427,59.244452 37.1111187,61.288876 35.6,63.8666667 C34.0888813,66.4444573 33.3333333,69.1999853 33.3333333,72.1333333 C33.3333333,75.0666813 34.0888813,77.8222093 35.6,80.4 C37.1111187,82.9777907 39.1555427,85.0222147 41.7333333,86.5333333 C44.311124,88.044452 47.066652,88.8 50,88.8 Z M77.8666667,0 L100,22.1333333 L100,88.8 C100,91.8222373 98.8889,94.4444333 96.6666667,96.6666667 C94.4444333,98.8889 91.8222373,100 88.8,100 L11.2,100 C8.08887333,100 5.44445533,98.8889 3.26666667,96.6666667 C1.088878,94.4444333 0,91.8222373 0,88.8 L0,11.2 C0,8.17776267 1.088878,5.55556667 3.26666667,3.33333333 C5.44445533,1.1111 8.08887333,0 11.2,0 L77.8666667,0 Z"
  }));
};

var _default = SaveSolidIcon;
exports["default"] = _default;