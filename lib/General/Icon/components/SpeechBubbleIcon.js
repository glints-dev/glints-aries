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
var SpeechBubbleIcon = function SpeechBubbleIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M93.2365234,24.859375 C88.775,19.3761719 82.7148438,15.0451172 75.0576172,11.8666016 C67.4005859,8.68847656 59.0351563,7.09902344 49.9642578,7.09902344 C43.1980469,7.09902344 36.7294922,8.0375 30.5585937,9.91484375 C24.3876953,11.7919922 19.071875,14.3292969 14.6107422,17.5261719 C10.1488281,20.7234375 6.59941406,24.5246094 3.95957031,28.9294922 C1.31972656,33.3345703 0,37.9539062 0,42.7867187 C0,48.3626953 1.68164062,53.5875 5.04628906,58.4574219 C8.4109375,63.3267578 13.0107422,67.4166016 18.8478516,70.7251953 C18.4384766,72.2117187 17.9552734,73.6248047 17.3974609,74.9621094 C16.8398438,76.3003906 16.3380859,77.3984375 15.8919922,78.2533203 C15.4455078,79.1082031 14.8419922,80.0566406 14.0792969,81.0974609 C13.3177734,82.1380859 12.7416016,82.8726562 12.3511719,83.2996094 C11.9611328,83.7273437 11.3199219,84.4347656 10.4271484,85.4185547 C9.53554688,86.4044922 8.95898438,87.0453125 8.69902344,87.3433594 C8.66132813,87.3607422 8.51289063,87.5292969 8.25273438,87.8447266 C7.99277344,88.1601562 7.86230469,88.3179687 7.86230469,88.3179687 L7.52773438,88.8191406 C7.34160156,89.0986328 7.25800781,89.275 7.27636719,89.3478516 C7.29511719,89.4207031 7.25800781,89.6078125 7.16503906,89.9046875 C7.071875,90.2027344 7.08144531,90.4259766 7.19277344,90.5751953 L7.19277344,90.6306641 C7.3421875,91.3003906 7.66738281,91.8390625 8.16894531,92.2472656 C8.67050781,92.6558594 9.23808594,92.8234375 9.86972656,92.7478516 C12.2867188,92.4505859 14.4054688,92.0435547 16.2267578,91.5220703 C25.9669922,89.0302734 34.5175781,84.5333984 41.8779297,78.0265625 C44.6654297,78.3238281 47.3607422,78.4730469 49.9630859,78.4730469 C59.0337891,78.4730469 67.3988281,76.8835937 75.0566406,73.7041016 C82.7144531,70.5259766 88.7740234,66.1947266 93.2347656,60.7125 C97.6962891,55.2316406 99.9267578,49.2548828 99.9267578,42.7865234 C99.9267578,36.3179687 97.6966797,30.3416016 93.2365234,24.859375 Z"
  }));
};

var _default = SpeechBubbleIcon;
exports["default"] = _default;