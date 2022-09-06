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
var CopyIcon = function CopyIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M83.0152505,18.3006536 C85.4843987,18.3006536 87.6267157,19.1721046 89.4422658,20.9150327 C91.2578159,22.6579608 92.1655773,24.7639673 92.1655773,27.2331155 L92.1655773,90.8496732 C92.1655773,93.3188214 91.2578159,95.4611383 89.4422658,97.2766885 C87.6267157,99.0922386 85.4843987,100 83.0152505,100 L33.2331155,100 C30.7639673,100 28.6216503,99.0922386 26.8061002,97.2766885 C24.9905501,95.4611383 24.0827887,93.3188214 24.0827887,90.8496732 L24.0827887,27.2331155 C24.0827887,24.7639673 24.9905501,22.6579608 26.8061002,20.9150327 C28.6216503,19.1721046 30.7639673,18.3006536 33.2331155,18.3006536 L83.0152505,18.3006536 Z M69.3986928,0 L69.3986928,11.1503268 L16.9324619,11.1503268 L16.9324619,72.7668845 L6,72.7668845 L6,9.1503268 C6,6.68117865 6.87145098,4.53886166 8.61437908,2.72331155 C10.3573072,0.907761438 12.4633137,0 14.9324619,0 L69.3986928,0 Z"
  }));
};

var _default = CopyIcon;
exports["default"] = _default;