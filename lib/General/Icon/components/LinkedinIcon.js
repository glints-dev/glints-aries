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
var LinkedinIcon = function LinkedinIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M100 60.639V97H78.558V63.057c0-8.534-3.091-14.334-10.85-14.334-5.933 0-9.433 3.927-10.996 7.706-.562 1.36-.733 3.267-.733 5.148v35.419h-21.42s.287-57.467 0-63.418h21.424v8.988c-.029.074-.091.136-.12.218h.12v-.218c2.863-4.32 7.934-10.476 19.321-10.476C89.438 32.09 100 41.152 100 60.639zM12.13 3C4.8 3 0 7.73 0 13.969c0 6.07 4.658 10.96 11.854 10.96h.13c7.49 0 12.133-4.89 12.133-10.96C23.97 7.73 19.475 3 12.129 3zM1.28 97h21.428V33.574H1.28V97z"
  }));
};

var _default = LinkedinIcon;
exports["default"] = _default;