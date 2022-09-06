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
var UpvoteIcon = function UpvoteIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M98.648 47.403L57.282 5.388C55.714 3.796 53.789 3 51.5 3c-2.33 0-4.236.796-5.719 2.388L4.414 47.403C2.804 49.038 2 50.996 2 53.276c0 2.238.805 4.173 2.414 5.808l4.766 4.84c1.525 1.634 3.432 2.454 5.719 2.454 2.287 0 4.193-.82 5.72-2.454l18.68-18.91V90.45c0 2.236.795 4.055 2.384 5.454C43.27 97.302 45.188 98 47.433 98h8.133c2.246 0 4.162-.698 5.75-2.096 1.59-1.399 2.385-3.218 2.385-5.454V45.015l18.681 18.91c1.524 1.634 3.43 2.453 5.72 2.453 2.244 0 4.173-.82 5.781-2.454l4.765-4.84c1.568-1.678 2.352-3.613 2.352-5.807 0-2.238-.784-4.196-2.352-5.874z"
  }));
};

var _default = UpvoteIcon;
exports["default"] = _default;