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
var WarningSolidIcon = function WarningSolidIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M50,0 C55.3100255,0 60.6197121,2.96755488 62.979422,7.71598379 L62.979422,7.71598379 L97.7875176,68.8517075 C100.737494,73.6001364 100.737494,79.5355873 97.7875176,84.2840162 C95.4274686,89.032104 90.7077096,92 84.8080956,92 L84.8080956,92 L15.1919044,92 C9.88187889,92 4.57219238,89.0324451 2.21248239,84.2840162 C-0.73749413,79.5355873 -0.73749413,73.6001364 2.21248239,68.8517075 L2.21248239,68.8517075 L37.020578,7.71598379 C39.9705545,2.96789598 44.6903135,0 50,0 Z M50,17 C46.4004137,17 44,19.8694251 44,22.6740999 L44,56.3259001 C44,59.1300377 46.3997242,62 50,62 C53.5995863,62 56,59.1305749 56,56.3259001 L56,22.6740999 C56,19.8694251 53.5995863,17 50,17 Z M50,82 C53.3137085,82 56,79.3137085 56,76 C56,72.6862915 53.3137085,70 50,70 C46.6862915,70 44,72.6862915 44,76 C44,79.3137085 46.6862915,82 50,82 Z"
  }));
};

var _default = WarningSolidIcon;
exports["default"] = _default;