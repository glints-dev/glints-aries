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
var ImageIcon = function ImageIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M82.5892857,39.5892857 C80.505942,41.6726295 77.9762054,42.7142857 75,42.7142857 C72.0237946,42.7142857 69.494058,41.6726295 67.4107143,39.5892857 C65.3273705,37.505942 64.2857143,34.9762054 64.2857143,32 C64.2857143,29.0237946 65.3273705,26.494058 67.4107143,24.4107143 C69.494058,22.3273705 72.0237946,21.2857143 75,21.2857143 C77.9762054,21.2857143 80.505942,22.3273705 82.5892857,24.4107143 C84.6726295,26.494058 85.7142857,29.0237946 85.7142857,32 C85.7142857,34.9762054 84.6726295,37.505942 82.5892857,39.5892857 Z M93.75,7 C95.5357232,7 97.0238036,7.59523214 98.2142857,8.78571429 C99.4047679,9.97619643 100,11.4642768 100,13.25 L100,86.4642857 C100,88.2500089 99.4047679,89.7380893 98.2142857,90.9285714 C97.0238036,92.1190536 95.5357232,92.7142857 93.75,92.7142857 L6.25,92.7142857 C4.46427679,92.7142857 2.97619643,92.1190536 1.78571429,90.9285714 C0.595232143,89.7380893 0,88.2500089 0,86.4642857 L0,13.25 C0,11.4642768 0.595232143,9.97619643 1.78571429,8.78571429 C2.97619643,7.59523214 4.46427679,7 6.25,7 L93.75,7 Z M70.7589286,51.1964286 L92.8571429,74.8571429 L92.8571429,16.8214286 C92.8571429,15.0357054 91.8898906,14.1428571 89.9553571,14.1428571 L10.0446429,14.1428571 C8.40772991,14.1428571 7.44047768,15.0357054 7.14285714,16.8214286 L7.14285714,74.8571429 L35.2678571,40.9285714 C36.4583393,39.7380893 37.7232076,39.1428571 39.0625,39.1428571 C40.6994129,39.1428571 41.9642813,39.6636853 42.8571429,40.7053571 L54.9107143,53.875 L55.8035714,54.7678571 C56.696433,55.3630982 57.5148772,55.6607143 58.2589286,55.6607143 C59.0029799,55.6607143 59.8958281,55.2886942 60.9375,54.5446429 L64.9553571,50.9732143 C65.997029,50.2291629 66.9642812,49.8571429 67.8571429,49.8571429 C69.047625,49.8571429 70.0148772,50.303567 70.7589286,51.1964286 Z",
    id: "path-1"
  }));
};

var _default = ImageIcon;
exports["default"] = _default;