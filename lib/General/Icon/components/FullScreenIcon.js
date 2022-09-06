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
var FullScreenIcon = function FullScreenIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("g", {
    transform: "scale(5)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1.5 2.75C1.5 2.06 2.06 1.5 2.75 1.5H4.75C4.94891 1.5 5.13968 1.42098 5.28033 1.28033C5.42098 1.13968 5.5 0.948912 5.5 0.75C5.5 0.551088 5.42098 0.360322 5.28033 0.21967C5.13968 0.0790175 4.94891 0 4.75 0H2.75C2.02065 0 1.32118 0.289731 0.805456 0.805456C0.289731 1.32118 0 2.02065 0 2.75V4.75C0 4.94891 0.0790175 5.13968 0.21967 5.28033C0.360322 5.42098 0.551088 5.5 0.75 5.5C0.948912 5.5 1.13968 5.42098 1.28033 5.28033C1.42098 5.13968 1.5 4.94891 1.5 4.75V2.75Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1.5 15.25C1.5 15.94 2.06 16.5 2.75 16.5H4.75C4.94891 16.5 5.13968 16.579 5.28033 16.7197C5.42098 16.8603 5.5 17.0511 5.5 17.25C5.5 17.4489 5.42098 17.6397 5.28033 17.7803C5.13968 17.921 4.94891 18 4.75 18H2.75C2.02065 18 1.32118 17.7103 0.805456 17.1945C0.289731 16.6788 0 15.9793 0 15.25V13.25C0 13.0511 0.0790175 12.8603 0.21967 12.7197C0.360322 12.579 0.551088 12.5 0.75 12.5C0.948912 12.5 1.13968 12.579 1.28033 12.7197C1.42098 12.8603 1.5 13.0511 1.5 13.25V15.25Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.2501 1.5C15.9401 1.5 16.5001 2.06 16.5001 2.75V4.75C16.5001 4.94891 16.5791 5.13968 16.7197 5.28033C16.8604 5.42098 17.0512 5.5 17.2501 5.5C17.449 5.5 17.6398 5.42098 17.7804 5.28033C17.9211 5.13968 18.0001 4.94891 18.0001 4.75V2.75C18.0001 2.02065 17.7103 1.32118 17.1946 0.805456C16.6789 0.289731 15.9794 0 15.2501 0H13.2501C13.0512 0 12.8604 0.0790175 12.7198 0.21967C12.5791 0.360322 12.5001 0.551088 12.5001 0.75C12.5001 0.948912 12.5791 1.13968 12.7198 1.28033C12.8604 1.42098 13.0512 1.5 13.2501 1.5H15.2501Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5001 15.25C16.5001 15.94 15.9401 16.5 15.2501 16.5H13.2501C13.0512 16.5 12.8604 16.579 12.7198 16.7197C12.5791 16.8603 12.5001 17.0511 12.5001 17.25C12.5001 17.4489 12.5791 17.6397 12.7198 17.7803C12.8604 17.921 13.0512 18 13.2501 18H15.2501C15.9794 18 16.6789 17.7103 17.1946 17.1945C17.7103 16.6788 18.0001 15.9793 18.0001 15.25V13.25C18.0001 13.0511 17.9211 12.8603 17.7804 12.7197C17.6398 12.579 17.449 12.5 17.2501 12.5C17.0512 12.5 16.8604 12.579 16.7197 12.7197C16.5791 12.8603 16.5001 13.0511 16.5001 13.25V15.25Z"
  })));
};

var _default = FullScreenIcon;
exports["default"] = _default;