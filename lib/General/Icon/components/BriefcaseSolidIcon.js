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
var BriefcaseSolidIcon = function BriefcaseSolidIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M37.4726562,59.9636719 L37.4726562,68.8853516 C37.4726562,69.8521484 37.8257812,70.6894531 38.5320313,71.3945313 C39.1841346,72.0473558 39.9467409,72.3982942 40.8209256,72.4484219 L41.0417969,72.4546875 L58.8857422,72.4546875 C59.8523437,72.4546875 60.6892578,72.1017578 61.3957031,71.3945313 C62.0470853,70.7435096 62.3985785,69.979988 62.4488,69.106117 L62.4550781,68.8853516 L62.4550781,59.9636719 L99.9271484,59.9636719 L99.9271484,86.7300781 C99.9271484,89.1832031 99.0542969,91.2832031 97.3064453,93.0302734 C95.6386009,94.6981179 93.6488261,95.5699457 91.3378006,95.6457568 L91.0054688,95.6511719 L8.92226563,95.6511719 C6.46855469,95.6511719 4.36777344,94.7775391 2.62070312,93.0302734 C0.95267223,91.3626154 0.0811918905,89.373383 0.0054127499,87.0624064 L0,86.7300781 L0,59.9636719 L37.4726562,59.9636719 Z M57.1019531,59.9636719 L57.1019531,67.1013672 L42.8253906,67.1013672 L42.8253906,59.9636719 L57.1019531,59.9636719 Z M66.0236328,5 C67.5101562,5 68.7748047,5.52070312 69.8148437,6.56113281 C70.8560547,7.60214844 71.3761719,8.86582031 71.3761719,10.3529297 L71.3761719,10.3529297 L71.3761719,21.2753906 L91.0052734,21.2753906 C93.4583984,21.2753906 95.5591797,22.1486328 97.30625,23.8960938 C99.0542969,25.6433594 99.9269531,27.7429688 99.9269531,30.1966797 L99.9269531,30.1966797 L99.9269531,51.6099609 L0,51.6099609 L0,30.1966797 C0,27.7429688 0.873242188,25.6433594 2.62070313,23.8960938 C4.36796875,22.1486328 6.46875,21.2753906 8.92226563,21.2753906 L8.92226563,21.2753906 L28.5509766,21.2753906 L28.5509766,10.3529297 C28.5509766,8.865625 29.0710938,7.6015625 30.1123047,6.56113281 C31.1535156,5.52070312 32.4173828,5 33.9041016,5 L33.9041016,5 Z M64.2390625,12.1373047 L35.6884766,12.1373047 L35.6884766,21.2753906 L64.2390625,21.2753906 L64.2390625,12.1373047 Z"
  }));
};

var _default = BriefcaseSolidIcon;
exports["default"] = _default;