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
var EditOutlineIcon = function EditOutlineIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M95.982 91.964c1.116 0 2.065.39 2.846 1.172.781.781 1.172 1.73 1.172 2.846s-.39 2.065-1.172 2.846c-.781.781-1.73 1.172-2.846 1.172H4.018c-1.116 0-2.065-.39-2.846-1.172C.39 98.047 0 97.098 0 95.982s.39-2.065 1.172-2.846c.781-.781 1.73-1.172 2.846-1.172h91.964zm-70.09-13.17c-1.487.596-2.79.335-3.905-.78-1.116-1.117-1.377-2.419-.782-3.907L32.366 47.88c.149-.446.41-.855.781-1.227L77.455 2.344C79.018.78 80.915 0 83.147 0s4.13.781 5.692 2.344l8.817 8.817C99.22 12.723 100 14.62 100 16.853s-.781 4.13-2.344 5.692l-44.308 44.42a4.44 4.44 0 0 1-1.116.669l-26.34 11.16zM83.148 8.037l-6.92 6.92 8.818 8.816 6.92-6.92-8.818-8.816zm-43.75 43.75l-6.473 15.29 15.29-6.473 31.139-31.139-8.817-8.817-31.139 31.139z"
  }));
};

var _default = EditOutlineIcon;
exports["default"] = _default;