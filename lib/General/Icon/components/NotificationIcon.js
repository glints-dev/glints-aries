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
var NotificationIcon = function NotificationIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M62.4752475,91.0891089 C60.2586025,96.3376524 55.5657334,100 50.0989178,100 C44.6321021,100 39.9394174,96.3376524 37.7227723,91.0891089 L37.7227723,91.0891089 Z M49.6026317,0 C53.9711813,0 57.5237955,3.76392371 57.5237955,8.39231463 L57.5237955,8.39231463 L57.5237955,15.9242926 C68.9619286,19.5456136 77.3266123,30.7785734 77.3266123,44.0593076 L77.3266123,44.0593076 L77.3266123,54.5790574 C77.3266123,61.0410236 78.986145,67.3898911 82.1268001,72.9329061 L82.1268001,72.9329061 L88.9270042,84.9422145 C89.2914368,85.5883521 89.3033184,86.4024658 88.9507675,87.0572579 C88.5982166,87.7118534 87.940827,88.1188119 87.2279279,88.1188119 L87.2279279,88.1188119 L11.9775212,88.1188119 C11.2646221,88.1188119 10.6111311,87.7116567 10.2585802,87.0529307 C9.9060293,86.3942047 9.91401229,85.5885488 10.2823435,84.9380839 L10.2823435,84.9380839 L17.0825477,72.9287755 C20.219304,67.3855639 21.8788368,61.0410236 21.8788368,54.5790574 L21.8788368,54.5790574 L21.8788368,44.0593076 C21.8788368,30.7785734 30.2435204,19.5456136 41.6814679,15.9242926 L41.6814679,15.9242926 L41.6814679,8.39231463 C41.6814679,3.76392371 45.2340821,0 49.6026317,0 Z"
  }));
};

var _default = NotificationIcon;
exports["default"] = _default;