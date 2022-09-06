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
var RssIcon = function RssIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M95.4545455,100 C96.7329545,100 97.8693182,99.5028409 98.7215909,98.5795455 C99.6448864,97.65625 100.071023,96.4488636 100,95.2414773 C98.7215909,70.3835227 88.28125,47.0170455 70.5965909,29.4034091 C52.9829545,11.71875 29.6164773,1.27840909 4.75852273,0 L4.54545455,0 L4.54545455,0 C3.40909091,0 2.27272727,0.426136364 1.42045455,1.27840909 C0.497159091,2.13068182 -2.84217094e-14,3.26704545 -2.84217094e-14,4.54545455 L-2.84217094e-14,14.7017045 C-2.84217094e-14,17.0454545 1.84659091,19.0340909 4.26136364,19.1761364 C45.5255682,21.5909091 78.4090909,54.4744318 80.7528409,95.7386364 C80.8948864,98.1534091 82.8835227,100 85.2982955,100 L95.4545455,100 Z M59.0909091,100 C60.3693182,100 61.5767045,99.5028409 62.4289773,98.5085227 C63.28125,97.5852273 63.7073864,96.3778409 63.6363636,95.0994318 C62.4289773,79.9715909 55.8238636,65.6960227 45.0284091,54.9715909 C34.3039773,44.1761364 20.0284091,37.5710227 4.90056818,36.3636364 L4.54545455,36.3636364 L4.54545455,36.3636364 C3.40909091,36.3636364 2.27272727,36.7897727 1.49147727,37.5710227 C0.497159091,38.4232955 -2.84217094e-14,39.6306818 -2.84217094e-14,40.9090909 L-2.84217094e-14,50.4971591 C-2.84217094e-14,52.8409091 1.77556818,54.7585227 4.11931818,54.9715909 C25.78125,57.03125 42.96875,74.21875 45.0284091,95.8806818 C45.2414773,98.2244318 47.1590909,100 49.5028409,100 L59.0909091,100 Z M13.6363636,100 C21.1647727,100 27.2727273,93.8920455 27.2727273,86.3636364 C27.2727273,78.8352273 21.1647727,72.7272727 13.6363636,72.7272727 C6.10795455,72.7272727 -2.84217094e-14,78.8352273 -2.84217094e-14,86.3636364 C-2.84217094e-14,93.8920455 6.10795455,100 13.6363636,100 Z"
  }));
};

var _default = RssIcon;
exports["default"] = _default;