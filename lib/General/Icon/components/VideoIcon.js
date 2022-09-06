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
var VideoIcon = function VideoIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("g", {
    transform: "scale(5)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13.9997 4.76671C13.7971 4.67551 13.5722 4.64584 13.353 4.6814C13.1337 4.71696 12.9297 4.81617 12.7663 4.96671L11.333 6.30004V5.33337C11.333 4.80294 11.1223 4.29423 10.7472 3.91916C10.3721 3.54409 9.86344 3.33337 9.33301 3.33337H3.33301C2.80257 3.33337 2.29387 3.54409 1.91879 3.91916C1.54372 4.29423 1.33301 4.80294 1.33301 5.33337V10.6667C1.33301 11.1971 1.54372 11.7059 1.91879 12.0809C2.29387 12.456 2.80257 12.6667 3.33301 12.6667H9.33301C9.86344 12.6667 10.3721 12.456 10.7472 12.0809C11.1223 11.7059 11.333 11.1971 11.333 10.6667V9.70004L12.773 11.0334C12.985 11.2253 13.2604 11.3321 13.5463 11.3334C13.705 11.333 13.8618 11.2989 14.0063 11.2334C14.203 11.1538 14.3714 11.0175 14.4902 10.8417C14.6089 10.666 14.6726 10.4588 14.673 10.2467V5.75337C14.672 5.5405 14.6074 5.33278 14.4874 5.15695C14.3674 4.98111 14.1976 4.8452 13.9997 4.76671V4.76671Z"
  })));
};

var _default = VideoIcon;
exports["default"] = _default;