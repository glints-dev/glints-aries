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
var BulletListIcon = function BulletListIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M24.254 11.853H100V22.49H24.254V11.853zm0 43.061V44.28H100v10.635H24.254zm0 32.426V76.704H100V87.34H24.254zM8.042 73.85c2.248 0 4.172.822 5.771 2.465 1.6 1.643 2.4 3.545 2.4 5.707s-.822 4.042-2.465 5.642c-1.643 1.6-3.545 2.4-5.706 2.4-2.162 0-4.043-.8-5.643-2.4C.8 86.064 0 84.184 0 82.022c0-2.162.778-4.064 2.335-5.707 1.556-1.643 3.458-2.464 5.707-2.464zm0-64.85c2.248 0 4.172.8 5.771 2.4 1.6 1.6 2.4 3.523 2.4 5.771 0 2.248-.8 4.15-2.4 5.707-1.6 1.557-3.523 2.335-5.771 2.335-2.249 0-4.15-.778-5.707-2.335C.778 21.322 0 19.42 0 17.171 0 14.923.778 13 2.335 11.4 3.89 9.8 5.793 9 8.042 9zm0 32.425c2.248 0 4.172.8 5.771 2.4 1.6 1.6 2.4 3.523 2.4 5.772 0 2.248-.8 4.15-2.4 5.707-1.6 1.556-3.523 2.334-5.771 2.334-2.249 0-4.15-.778-5.707-2.334C.778 53.747 0 51.844 0 49.597c0-2.249.778-4.172 2.335-5.772 1.556-1.6 3.458-2.4 5.707-2.4z"
  }));
};

var _default = BulletListIcon;
exports["default"] = _default;