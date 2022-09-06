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
var HandShakeIcon = function HandShakeIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("g", {
    transform: "scale(4, 4)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19.47 5.19703L17.685 3.41203C17.2899 3.02046 16.7562 2.80078 16.2 2.80078H7.695C7.14 2.80078 6.60375 3.02203 6.21 3.41203L4.425 5.19703H0V14.7858H2.4C3.06 14.7858 3.5925 14.2533 3.59625 13.597H3.9375L7.11 16.462C8.26875 17.4033 9.8775 17.4258 11.07 16.6045C11.5388 17.0095 12.045 17.2008 12.6112 17.2008C13.2937 17.2008 13.935 16.9233 14.4413 16.3008C15.27 16.627 16.2488 16.3983 16.8413 15.6708L17.8237 14.4595C18.0338 14.2008 18.165 13.9045 18.2325 13.597H20.4037C20.4075 14.2533 20.9438 14.7858 21.6 14.7858H24V5.19703H19.47ZM1.8 13.5858C1.47 13.5858 1.2 13.3158 1.2 12.9858C1.2 12.6558 1.47 12.3858 1.8 12.3858C2.13 12.3858 2.4 12.6558 2.4 12.9858C2.4 13.3195 2.13 13.5858 1.8 13.5858ZM16.425 13.327L15.4462 14.5345C15.3413 14.662 15.1538 14.6845 15.0225 14.5795L14.1263 13.852L13.0013 15.2208C12.7763 15.4945 12.4388 15.4008 12.3263 15.3108L10.9462 14.1295L10.3612 14.8495C9.84 15.4908 8.89125 15.5883 8.2875 15.097L4.63875 11.797H3.6V6.99328H5.17125L7.485 4.68328C7.56 4.65328 7.62375 4.62703 7.69875 4.59703H9.825L8.37375 5.92828C7.27125 6.93703 7.2075 8.63953 8.20875 9.72703C8.76375 10.3345 10.5037 11.272 12.015 9.89203L12.3225 9.61078L16.38 12.9033C16.5075 13.0083 16.5263 13.1995 16.425 13.327ZM20.4 11.797H17.805C17.7188 11.692 17.6213 11.5945 17.5163 11.5083L13.665 8.38078L14.1337 7.95328C14.3775 7.72828 14.3963 7.34953 14.1713 7.10578L13.7625 6.66703C13.5375 6.42328 13.1588 6.40828 12.915 6.62953L10.845 8.52703C10.4888 8.85328 9.88125 8.87953 9.5475 8.52703C9.19875 8.15578 9.22875 7.58578 9.5925 7.25578L12.0525 5.00203C12.33 4.74703 12.69 4.60828 13.065 4.60828L16.2038 4.60078C16.2825 4.60078 16.3575 4.63078 16.41 4.68703L18.7238 6.99703H20.4V11.797ZM22.2 13.5858C21.87 13.5858 21.6 13.3158 21.6 12.9858C21.6 12.6558 21.87 12.3858 22.2 12.3858C22.53 12.3858 22.8 12.6558 22.8 12.9858C22.8 13.3195 22.53 13.5858 22.2 13.5858Z",
    fill: "black"
  })));
};

var _default = HandShakeIcon;
exports["default"] = _default;