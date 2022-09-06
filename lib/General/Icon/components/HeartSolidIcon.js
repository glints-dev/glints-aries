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
var HeartSolidIcon = function HeartSolidIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M70.2671869,0.00578367886 C62.0106821,0.175011122 55.4322004,10.2969694 50.4088079,16.435491 L50,16.9444444 L49.9473203,16.8777242 C44.7675037,10.3413509 37.8875775,0 29.1666667,0 C20.75813,0 13.073799,3.91809096 7.65730922,10.8745703 C2.68904933,17.2560771 0,25.6552217 0,34.5443523 C0,44.1861136 3.30837693,53.107339 10.1835034,62.3625372 L10.6449783,62.979175 C15.3433819,69.2098498 20.3273045,74.3553258 32.9055337,86.4981639 L39.0029262,92.392972 C40.6072023,93.9512441 41.9342835,95.2502154 43.3420659,96.6399723 L44.372271,97.6590137 C45.8867126,99.1598747 47.8968307,100 50,100 C52.1029582,100 54.1126808,99.1598703 55.6251181,97.6616018 L59.6743735,93.6802846 C60.9359859,92.4498326 62.327744,91.1007809 64.0784565,89.4093382 L68.8964742,84.7561171 C80.5502276,73.4710873 85.2058091,68.5697661 89.8165953,62.3624042 C96.6916862,53.1070362 100,44.1860352 100,34.5443523 C100,25.6551677 97.3109198,17.2560325 92.3426895,10.874595 C86.926321,3.91799614 79.2419783,0 70.8333333,0 L70.2671869,0.00578367886 Z"
  }));
};

var _default = HeartSolidIcon;
exports["default"] = _default;