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
var ExternalLinkIcon = function ExternalLinkIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M78.5714286,58.7857143 L78.5714286,76.6428571 C78.5714286,85.515625 71.3727679,92.7142857 62.5,92.7142857 L16.0714286,92.7142857 C7.19866071,92.7142857 0,85.515625 0,76.6428571 L0,30.2142857 C0,21.3415179 7.19866071,14.1428571 16.0714286,14.1428571 L55.3571429,14.1428571 C56.3616071,14.1428571 57.1428571,14.9241071 57.1428571,15.9285714 L57.1428571,19.5 C57.1428571,20.5044643 56.3616071,21.2857143 55.3571429,21.2857143 L16.0714286,21.2857143 C11.1607143,21.2857143 7.14285714,25.3035714 7.14285714,30.2142857 L7.14285714,76.6428571 C7.14285714,81.5535714 11.1607143,85.5714286 16.0714286,85.5714286 L62.5,85.5714286 C67.4107143,85.5714286 71.4285714,81.5535714 71.4285714,76.6428571 L71.4285714,58.7857143 C71.4285714,57.78125 72.2098214,57 73.2142857,57 L76.7857143,57 C77.7901786,57 78.5714286,57.78125 78.5714286,58.7857143 Z M100,10.5714286 L100,39.1428571 C100,41.0959821 98.3816964,42.7142857 96.4285714,42.7142857 C95.4799107,42.7142857 94.5870536,42.3236607 93.9174107,41.6540179 L84.0959821,31.8325893 L47.7120536,68.2165179 C47.3772321,68.5513393 46.875,68.7745536 46.4285714,68.7745536 C45.9821429,68.7745536 45.4799107,68.5513393 45.1450893,68.2165179 L38.7834821,61.8549107 C38.4486607,61.5200893 38.2254464,61.0178571 38.2254464,60.5714286 C38.2254464,60.125 38.4486607,59.6227679 38.7834821,59.2879464 L75.1674107,22.9040179 L65.3459821,13.0825893 C64.6763393,12.4129464 64.2857143,11.5200893 64.2857143,10.5714286 C64.2857143,8.61830357 65.9040179,7 67.8571429,7 L96.4285714,7 C98.3816964,7 100,8.61830357 100,10.5714286 Z"
  }));
};

var _default = ExternalLinkIcon;
exports["default"] = _default;