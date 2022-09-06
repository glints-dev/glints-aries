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
var UserCogIcon = function UserCogIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("g", {
    transform: "scale(4, 4)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 4.25C9.075 4.25 6.75 6.575 6.75 9.5C6.74487 10.3602 6.95239 11.2082 7.35408 11.9688C7.75578 12.7295 8.33921 13.379 9.0525 13.8597C6.3825 15.0095 4.5 17.669 4.5 20.75H6C6 17.45 8.7 14.75 12 14.75C14.925 14.75 17.25 12.425 17.25 9.5C17.25 6.575 14.925 4.25 12 4.25ZM12 5.75C14.1 5.75 15.75 7.4 15.75 9.5C15.75 11.6 14.1 13.25 12 13.25C9.9 13.25 8.25 11.6 8.25 9.5C8.25 7.4 9.9 5.75 12 5.75ZM18.075 14V15.575C17.625 15.65 17.175 15.875 16.8 16.1L15.675 14.975L14.625 16.025L15.75 17.15C15.45 17.525 15.3 17.975 15.225 18.5H13.5V20H15.075C15.15 20.45 15.375 20.9 15.6 21.35L14.475 22.475L15.525 23.525L16.65 22.4C17.025 22.625 17.475 22.85 17.925 22.925V24.5H19.425V22.925C19.875 22.85 20.325 22.625 20.7 22.4L21.825 23.525L22.875 22.475L21.75 21.35C22.05 20.975 22.2 20.525 22.275 20H24V18.5H22.425C22.35 18.05 22.125 17.6 21.9 17.15L23.025 16.025L21.975 14.975L20.85 16.1C20.475 15.875 20.025 15.65 19.575 15.575V14H18.075ZM18.75 17C20.025 17 21 17.975 21 19.25C21 20.525 20.025 21.5 18.75 21.5C17.475 21.5 16.5 20.525 16.5 19.25C16.5 17.975 17.475 17 18.75 17ZM18.75 18.5C18.6546 18.5012 18.5607 18.5232 18.4747 18.5645C18.3855 18.6069 18.3043 18.6645 18.2347 18.7347C18.1645 18.8043 18.1069 18.8855 18.0645 18.9747C18.0232 19.0607 18.0012 19.1546 18 19.25C18 19.5312 18.2107 19.8125 18.4747 19.9355C18.5607 19.9768 18.6546 19.9988 18.75 20C19.125 20 19.5 19.625 19.5 19.25C19.5 18.875 19.125 18.5 18.75 18.5Z",
    fill: "black"
  })));
};

var _default = UserCogIcon;
exports["default"] = _default;