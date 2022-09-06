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
var SpeakerIcon = function SpeakerIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M49.7142857,64.2857143 C53.8809524,64.2857143 57.452381,62.797619 60.4285714,59.8214286 C63.5535714,56.8452381 65.1160714,53.1994048 65.1160714,48.8839286 L65.1160714,48.8839286 L65.1160714,15.4017857 C65.1160714,11.0863095 63.5907738,7.44047619 60.5401786,4.46428571 C57.4895833,1.48809524 53.8809524,0 49.7142857,0 C45.547619,0 41.9389881,1.48809524 38.8883929,4.46428571 C35.8377976,7.44047619 34.3125,11.0863095 34.3125,15.4017857 L34.3125,15.4017857 L34.3125,48.8839286 C34.3125,53.1994048 35.8377976,56.8452381 38.8883929,59.8214286 C41.9389881,62.797619 45.547619,64.2857143 49.7142857,64.2857143 Z M54.8482143,100 L54.8482143,81.6964286 C63.3303571,80.5059524 70.547619,76.6741071 76.5,70.2008929 C82.452381,63.7276786 85.4285714,56.1755952 85.4285714,47.5446429 L85.4285714,47.5446429 L76.7232143,47.5446429 C76.7232143,54.985119 74.0446429,61.1607143 68.6875,66.0714286 C63.3303571,70.9821429 57.0059524,73.4375 49.7142857,73.4375 C42.422619,73.4375 36.0982143,70.9821429 30.7410714,66.0714286 C25.3839286,61.1607143 22.7053571,54.985119 22.7053571,47.5446429 L22.7053571,47.5446429 L14,47.5446429 C14,56.1755952 16.9761905,63.7276786 22.9285714,70.2008929 C28.8809524,76.6741071 36.0982143,80.5059524 44.5803571,81.6964286 L44.5803571,81.6964286 L44.5803571,100 L54.8482143,100 Z"
  }));
};

var _default = SpeakerIcon;
exports["default"] = _default;