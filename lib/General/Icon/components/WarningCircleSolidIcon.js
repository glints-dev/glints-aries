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
var WarningCircleSolidIcon = function WarningCircleSolidIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M54.928 54.928V24.88h-9.856v30.048h9.856zm0 20.192V65.024h-9.856V75.12h9.856zM50 0c9.135 0 17.588 2.284 25.36 6.851 7.533 4.327 13.462 10.256 17.789 17.788C97.716 32.412 100 40.865 100 50c0 9.135-2.284 17.588-6.851 25.36-4.327 7.533-10.256 13.462-17.788 17.789C67.588 97.716 59.135 100 50 100c-9.135 0-17.588-2.284-25.36-6.851C17.106 88.742 11.177 82.772 6.85 75.24 2.284 67.468 0 59.055 0 50s2.284-17.468 6.851-25.24C11.258 17.228 17.228 11.258 24.76 6.85 32.532 2.284 40.945 0 50 0z"
  }));
};

var _default = WarningCircleSolidIcon;
exports["default"] = _default;