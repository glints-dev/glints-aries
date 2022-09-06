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
var LockSolidIcon = function LockSolidIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M49.9090909,0 C67.3806818,0 81.7272727,14.3465909 81.7272727,31.8181439 L81.7272727,45.4545455 L86,45.4545455 C89.7642045,45.4545455 92.8181818,48.5085227 92.8181818,52.2727273 L92.8181818,93.1818182 C92.8181818,96.9460227 89.7642045,100 86,100 L13.8181818,100 C10.0539773,100 7,96.9460227 7,93.1818182 L7,52.2727273 C7,48.5085227 10.0539773,45.4545455 13.8181818,45.4545455 L18.0909091,45.4545455 L18.0909091,31.8181439 C18.0909091,14.3465909 32.4375,0 49.9090909,0 Z M49.9090909,13.6363636 C39.8948864,13.6363636 31.7272727,21.8039773 31.7272727,31.8181818 L31.7272727,31.8181818 L31.7272727,45.4545075 L68.0909091,45.4545075 L68.0909091,31.8181818 C68.0909091,21.8039773 59.9232955,13.6363636 49.9090909,13.6363636 Z"
  }));
};

var _default = LockSolidIcon;
exports["default"] = _default;