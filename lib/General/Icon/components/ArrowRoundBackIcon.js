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
var ArrowRoundBackIcon = function ArrowRoundBackIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M44.4445384,14.4136913 C46.3088655,16.2047467 46.3348588,19.0376358 44.5493022,20.8577331 L44.3581284,21.042322 L17.28125,45.8125003 L95,45.8125003 C97.7614237,45.8125003 100,47.9111654 100,50.5 C100,53.0103851 97.8950394,55.0598578 95.2495504,55.181763 L95,55.1874997 L17.2825,55.1874997 L44.3581284,79.957678 C46.3344655,81.7657537 46.3731526,84.7334928 44.4445384,86.5863087 C42.5802114,88.3773641 39.5600005,88.4709575 37.5755066,86.8419789 L37.3739986,86.6673181 L1.35397574,53.7076563 L1.19577613,53.5423419 L0.988206348,53.298847 L0.791063226,53.0320733 L0.664855445,52.8379905 L0.485863456,52.5186041 L0.394668241,52.3285308 L0.28580122,52.0659218 L0.192052855,51.7910737 L0.127333688,51.5557599 L0.0397400368,51.0938255 L0.029857344,51.0127309 C0.0100422107,50.8445883 0,50.6733936 0,50.5 L0.00764071294,50.2386425 L0.037414119,49.9236877 L0.0780119804,49.6731392 L0.145923522,49.3714693 L0.216143076,49.1333391 L0.289453829,48.9245495 L0.401207047,48.657022 L0.50245861,48.449107 L0.697722405,48.1093139 L0.833335592,47.907155 L1.02364647,47.6571629 L1.19470294,47.4588352 L1.42152509,47.2261893 L37.3739986,14.3326819 C39.3503357,12.5246062 42.5159242,12.5608753 44.4445384,14.4136913 Z"
  }));
};

var _default = ArrowRoundBackIcon;
exports["default"] = _default;