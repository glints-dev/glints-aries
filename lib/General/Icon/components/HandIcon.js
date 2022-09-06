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
var HandIcon = function HandIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M 51 41 L 51 6.5 C 51 5.308594 50.527344 4.160156 49.683594 3.316406 C 48.839844 2.472656 47.695312 2 46.5 2 C 45.308594 2 44.164062 2.472656 43.320312 3.316406 C 42.476562 4.160156 42 5.308594 42 6.5 L 42 41 C 42 41.796875 41.683594 42.558594 41.121094 43.121094 C 40.558594 43.683594 39.796875 44 39 44 C 38.203125 44 37.441406 43.683594 36.878906 43.121094 C 36.316406 42.558594 36 41.796875 36 41 L 36 12.5 C 36 11.308594 35.527344 10.160156 34.683594 9.316406 C 33.839844 8.472656 32.695312 8 31.5 8 C 30.308594 8 29.164062 8.472656 28.320312 9.316406 C 27.476562 10.160156 27 11.308594 27 12.5 L 27 51.5 C 23.027344 48.945312 18.648438 47 15 47 C 9.175781 47 4.277344 48.945312 3.097656 53.695312 C 3.03125 53.980469 2.996094 54.269531 3 54.558594 C 3 55.460938 3.421875 56.3125 4.148438 56.851562 L 12.019531 62.761719 C 18.398438 67.539062 24.402344 73.953125 28.589844 80.691406 C 30.851562 84.339844 32.898438 88.113281 34.910156 91.898438 C 37.070312 95.964844 38.4375 98 45 98 L 63.277344 98 C 69 98 71.179688 94.800781 75 86 C 78.824219 77.199219 81 68.335938 81 65 L 81 21.5 C 81 20.308594 80.527344 19.160156 79.683594 18.316406 C 78.839844 17.472656 77.695312 17 76.5 17 C 75.308594 17 74.164062 17.472656 73.320312 18.316406 C 72.476562 19.160156 72 20.308594 72 21.5 L 72 44 C 72 44.796875 71.683594 45.558594 71.121094 46.121094 C 70.558594 46.683594 69.796875 47 69 47 C 68.203125 47 67.441406 46.683594 66.878906 46.121094 C 66.316406 45.558594 66 44.796875 66 44 L 66 12.5 C 66 11.308594 65.527344 10.160156 64.683594 9.316406 C 63.839844 8.472656 62.695312 8 61.5 8 C 60.308594 8 59.164062 8.472656 58.320312 9.316406 C 57.476562 10.160156 57 11.308594 57 12.5 L 57 41 C 57 41.796875 56.683594 42.558594 56.121094 43.121094 C 55.558594 43.683594 54.796875 44 54 44 C 53.203125 44 52.441406 43.683594 51.878906 43.121094 C 51.316406 42.558594 51 41.796875 51 41 Z M 51 41 "
  }));
};

var _default = HandIcon;
exports["default"] = _default;