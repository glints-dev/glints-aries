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
var DiscountSolidIcon = function DiscountSolidIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M50,0 C77.6142375,0 100,22.3857625 100,50 C100,77.6142375 77.6142375,100 50,100 C22.3857625,100 0,77.6142375 0,50 C0,22.3857625 22.3857625,0 50,0 Z M62.8472222,50.6944444 C56.1378762,50.6944444 50.6944444,56.1378762 50.6944444,62.8472222 C50.6944444,69.5565683 56.1378762,75 62.8472222,75 C69.5565683,75 75,69.5565683 75,62.8472222 C75,56.1378762 69.5565683,50.6944444 62.8472222,50.6944444 Z M69.2418981,25.6944444 L64.1782407,25.6944444 L64.0065434,25.7021959 C63.4377855,25.7535553 62.9094493,26.0569563 62.5641999,26.5172888 L62.5641999,26.5172888 L29.1440611,71.077474 L29.0415515,71.230454 C28.8488963,71.5437955 28.7326389,71.9003183 28.7326389,72.2800926 C28.7326389,73.3877677 29.6504268,74.3055556 30.7581019,74.3055556 L30.7581019,74.3055556 L35.8217593,74.3055556 L35.9934566,74.2978041 C36.5622145,74.2464447 37.0905507,73.9430437 37.4358001,73.4827112 L37.4358001,73.4827112 L70.8559389,28.922526 L70.9584485,28.769546 C71.1511037,28.4562045 71.2673611,28.0996817 71.2673611,27.7199074 C71.2673611,26.6122323 70.3495732,25.6944444 69.2418981,25.6944444 L69.2418981,25.6944444 Z M62.8472222,58.7962963 C65.0625723,58.7962963 66.8981481,60.6318721 66.8981481,62.8472222 C66.8981481,65.0625723 65.0625723,66.8981481 62.8472222,66.8981481 C60.6318721,66.8981481 58.7962963,65.0625723 58.7962963,62.8472222 C58.7962963,60.6318721 60.6318721,58.7962963 62.8472222,58.7962963 Z M37.1527778,25 C30.4434317,25 25,30.4434317 25,37.1527778 C25,43.8621238 30.4434317,49.3055556 37.1527778,49.3055556 C43.8621238,49.3055556 49.3055556,43.8621238 49.3055556,37.1527778 C49.3055556,30.4434317 43.8621238,25 37.1527778,25 Z M37.1527778,33.1018519 C39.3681279,33.1018519 41.2037037,34.9374277 41.2037037,37.1527778 C41.2037037,39.3681279 39.3681279,41.2037037 37.1527778,41.2037037 C34.9374277,41.2037037 33.1018519,39.3681279 33.1018519,37.1527778 C33.1018519,34.9374277 34.9374277,33.1018519 37.1527778,33.1018519 Z"
  }));
};

var _default = DiscountSolidIcon;
exports["default"] = _default;