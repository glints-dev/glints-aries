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
var SalaryIcon = function SalaryIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("g", {
    transform: "scale(4,4)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19.36 3H6.56C6.39026 3 6.22747 3.06743 6.10745 3.18745C5.98743 3.30747 5.92 3.47026 5.92 3.64V5.56H4.64C4.47026 5.56 4.30747 5.62743 4.18745 5.74745C4.06743 5.86748 4 6.03026 4 6.2C4 6.36974 4.06743 6.53252 4.18745 6.65255C4.30747 6.77257 4.47026 6.84 4.64 6.84H5.92V17.08H4.64C4.47026 17.08 4.30747 17.1474 4.18745 17.2675C4.06743 17.3875 4 17.5503 4 17.72C4 17.8897 4.06743 18.0525 4.18745 18.1725C4.30747 18.2926 4.47026 18.36 4.64 18.36H5.92V20.28C5.92 20.4497 5.98743 20.6125 6.10745 20.7325C6.22747 20.8526 6.39026 20.92 6.56 20.92H19.36C19.5297 20.92 19.6925 20.8526 19.8125 20.7325C19.9326 20.6125 20 20.4497 20 20.28V3.64C20 3.47026 19.9326 3.30747 19.8125 3.18745C19.6925 3.06743 19.5297 3 19.36 3ZM18.72 19.64H7.2V18.36H7.84C8.00974 18.36 8.17252 18.2926 8.29255 18.1725C8.41257 18.0525 8.48 17.8897 8.48 17.72C8.48 17.5503 8.41257 17.3875 8.29255 17.2675C8.17252 17.1474 8.00974 17.08 7.84 17.08H7.2V6.84H7.84C8.00974 6.84 8.17252 6.77257 8.29255 6.65255C8.41257 6.53252 8.48 6.36974 8.48 6.2C8.48 6.03026 8.41257 5.86748 8.29255 5.74745C8.17252 5.62743 8.00974 5.56 7.84 5.56H7.2V4.28H18.72V19.64ZM13.6832 11.2688C13.6832 10.872 13.3504 10.6288 12.5824 10.3664C11.4688 9.9888 10.7136 9.4704 10.7136 8.4464C10.7291 7.97697 10.9161 7.5295 11.2392 7.18866C11.5624 6.84782 11.9993 6.63725 12.4672 6.5968V5.6304H13.4848V6.5392C14.0048 6.54777 14.5172 6.66551 14.9888 6.8848L14.688 8.056C14.2231 7.8298 13.7138 7.70957 13.1968 7.704C12.5184 7.704 12.3008 7.9984 12.3008 8.2864C12.3008 8.5744 12.6656 8.8496 13.5808 9.1824C14.816 9.6176 15.3152 10.1872 15.3152 11.1024C15.299 11.5945 15.101 12.0632 14.7593 12.4178C14.4177 12.7724 13.9568 12.9878 13.4656 13.0224V14.0784H12.416V13.1184C11.8012 13.1021 11.1978 12.9491 10.6496 12.6704L10.9632 11.4544C11.4892 11.7502 12.0813 11.9087 12.6848 11.9152C13.28 11.9152 13.6832 11.6848 13.6832 11.2688ZM9.12 15.8C9.12 15.6303 9.18743 15.4675 9.30745 15.3475C9.42747 15.2274 9.59026 15.16 9.76 15.16H16.16C16.3297 15.16 16.4925 15.2274 16.6125 15.3475C16.7326 15.4675 16.8 15.6303 16.8 15.8C16.8 15.9697 16.7326 16.1325 16.6125 16.2525C16.4925 16.3726 16.3297 16.44 16.16 16.44H9.76C9.59026 16.44 9.42747 16.3726 9.30745 16.2525C9.18743 16.1325 9.12 15.9697 9.12 15.8ZM9.12 17.72C9.12 17.5503 9.18743 17.3875 9.30745 17.2675C9.42747 17.1474 9.59026 17.08 9.76 17.08H16.16C16.3297 17.08 16.4925 17.1474 16.6125 17.2675C16.7326 17.3875 16.8 17.5503 16.8 17.72C16.8 17.8897 16.7326 18.0525 16.6125 18.1725C16.4925 18.2926 16.3297 18.36 16.16 18.36H9.76C9.59026 18.36 9.42747 18.2926 9.30745 18.1725C9.18743 18.0525 9.12 17.8897 9.12 17.72Z",
    fill: "black"
  })));
};

var _default = SalaryIcon;
exports["default"] = _default;