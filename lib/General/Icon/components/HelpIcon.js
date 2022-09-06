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
var HelpIcon = function HelpIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M100 50c0 9.005-2.251 17.339-6.754 25C88.743 82.661 82.661 88.743 75 93.246 67.339 97.749 59.005 100 50 100s-17.339-2.251-25-6.754C17.339 88.743 11.257 82.661 6.754 75 2.251 67.339 0 59.005 0 50s2.251-17.339 6.754-25C11.257 17.339 17.339 11.257 25 6.754 32.661 2.251 40.995 0 50 0s17.339 2.251 25 6.754C82.661 11.257 88.743 17.339 93.246 25 97.749 32.661 100 40.995 100 50zM51.411 16.532c-5.376 0-10.013 1.143-13.911 3.428-3.629 2.016-6.855 5.174-9.677 9.475-.404.538-.538 1.11-.404 1.714.135.605.47 1.11 1.008 1.512l7.057 5.242c.403.403.94.571 1.613.504a2.208 2.208 0 0 0 1.613-.907c2.15-2.554 3.83-4.301 5.04-5.242 1.882-1.344 4.032-2.016 6.452-2.016 2.285 0 4.401.638 6.35 1.915 1.95 1.277 2.924 2.856 2.924 4.738 0 1.479-.605 2.756-1.815 3.83-.806.673-2.352 1.68-4.637 3.025l-.403.202c-3.36 1.881-5.712 3.561-7.056 5.04-2.42 2.554-3.63 5.578-3.63 9.073v.806c0 .672.236 1.243.706 1.714.47.47 1.042.705 1.714.705h11.29c.672 0 1.243-.235 1.714-.705.47-.47.706-1.042.706-1.714v-.202c0-1.075.537-2.016 1.612-2.822.672-.538 1.95-1.344 3.831-2.42 3.495-2.15 5.981-4.032 7.46-5.645 2.554-2.822 3.83-6.384 3.83-10.685 0-3.764-1.142-7.225-3.427-10.383-2.285-3.159-5.242-5.645-8.871-7.46-3.629-1.814-7.325-2.722-11.089-2.722zm-1.411 50c-2.554 0-4.738.908-6.552 2.722-1.815 1.815-2.722 3.999-2.722 6.552 0 2.554.907 4.738 2.722 6.553 1.814 1.814 3.998 2.722 6.552 2.722 2.554 0 4.738-.908 6.552-2.722 1.815-1.815 2.722-3.999 2.722-6.553 0-2.553-.907-4.737-2.722-6.552-1.814-1.814-3.998-2.722-6.552-2.722z"
  }));
};

var _default = HelpIcon;
exports["default"] = _default;