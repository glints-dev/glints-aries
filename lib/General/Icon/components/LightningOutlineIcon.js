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
var LightningOutlineIcon = function LightningOutlineIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("g", {
    transform: "scale(5)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.04391 9.85663L2.78474 10.2842L3.04391 9.85662C2.99699 9.82818 2.95876 9.78741 2.93339 9.73875C2.90802 9.69009 2.89649 9.6354 2.90004 9.58064C2.9036 9.52588 2.9221 9.47315 2.95355 9.42817L8.55332 1.4285C8.58992 1.37624 8.64224 1.33701 8.70266 1.3165C8.76308 1.296 8.82847 1.2953 8.88932 1.3145L8.91021 1.32109C8.96256 1.34182 9.00816 1.37692 9.04164 1.42255C9.07941 1.47402 9.09977 1.5362 9.09977 1.60004V1.60007V5.60007V6.10007H9.59977H12.7998H12.8C12.8549 6.10005 12.9087 6.11508 12.9556 6.14352C13.0026 6.17197 13.0408 6.21274 13.0661 6.2614C13.0915 6.31006 13.103 6.36474 13.0995 6.4195C13.0959 6.47427 13.0774 6.527 13.046 6.57197L7.44615 14.5717L7.44577 14.5723C7.40922 14.6247 7.35692 14.664 7.29647 14.6846C7.23602 14.7052 7.17058 14.7059 7.10968 14.6867C7.04877 14.6676 6.99557 14.6294 6.95782 14.5779C6.92006 14.5265 6.89973 14.4642 6.89977 14.4004V14.4001V10.4001V9.90007H6.39977H3.19977H3.19955C3.14467 9.9001 3.09084 9.88507 3.04391 9.85663Z",
    stroke: "#666666"
  })));
};

var _default = LightningOutlineIcon;
exports["default"] = _default;