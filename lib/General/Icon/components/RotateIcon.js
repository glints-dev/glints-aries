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
var RotateIcon = function RotateIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M87.232 27.797c5.423 5.423 9.077 11.826 10.96 19.209 1.883 7.156 1.883 14.312 0 21.469-1.883 7.382-5.537 13.785-10.96 19.209-3.993 4.067-8.663 7.156-14.012 9.265C68.098 98.983 62.75 100 57.175 100c-7.08 0-13.86-1.77-20.339-5.31l7.119-6.78c4.068 1.883 8.474 2.824 13.22 2.824 4.294 0 8.475-.828 12.543-2.485 4.067-1.658 7.683-4.068 10.847-7.232 4.218-4.219 7.043-9.19 8.475-14.915 1.506-5.575 1.506-11.15 0-16.723-1.432-5.726-4.257-10.697-8.475-14.916-3.164-3.164-6.78-5.574-10.847-7.231-4.068-1.658-8.25-2.486-12.543-2.486V40L37.288 20.113 57.175 0v15.254a41.74 41.74 0 0 1 16.045 3.164c5.273 2.185 9.944 5.31 14.012 9.379zM13.446 57.175L30.734 74.35 47.91 57.175 30.734 40 13.446 57.175zM30.734 26.78L61.13 57.175 30.734 87.684 0 57.175 30.734 26.78z"
  }));
};

var _default = RotateIcon;
exports["default"] = _default;