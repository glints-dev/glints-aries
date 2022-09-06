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
var BuildingSolidIcon = function BuildingSolidIcon(props) {
  return /*#__PURE__*/React.createElement(_Icon["default"], props, /*#__PURE__*/React.createElement("path", {
    d: "M100,0 L100,100 L73.9128906,100 L73.9128906,69.5652344 L56.5216797,69.5652344 L56.5216797,100 L0,100 L0,36.9564453 L30.4347656,36.9564453 L30.4347656,0 L100,0 Z M30.4347656,43.4783203 L6.52167969,43.4783203 L6.52167969,93.4783203 L30.4347656,93.4783203 L30.4347656,43.4783203 Z M23.9130859,69.5652344 L23.9130859,78.2609375 L13.0435547,78.2609375 L13.0435547,69.5652344 L23.9130859,69.5652344 Z M50,69.5652344 L41.3042969,69.5652344 L41.3042969,78.2609375 L50,78.2609375 L50,69.5652344 Z M89.1304688,69.5652344 L80.4347656,69.5652344 L80.4347656,78.2609375 L89.1304688,78.2609375 L89.1304688,69.5652344 Z M23.9130859,52.1738281 L23.9130859,60.8695312 L13.0435547,60.8695312 L13.0435547,52.1738281 L23.9130859,52.1738281 Z M50,52.1738281 L41.3042969,52.1738281 L41.3042969,60.8695312 L50,60.8695312 L50,52.1738281 Z M69.5652344,52.1738281 L60.8695312,52.1738281 L60.8695312,60.8695312 L69.5652344,60.8695312 L69.5652344,52.1738281 Z M89.1304688,52.1738281 L80.4347656,52.1738281 L80.4347656,60.8695312 L89.1304688,60.8695312 L89.1304688,52.1738281 Z M50,34.7826172 L41.3042969,34.7826172 L41.3042969,43.4783203 L50,43.4783203 L50,34.7826172 Z M69.5652344,34.7826172 L60.8695312,34.7826172 L60.8695312,43.4783203 L69.5652344,43.4783203 L69.5652344,34.7826172 Z M89.1304688,34.7826172 L80.4347656,34.7826172 L80.4347656,43.4783203 L89.1304688,43.4783203 L89.1304688,34.7826172 Z M50,17.3914063 L41.3042969,17.3914063 L41.3042969,26.0869141 L50,26.0869141 L50,17.3914063 Z M69.5652344,17.3914063 L60.8695312,17.3914063 L60.8695312,26.0869141 L69.5652344,26.0869141 L69.5652344,17.3914063 Z M89.1304688,17.3914063 L80.4347656,17.3914063 L80.4347656,26.0869141 L89.1304688,26.0869141 L89.1304688,17.3914063 Z"
  }));
};

var _default = BuildingSolidIcon;
exports["default"] = _default;