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
var TieIcon = function TieIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M59.6073603,3.12638804e-13 C60.6109317,3.12638804e-13 61.5536009,0.481954887 62.1423227,1.2962406 C62.6889894,2.05641604 62.8662525,3.02126984 62.6270416,3.92029908 L62.5693904,4.11184211 L56.8932626,21.1404135 L80.6825483,47.9035714 C81.5831928,48.9146706 81.7229213,50.3821829 81.0544827,51.5393713 L80.9481498,51.7105263 L74.7009693,61.081391 C74.1600921,61.8927945 73.2737179,62.401274 72.3097514,62.4654651 L72.1020972,62.4723684 L64.6671348,62.4723684 L68.9175107,83.7246241 C69.1702855,84.9797261 68.628898,86.254094 67.5676004,86.9496988 L67.4045408,87.0496241 L45.5391272,99.5441729 C45.0601799,99.818797 44.5233378,99.956015 43.9895032,99.956015 C43.5319307,99.956015 43.0721486,99.8552018 42.6485093,99.6534569 L42.4398791,99.5441729 L20.5744656,87.0496241 C19.4618626,86.4133906 18.8554572,85.1684927 19.0295014,83.9129591 L19.0614957,83.7246241 L31.3934505,22.0644737 L25.40924,4.11203008 C25.0889393,3.16015038 25.2505934,2.11090226 25.8363077,1.29642857 C26.3857814,0.536253133 27.2435825,0.0657385129 28.1714547,0.0063817878 L28.3712701,3.12638804e-13 L59.6073603,3.12638804e-13 Z M50.7998415,24.9887218 L37.1789769,24.9887218 L25.6289769,82.7421053 L43.9893152,93.2355263 L62.3498415,82.7421053 L50.7998415,24.9887218 Z M58.6831122,32.5539474 L63.4173227,56.225 L70.4302926,56.225 C70.4302926,56.225 74.4141272,50.2522556 74.4141272,50.2524436 L74.4141272,50.2524436 L58.6831122,32.5539474 Z M55.2727739,6.24718045 L32.7060445,6.24718045 L36.8697663,18.7417293 L51.109052,18.7417293 L55.2727739,6.24718045 Z"
  }));
};

var _default = TieIcon;
exports["default"] = _default;