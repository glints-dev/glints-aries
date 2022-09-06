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
var UserIcon = function UserIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M61.0499573,50.7824509 C84.561913,55.0256191 87.635141,61.7303587 88.0076858,85.2561914 C88.0322374,86.7613152 88.0439796,87.0217763 88.0503844,86.8872758 L88.05,86.891 L88.0501076,87.3513854 C88.0500549,87.4104517 88.0499978,87.4721142 88.0499392,87.5364695 L88.0493168,88.7158412 C88.0493168,88.7158412 82.4504697,100 50.0262596,100 C17.6009821,100 12.0032024,88.7158412 12.0032024,88.7158412 C12.0032024,87.6654569 12.001836,86.9737404 12.000743,86.5308369 L12.0007517,86.2663026 C12.0076172,86.4505851 12.0237214,86.2928172 12.057643,84.4918873 C12.4867634,61.5841162 15.7457301,54.9797182 39.0014944,50.7824509 C39.0014944,50.7824509 42.3127669,55 50.0262596,55 C57.4642705,55 60.8078977,51.0783249 61.0372409,50.7982052 Z M50.0262596,-5.68434189e-14 C67.1996157,-5.68434189e-14 70.1586252,10.9479078 70.1586252,24.4534586 C70.1586252,37.9590094 61.1449616,48.9069171 50.0262596,48.9069171 C38.9075577,48.9069171 29.8938941,37.9590094 29.8938941,24.4534586 C29.8938941,10.9479078 32.8529035,-5.68434189e-14 50.0262596,-5.68434189e-14 Z"
  }));
};

var _default = UserIcon;
exports["default"] = _default;