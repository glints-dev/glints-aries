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
var WhatsappIcon = function WhatsappIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M84.62 14.436c4.738 4.738 8.402 10.106 10.993 16.103A46.832 46.832 0 0 1 99.5 49.306c0 8.884-2.258 17.101-6.774 24.653-4.516 7.551-10.587 13.548-18.212 17.99-7.625 4.442-15.88 6.663-24.764 6.663-8.44 0-16.287-2-23.542-5.997L0 99.5 7.107 73.96C2.665 66.407.444 58.189.444 49.306c0-8.884 2.221-17.102 6.663-24.653 4.442-7.551 10.439-13.548 17.99-17.99C32.648 2.221 40.867 0 49.75 0c6.515 0 12.77 1.259 18.767 3.776s11.364 6.07 16.102 10.66zM49.75 90.394c7.403 0 14.288-1.85 20.655-5.552 6.367-3.702 11.438-8.7 15.214-14.992 3.776-6.293 5.663-13.14 5.663-20.544 0-5.33-1.11-10.513-3.331-15.547a43.928 43.928 0 0 0-9.217-13.437c-3.924-3.924-8.366-6.922-13.326-8.995-4.96-2.073-10.18-3.11-15.658-3.11-7.403 0-14.251 1.851-20.544 5.553-6.293 3.702-11.29 8.699-14.992 14.992-3.701 6.293-5.552 13.14-5.552 20.544 0 7.847 2.147 15.103 6.44 21.765l.89 1.555-4.22 15.103 15.546-3.998 1.555.888c6.367 3.85 13.326 5.775 20.877 5.775zm22.432-30.872l.666.445c1.037.444 1.629.814 1.777 1.11.148.296.185 1.037.111 2.221-.074 1.185-.37 2.406-.888 3.665-.519 1.258-1.703 2.517-3.554 3.775-1.85 1.259-3.442 1.962-4.775 2.11-2.073.296-4.072.296-5.997 0-2.22-.444-5.182-1.48-8.884-3.11-7.55-3.257-14.436-9.327-20.655-18.211l-.444-.444c-3.257-4.59-4.886-8.81-4.886-12.66 0-3.85 1.333-7.181 3.998-9.994l.222-.223c1.036-1.036 2.147-1.554 3.331-1.554h2.665c.593 0 1.074.11 1.444.333.37.222.703.777 1 1.666l3.775 9.106c.444.888.518 1.628.222 2.22a15.295 15.295 0 0 1-2.887 3.998c-.592.593-.962 1.074-1.11 1.444-.149.37 0 .777.444 1.222 2.073 3.85 4.516 6.885 7.329 9.106 2.073 1.628 5.182 3.48 9.328 5.552 1.185.592 2.073.518 2.665-.222 1.925-2.22 3.258-3.85 3.998-4.886.296-.592.666-.889 1.11-.889.445 0 .963.075 1.555.223 1.185.444 3.998 1.776 8.44 3.997z"
  }));
};

var _default = WhatsappIcon;
exports["default"] = _default;