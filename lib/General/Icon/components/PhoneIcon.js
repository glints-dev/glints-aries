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
var PhoneIcon = function PhoneIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M75.9232955,100 C80.6818182,100 84.9431818,98.6505682 89.1335227,96.3778409 C92.3295455,94.6022727 96.3068182,92.3295455 97.7982955,88.8494318 C98.8636364,86.5056818 100,81.5340909 100,78.9772727 C100,78.4801136 100,77.9829545 99.7869318,77.4857955 C99.2897727,75.9943182 95.8096591,74.4318182 94.3892045,73.7215909 C90.3409091,71.4488636 86.2215909,69.2471591 82.2443182,66.9034091 C80.3977273,65.7670455 78.125,63.6363636 75.9232955,63.6363636 C71.5909091,63.6363636 65.2698864,76.4914773 61.4346591,76.4914773 C59.5170455,76.4914773 57.03125,74.7159091 55.3267045,73.7215909 C42.4005682,66.5482955 33.4517045,57.5994318 26.2784091,44.6732955 C25.2840909,42.96875 23.5085227,40.4829545 23.5085227,38.5653409 C23.5085227,34.7301136 36.3636364,28.4090909 36.3636364,24.0767045 C36.3636364,21.875 34.2329545,19.6022727 33.0965909,17.7556818 C30.7528409,13.7784091 28.5511364,9.65909091 26.2784091,5.61079545 C25.5681818,4.19034091 24.0056818,0.710227273 22.5142045,0.213068182 C22.0170455,0 21.5198864,0 21.0227273,0 C18.4659091,0 13.4943182,1.13636364 11.1505682,2.20170455 C7.67045455,3.69318182 5.39772727,7.67045455 3.62215909,10.8664773 C1.34943182,15.0568182 0,19.3181818 0,24.0767045 C0,30.6818182 2.69886364,36.6477273 4.90056818,42.6846591 C6.46306818,47.0170455 8.38068182,51.2073864 10.7954545,55.1136364 C18.2528409,67.1875 32.8125,81.7471591 44.8863636,89.2045455 C48.7926136,91.6193182 52.9829545,93.5369318 57.3153409,95.0994318 C63.3522727,97.3011364 69.3181818,100 75.9232955,100 Z"
  }));
};

var _default = PhoneIcon;
exports["default"] = _default;