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
var PdfIcon = function PdfIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M58.824 47.059V32.353h5.788v14.706h-5.788zM9.777 20.589v69.634h69.635V100H9.777c-2.702 0-5.008-.954-6.915-2.862C.954 95.231 0 92.925 0 90.223V20.588h9.777zm25.517 17.835v-6.071h5.788v6.07h-5.788zm55.882-7.6v-7.295H76.471v29.412h7.294v-9.647h7.411v-7.412h-7.411v-5.058h7.411zM73.53 45.529V30.824c0-2.04-.764-3.765-2.294-5.177-1.53-1.412-3.37-2.118-5.52-2.118H52.942v29.412h12.775c2.15 0 3.99-.706 5.519-2.117 1.53-1.412 2.294-3.177 2.294-5.295zm-26.47-9.647v-5.058c0-2.04-.765-3.765-2.295-5.177-1.53-1.412-3.369-2.118-5.519-2.118H26.471v29.412h7.69v-9.647h5.084c2.15 0 3.99-.706 5.52-2.118 1.529-1.411 2.294-3.176 2.294-5.294zM90.223 0c2.702 0 5.008.954 6.915 2.862C99.046 4.769 100 7.075 100 9.777v59.619c0 2.703-.954 5.048-2.862 7.035-1.907 1.987-4.213 2.98-6.915 2.98H30.604c-2.703 0-5.048-.993-7.035-2.98s-2.98-4.332-2.98-7.035V9.777c0-2.702.993-5.008 2.98-6.915C25.556.954 27.901 0 30.604 0h59.619z"
  }));
};

var _default = PdfIcon;
exports["default"] = _default;