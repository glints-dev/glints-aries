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
var CalendarIcon = function CalendarIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M7.683 93.137h16.072V77.066H7.683v16.071zm19.643 0h17.857V77.066H27.326v16.071zM7.683 73.494h16.072V55.637H7.683v17.857zm19.643 0h17.857V55.637H27.326v17.857zM7.683 52.066h16.072V35.994H7.683v16.072zm41.072 41.071h17.857V77.066H48.755v16.071zM27.326 52.066h17.857V35.994H27.326v16.072zm42.857 41.071h16.072V77.066H70.183v16.071zM48.755 73.494h17.857V55.637H48.755v17.857zM29.112 25.28V9.209c0-.95-.837-1.786-1.786-1.786h-3.571c-.949 0-1.786.837-1.786 1.786V25.28c0 .949.837 1.786 1.786 1.786h3.571c.949 0 1.786-.837 1.786-1.786zm41.071 48.214h16.072V55.637H70.183v17.857zM48.755 52.066h17.857V35.994H48.755v16.072zm21.428 0h16.072V35.994H70.183v16.072zM71.97 25.28V9.209c0-.95-.837-1.786-1.786-1.786h-3.571c-.949 0-1.786.837-1.786 1.786V25.28c0 .949.837 1.786 1.786 1.786h3.571c.95 0 1.786-.837 1.786-1.786zm21.429-3.571v71.428c0 3.906-3.237 7.143-7.143 7.143H7.683c-3.906 0-7.142-3.237-7.142-7.143V21.71c0-3.907 3.236-7.143 7.142-7.143h7.143V9.209c0-4.911 4.018-8.929 8.929-8.929h3.571c4.911 0 8.929 4.018 8.929 8.929v5.357h21.428V9.209c0-4.911 4.018-8.929 8.929-8.929h3.571c4.911 0 8.929 4.018 8.929 8.929v5.357h7.143c3.906 0 7.143 3.236 7.143 7.143z"
  }));
};

var _default = CalendarIcon;
exports["default"] = _default;