"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _camelCase = _interopRequireDefault(require("lodash/camelCase"));

var _upperFirst = _interopRequireDefault(require("lodash/upperFirst"));

var _IconLibrary = require("../../Utils/Icon/IconLibrary");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var formatWarning = function formatWarning(name) {
  var camelCaseName = (0, _upperFirst["default"])((0, _camelCase["default"])(name));
  return "Warning: <Icon name=\"" + name + "\" /> will be deprecated in a future release.\n\nPlease use <" + camelCaseName + "Icon /> to instead. See http://aries.glints.design/?path=/story/general--icon for details.";
};

var LegacyIcon = function LegacyIcon(props) {
  var name = props.name,
      color = props.color;
  var iconName = name.replace(/-/g, '_');

  if (typeof console !== 'undefined') {
    console.warn(formatWarning(name));
  }

  return /*#__PURE__*/React.createElement("svg", {
    width: "1em",
    height: "1em",
    fill: color,
    viewBox: "0 0 100 100"
  }, _IconLibrary.ICONS[iconName.toUpperCase()]);
};

var _default = LegacyIcon;
exports["default"] = _default;