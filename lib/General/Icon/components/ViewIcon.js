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
var ViewIcon = function ViewIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M55.625 35.625l20-20L60 0h40v40L84.375 24.375l-20 20-8.75-8.75zm0 28.75l8.75-8.75 20 20L100 60v40H60l15.625-15.625-20-20zm-11.25 0l-20 20L40 100H0V60l15.625 15.625 20-20 8.75 8.75zm0-28.75l-8.75 8.75-20-20L0 40V0h40L24.375 15.625l20 20z"
  }));
};

var _default = ViewIcon;
exports["default"] = _default;