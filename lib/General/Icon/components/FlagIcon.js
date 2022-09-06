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
var FlagIcon = function FlagIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M65.618 15.636c5.728 0 12.824-1.823 21.286-5.468 2.083-.911 4.134-1.074 6.152-.488 2.018.586 3.677 1.692 4.98 3.32 1.301 1.627 1.952 3.547 1.952 5.76v46.87c0 1.562-.39 3.026-1.171 4.393a10.461 10.461 0 0 1-3.125 3.418c-7.942 5.208-16.274 7.811-24.997 7.811-3.255 0-6.574-.39-9.96-1.171-2.082-.39-4.947-1.172-8.592-2.344-2.994-.911-5.208-1.562-6.64-1.953-2.343-.52-4.491-.78-6.444-.78-5.208 0-9.83.52-13.866 1.562-3.254.78-6.965 2.148-11.131 4.1v16.21c0 .91-.293 1.66-.879 2.245-.586.586-1.334.879-2.246.879H7.813c-.912 0-1.66-.293-2.246-.879-.586-.586-.879-1.334-.879-2.246V17.59a10.378 10.378 0 0 1-3.417-3.515A9.048 9.048 0 0 1 0 9.387c0-2.734.977-5.013 2.93-6.835C4.883.729 7.227-.118 9.96.013c2.213.13 4.166.976 5.859 2.539 1.692 1.562 2.668 3.45 2.929 5.663.13 1.432 0 2.8-.39 4.101 5.077-1.953 10.284-2.93 15.622-2.93 3.255 0 6.575.391 9.96 1.173 2.083.39 4.947 1.171 8.593 2.343 2.994.911 5.207 1.562 6.64 1.953 2.343.52 4.49.781 6.444.781zm24.997 49.993V18.761c-3.516 1.692-7.421 3.06-11.718 4.1-4.947 1.433-9.374 2.149-13.28 2.149-2.603 0-5.337-.326-8.201-.977-1.693-.39-4.199-1.106-7.519-2.148-3.32-1.041-5.891-1.757-7.714-2.148-2.864-.65-5.598-.976-8.202-.976-3.775 0-7.55.65-11.326 1.952-3.255 1.172-6.12 2.604-8.593 4.297v45.306c2.994-1.432 6.835-2.57 11.522-3.417 4.687-.846 9.178-1.27 13.475-1.27 2.604 0 5.338.326 8.202.977 1.692.39 4.198 1.107 7.518 2.148 3.32 1.042 5.891 1.758 7.714 2.148 2.864.651 5.598.977 8.202.977 3.776 0 7.551-.651 11.327-1.953 3.255-1.172 6.119-2.604 8.593-4.297z"
  }));
};

var _default = FlagIcon;
exports["default"] = _default;