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
var CodepenIcon = function CodepenIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M12.054 65.234l33.65 22.433V67.634L27.063 55.19l-15.01 10.044zM8.594 57.2L19.364 50l-10.77-7.199V57.2zm45.703 30.468l33.65-22.433L72.934 55.19 54.297 67.634v20.033zM50 60.157L65.179 50 50 39.844 34.821 50 50 60.156zM27.065 44.81l18.638-12.444V12.333l-33.65 22.433L27.066 44.81zM80.636 50l10.77 7.199V42.8L80.636 50zm-7.7-5.19l15.01-10.044-33.65-22.433v20.033l18.64 12.444zM100 34.766v30.468c0 1.395-.725 2.79-1.897 3.572L52.4 99.275c-.726.446-1.563.725-2.4.725s-1.674-.279-2.4-.725L1.897 68.805C.725 68.026 0 66.63 0 65.236v-30.47c0-1.394.725-2.79 1.897-3.57L47.6.724C48.326.28 49.163 0 50 0s1.674.279 2.4.725l45.703 30.47c1.172.78 1.897 2.176 1.897 3.57z"
  }));
};

var _default = CodepenIcon;
exports["default"] = _default;