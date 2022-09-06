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
var BehanceIcon = function BehanceIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    id: "a",
    d: "M65 23h25v6H65v-6zm13.196 21c-5.882 0-9.804 3.462-10.196 9h20c-.54-5.585-3.627-9-9.804-9zm.746 27.815c3.67 0 8.404-2.003 9.563-5.814h10.674C95.895 76.212 89.085 81 78.555 81 64.645 81 56 71.473 56 57.598 56 44.21 65.128 34 78.555 34 92.37 34 100 44.993 100 58.184c0 .782-.048 1.563-.097 2.296h-31.78c0 7.133 3.719 11.335 10.819 11.335zM14 70h14.18c5.413 0 9.82-1.96 9.82-8.182C38 55.498 34.311 53 28.467 53H14v17zm-1-27h13.738C31.578 43 35 40.952 35 35.857 35 30.333 30.6 29 25.711 29H13v14zM0 19h28.715c10.441 0 19.481 2.953 19.481 15.105 0 6.148-2.852 10.118-8.314 12.732C47.374 48.967 51 54.632 51 62.281 51 74.675 40.607 80 29.536 80H0V19z"
  }));
};

var _default = BehanceIcon;
exports["default"] = _default;