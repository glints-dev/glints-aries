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
var ThumbsUpIcon = function ThumbsUpIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M100,40.4347826 C100,35.64 96.0991304,31.7391304 91.3043478,31.7391304 L75.0756522,31.7391304 C77.5880435,25.3036957 78.605,17.728913 78.408913,10.986087 C78.3715217,9.69934783 78.3221739,8.95521739 78.2554348,8.48673913 C78.1430435,3.78956522 74.286087,0 69.5652174,0 C64.7704348,0 60.8695652,3.90086957 60.8695652,8.69565217 L60.8695652,10.8695652 C60.8695652,24.6186957 43.2143478,32.3436957 29.8904348,35.6563043 C28.8830435,33.3532609 26.5834783,31.7391304 23.9130435,31.7391304 L2.17391304,31.7391304 C0.973478261,31.7391304 0,32.7126087 0,33.9130435 L0,86.0869565 C0,87.2873913 0.973478261,88.2608696 2.17391304,88.2608696 L23.9130435,88.2608696 C26.5656522,88.2608696 28.8519565,86.6680435 29.8697826,84.3893478 C30.9730435,84.6723913 31.9971739,84.9397826 32.9426087,85.1867391 C40.5328261,87.1691304 44.713913,88.2608696 54.8826087,88.2608696 L78.2608696,88.2608696 C83.0556522,88.2608696 86.9565217,84.36 86.9565217,79.5652174 C86.9565217,77.7773913 86.4136957,76.1143478 85.4847826,74.7308696 C88.8430435,73.5563043 91.3043478,70.3476087 91.3043478,66.5217391 C91.3043478,64.7404348 90.7747826,63.0719565 89.8486957,61.6821739 C93.1921739,60.5056522 95.6521739,57.3043478 95.6521739,53.4782609 C95.6521739,51.6904348 95.1093478,50.0273913 94.1804348,48.643913 C97.5386957,47.4693478 100,44.2606522 100,40.4347826 Z"
  }));
};

var _default = ThumbsUpIcon;
exports["default"] = _default;