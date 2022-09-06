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
var ShareOutlineIcon = function ShareOutlineIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M77.1632653,61.5408163 C70.3571429,61.5408163 64.3979592,65.0918367 60.9795918,70.4285714 L40.377551,58.6530612 C41.7142857,56.0408163 42.5306122,53.1326531 42.5306122,50 C42.5306122,48.0612245 42.1632653,46.2346939 41.6326531,44.4693878 L63.0612245,32.2244898 C66.5816327,36.0306122 71.5714286,38.4591837 77.1632653,38.4591837 C87.7755102,38.4591837 96.3979592,29.8469388 96.3979592,19.2244898 C96.3979592,8.60204082 87.7653061,0 77.1530612,0 C66.5306122,0 57.9183673,8.6122449 57.9183673,19.2346939 C57.9183673,21.1734694 58.2857143,23 58.8163265,24.7653061 L37.3877551,37.0102041 C33.8673469,33.2040816 28.877551,30.7755102 23.2959184,30.7755102 C12.6734694,30.7653061 4.06122449,39.377551 4.06122449,50 C4.06122449,60.622449 12.6734694,69.2346939 23.2959184,69.2346939 C27.6836735,69.2346939 31.6734694,67.7040816 34.9081633,65.244898 L34.8367347,65.377551 L58.1326531,78.6938776 C58.0408163,79.377551 57.9285714,80.0510204 57.9285714,80.7857143 C57.9285714,91.3877551 66.5306122,100 77.1632653,100 C87.7755102,100 96.3979592,91.377551 96.3979592,80.7857143 C96.3877551,70.1530612 87.7755102,61.5408163 77.1632653,61.5408163 Z M77.1632653,7.68367347 C83.5306122,7.68367347 88.7040816,12.8571429 88.7040816,19.2244898 C88.7040816,25.6020408 83.5306122,30.7653061 77.1632653,30.7653061 C70.7857143,30.7653061 65.6224339,25.6020408 65.6224339,19.2244898 C65.6122449,12.8571429 70.7755102,7.68367347 77.1632653,7.68367347 Z M23.2959184,61.5408163 C16.9183673,61.5408163 11.7653061,56.377551 11.7653061,50 C11.7653061,43.622449 16.9285714,38.4591837 23.2959184,38.4591837 C29.6734694,38.4591837 34.8367347,43.622449 34.8367347,50 C34.8367347,56.377551 29.6734694,61.5408163 23.2959184,61.5408163 Z M77.1632653,92.3265306 C70.7857143,92.3265306 65.622449,87.1530612 65.622449,80.7959184 C65.622449,74.3979592 70.7857143,69.2346939 77.1632653,69.2346939 C83.5306122,69.2346939 88.7040816,74.3979592 88.7040816,80.7959184 C88.7040816,87.1428571 83.5306122,92.3265306 77.1632653,92.3265306 Z"
  }));
};

var _default = ShareOutlineIcon;
exports["default"] = _default;