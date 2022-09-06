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
var TagIcon = function TagIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M23.5913639,26.8509742 C23.5913639,23.1121643 20.5897841,20.1105845 16.8509742,20.1105845 C13.1121643,20.1105845 10.1105845,23.1121643 10.1105845,26.8509742 C10.1105845,30.5897841 13.1121643,33.5913639 16.8509742,33.5913639 C20.5897841,33.5913639 23.5913639,30.5897841 23.5913639,26.8509742 Z M79.778831,57.1827278 C79.778831,58.9731438 79.0416008,60.7109005 77.8304371,61.9220642 L51.9747235,87.8304371 C50.7109005,89.0416008 48.9731438,89.778831 47.1827278,89.778831 C45.3923117,89.778831 43.654555,89.0416008 42.4433913,87.8304371 L4.79199579,50.1263823 C2.10637177,47.4934176 0,42.385466 0,38.6466561 L0,16.7403897 C0,13.0542391 3.05423907,10 6.74038968,10 L28.6466561,10 C32.385466,10 37.4934176,12.1063718 40.1790416,14.7919958 L77.8304371,52.390732 C79.0416008,53.654555 79.778831,55.3923117 79.778831,57.1827278 Z M100,57.1827278 C100,58.9731438 99.2627699,60.7109005 98.0516061,61.9220642 L72.1958926,87.8304371 C70.9320695,89.0416008 69.1943128,89.778831 67.4038968,89.778831 C64.6656135,89.778831 63.2964718,88.5150079 61.5060558,86.6719326 L86.2559242,61.9220642 C87.4670879,60.7109005 88.2043181,58.9731438 88.2043181,57.1827278 C88.2043181,55.3923117 87.4670879,53.654555 86.2559242,52.390732 L48.6045287,14.7919958 C45.9189047,12.1063718 40.8109531,10 37.0721432,10 L48.8678252,10 C52.6066351,10 57.7145866,12.1063718 60.4002106,14.7919958 L98.0516061,52.390732 C99.2627699,53.654555 100,55.3923117 100,57.1827278 Z"
  }));
};

var _default = TagIcon;
exports["default"] = _default;