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
var AttachmentIcon = function AttachmentIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M51.934 9.887c3.907-3.396 8.384-5.572 13.432-6.529 5.049-.956 9.988-.593 14.82 1.09 4.832 1.684 8.977 4.515 12.436 8.494 3.46 3.98 5.686 8.479 6.68 13.498.995 5.019.668 9.961-.982 14.827s-4.428 8.997-8.335 12.394L72.403 68.944l-7.282-8.378 17.581-15.283c2.373-2.062 4.074-4.614 5.105-7.655a18.01 18.01 0 0 0 .647-9.295c-.6-3.156-1.931-5.92-3.994-8.295-2.064-2.373-4.616-4.077-7.658-5.11a18.01 18.01 0 0 0-9.295-.653c-3.155.598-5.919 1.928-8.29 3.99L41.633 33.549l-7.282-8.378L51.934 9.887zM36.455 70.29l-7.872-9.057L62.545 31.71l7.872 9.057L36.455 70.29zM15.54 80.962c2.064 2.373 4.616 4.077 7.658 5.11a18.01 18.01 0 0 0 9.295.653c3.155-.598 5.919-1.928 8.29-3.99l17.583-15.284 7.282 8.378-17.582 15.284c-3.907 3.396-8.384 5.572-13.432 6.529-5.049.956-9.988.593-14.82-1.09-4.832-1.684-8.977-4.515-12.436-8.494-3.46-3.98-5.686-8.479-6.68-13.498-.995-5.019-.668-9.961.982-14.827s4.428-8.997 8.335-12.394l17.582-15.283 7.282 8.378-17.581 15.283c-2.373 2.062-4.074 4.614-5.105 7.655a18.01 18.01 0 0 0-.647 9.295c.6 3.156 1.931 5.92 3.994 8.295z"
  }));
};

var _default = AttachmentIcon;
exports["default"] = _default;