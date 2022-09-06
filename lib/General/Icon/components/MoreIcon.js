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
var MoreIcon = function MoreIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M50,80 C55.5228475,80 60,84.4771525 60,90 C60,95.5228475 55.5228475,100 50,100 C44.4771525,100 40,95.5228475 40,90 C40,84.4771525 44.4771525,80 50,80 Z M50,40 C55.5228475,40 60,44.4771525 60,50 C60,55.5228475 55.5228475,60 50,60 C44.4771525,60 40,55.5228475 40,50 C40,44.4771525 44.4771525,40 50,40 Z M50,0 C55.5228475,0 60,4.4771525 60,10 C60,15.5228475 55.5228475,20 50,20 C44.4771525,20 40,15.5228475 40,10 C40,4.4771525 44.4771525,0 50,0 Z"
  }));
};

var _default = MoreIcon;
exports["default"] = _default;