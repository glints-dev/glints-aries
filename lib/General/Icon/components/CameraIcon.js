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
var CameraIcon = function CameraIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M51.786 39.286A1.763 1.763 0 0 0 50 37.5c-4.91 0-8.929 4.018-8.929 8.929 0 1.004.782 1.785 1.786 1.785a1.763 1.763 0 0 0 1.786-1.785c0-2.958 2.4-5.358 5.357-5.358a1.763 1.763 0 0 0 1.786-1.785zm12.5 7.254c0 7.868-6.418 14.286-14.286 14.286-7.868 0-14.286-6.418-14.286-14.286 0-7.868 6.418-14.286 14.286-14.286 7.868 0 14.286 6.418 14.286 14.286zM7.143 78.571h85.714V71.43H7.143v7.142zm64.286-32.03c0-11.831-9.599-21.43-21.429-21.43-11.83 0-21.429 9.599-21.429 21.43 0 11.83 9.599 21.428 21.429 21.428 11.83 0 21.429-9.598 21.429-21.429zM14.286 10.713h21.428V3.571H14.286v7.143zM7.143 21.43h85.714V7.143H46.652l-3.572 7.143H7.143v7.143zM100 7.143V78.57a7.121 7.121 0 0 1-7.143 7.143H7.143A7.121 7.121 0 0 1 0 78.571V7.143A7.121 7.121 0 0 1 7.143 0h85.714A7.121 7.121 0 0 1 100 7.143z"
  }));
};

var _default = CameraIcon;
exports["default"] = _default;