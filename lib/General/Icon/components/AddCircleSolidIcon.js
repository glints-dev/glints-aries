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
var AddCircleSolidIcon = function AddCircleSolidIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M79.167 54.167v-8.334c0-2.278-1.888-4.166-4.167-4.166H58.333V25c0-2.279-1.888-4.167-4.166-4.167h-8.334c-2.278 0-4.166 1.888-4.166 4.167v16.667H25c-2.279 0-4.167 1.888-4.167 4.166v8.334c0 2.278 1.888 4.166 4.167 4.166h16.667V75c0 2.279 1.888 4.167 4.166 4.167h8.334c2.278 0 4.166-1.888 4.166-4.167V58.333H75c2.279 0 4.167-1.888 4.167-4.166zM100 50c0 27.604-22.396 50-50 50S0 77.604 0 50 22.396 0 50 0s50 22.396 50 50z"
  }));
};

var _default = AddCircleSolidIcon;
exports["default"] = _default;