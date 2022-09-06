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
var BellIcon = function BellIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("g", {
    transform: "scale(8, 8)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6.96411 13.4055C7.98094 13.4055 8.81027 12.5762 8.81027 11.5593H12.041C12.5458 11.5593 12.9641 11.1411 12.9641 10.6363C11.8968 9.73483 10.6564 8.11944 10.6564 4.63627C10.6564 3.25165 9.50978 1.73723 7.59873 1.45598C7.63478 1.36944 7.65642 1.27569 7.65642 1.17473C7.65642 0.792518 7.34632 0.482422 6.96411 0.482422C6.5819 0.482422 6.2718 0.792518 6.2718 1.17473C6.2718 1.27569 6.29344 1.36944 6.3295 1.45598C4.41844 1.73723 3.2718 3.25165 3.2718 4.63627C3.2718 8.11944 2.03142 9.73483 0.964111 10.6363C0.964111 11.1411 1.38238 11.5593 1.88719 11.5593H5.11796C5.11796 12.5762 5.94728 13.4055 6.96411 13.4055ZM11.6516 10.6361H2.27661C3.56748 9.17942 4.19488 7.20346 4.19488 4.63615C4.19488 3.70586 5.07469 2.32846 6.96411 2.32846C8.85353 2.32846 9.73334 3.70586 9.73334 4.63615C9.73334 7.20346 10.3607 9.17942 11.6516 10.6361ZM5.69506 11.5597C5.69506 12.2592 6.26478 12.8289 6.9643 12.8289C7.0292 12.8289 7.07968 12.7785 7.07968 12.7136C7.07968 12.6486 7.0292 12.5982 6.9643 12.5982C6.39458 12.5982 5.92583 12.1294 5.92583 11.5597C5.92583 11.4948 5.87535 11.4443 5.81045 11.4443C5.74555 11.4443 5.69506 11.4948 5.69506 11.5597Z"
  })));
};

var _default = BellIcon;
exports["default"] = _default;