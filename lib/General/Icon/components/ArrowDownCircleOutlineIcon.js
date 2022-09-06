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
var ArrowDownCircleOutlineIcon = function ArrowDownCircleOutlineIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M50 100C22.386 100 0 77.614 0 50S22.386 0 50 0s50 22.386 50 50-22.386 50-50 50zm0-2c26.51 0 48-21.49 48-48S76.51 2 50 2 2 23.49 2 50s21.49 48 48 48z M53.549 28.568v32.713l12.049-12.31c.502-.532 1.1-.798 1.795-.798.695 0 1.304.237 1.825.712.521.475.782 1.055.782 1.738 0 .684-.232 1.292-.695 1.824L52.854 69.202c-.502.532-1.11.798-1.825.798-.714 0-1.323-.266-1.825-.798L32.695 52.333c-.463-.494-.695-1.064-.695-1.71 0-.721.27-1.33.811-1.823a2.373 2.373 0 0 1 1.796-.713 2.578 2.578 0 0 1 1.795.77l12.05 12.31V28.51c0-.645.23-1.215.694-1.71a2.423 2.423 0 0 1 1.68-.797c.734-.038 1.371.2 1.912.712.54.513.81 1.13.81 1.852z"
  }));
};

var _default = ArrowDownCircleOutlineIcon;
exports["default"] = _default;