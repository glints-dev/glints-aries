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
var ShareArrowOutlineIcon = function ShareArrowOutlineIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M99.9656678,49.9732971 L54.3922424,0 L54.3922424,29.9346924 L49.0982055,29.9346924 C35.9840393,29.9346924 23.6541748,35.041809 14.3806457,44.3153381 C5.1071168,53.5888672 -3.55271368e-14,65.9187316 -3.55271368e-14,79.0336609 L-3.55271368e-14,100 L8.74633789,90.4167176 C20.4460145,77.5985719 37.0536805,70.1835633 54.3922424,70.0149535 L54.3922424,99.9473572 L99.9656678,49.9732971 Z M5.86013789,84.9349977 L5.86013789,79.0336609 C5.86013789,67.4842834 10.357666,56.6253662 18.5241699,48.4588623 C26.6906738,40.2923584 37.5488281,35.7948303 49.0982055,35.7948303 L60.2516174,35.7948303 L60.2516174,15.1222229 L92.035675,49.9732971 L60.2516174,84.8251344 L60.2516174,64.152527 L54.9942016,64.152527 C36.4974977,64.152527 18.7103271,71.7018127 5.86013789,84.9349977 Z"
  }));
};

var _default = ShareArrowOutlineIcon;
exports["default"] = _default;