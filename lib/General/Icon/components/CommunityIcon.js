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
var CommunityIcon = function CommunityIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M22 46C26.4125 46 30 42.4125 30 38C30 33.5875 26.4125 30 22 30C17.5875 30 14 33.5875 14 38C14 42.4125 17.5875 46 22 46ZM78 46C82.4125 46 86 42.4125 86 38C86 33.5875 82.4125 30 78 30C73.5875 30 70 33.5875 70 38C70 42.4125 73.5875 46 78 46ZM82 50H74C71.8 50 69.8125 50.8875 68.3625 52.325C73.4 55.0875 76.975 60.075 77.75 66H86C88.2125 66 90 64.2125 90 62V58C90 53.5875 86.4125 50 82 50ZM50 50C57.7375 50 64 43.7375 64 36C64 28.2625 57.7375 22 50 22C42.2625 22 36 28.2625 36 36C36 43.7375 42.2625 50 50 50ZM59.6 54H58.5625C55.9625 55.25 53.075 56 50 56C46.925 56 44.05 55.25 41.4375 54H40.4C32.45 54 26 60.45 26 68.4V72C26 75.3125 28.6875 78 32 78H68C71.3125 78 74 75.3125 74 72V68.4C74 60.45 67.55 54 59.6 54ZM31.6375 52.325C30.1875 50.8875 28.2 50 26 50H18C13.5875 50 10 53.5875 10 58V62C10 64.2125 11.7875 66 14 66H22.2375C23.025 60.075 26.6 55.0875 31.6375 52.325Z"
  }));
};

var _default = CommunityIcon;
exports["default"] = _default;