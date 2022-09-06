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
var YoutubeIcon = function YoutubeIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M99.414 29.602c.39 7.03.586 13.997.586 20.898s-.195 13.867-.586 20.898c0 4.428-1.4 8.171-4.2 11.23-2.799 3.06-6.217 4.59-10.253 4.59C74.935 87.74 63.28 88 50 88c-13.281 0-24.935-.26-34.96-.781-4.037 0-7.455-1.53-10.255-4.59-2.8-3.06-4.2-6.803-4.2-11.23A376.71 376.71 0 0 1 0 50.5c0-4.557.26-11.523.781-20.898 0-4.428 1.367-8.171 4.102-11.23 2.734-3.06 6.12-4.59 10.156-4.59C24.544 13.26 35.612 13 48.242 13h3.516c12.63 0 23.698.26 33.203.781 4.036 0 7.454 1.53 10.254 4.59 2.8 3.06 4.2 6.803 4.2 11.23zM40.43 69.64L68.75 50.5 40.43 31.164v38.477z"
  }));
};

var _default = YoutubeIcon;
exports["default"] = _default;