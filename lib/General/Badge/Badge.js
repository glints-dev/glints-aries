"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.Badge = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _isNil = _interopRequireDefault(require("lodash/isNil"));

var _BadgeStyle = require("./BadgeStyle");

var _BadgeVariant = require("./BadgeVariant");

var _excluded = ["label", "variant", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Badge = function Badge(_ref) {
  var label = _ref.label,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? _BadgeVariant.BadgeVariant.DEFAULT : _ref$variant,
      className = _ref.className,
      defaultProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  return /*#__PURE__*/React.createElement(React.Fragment, null, !(0, _isNil["default"])(label) && /*#__PURE__*/React.createElement(_BadgeStyle.BadgeContainer, (0, _extends2["default"])({
    className: (0, _classnames["default"])('aries-badge', className),
    role: "presentation",
    variant: variant
  }, defaultProps), /*#__PURE__*/React.createElement("span", {
    className: "badge-content"
  }, label)));
};

exports.Badge = Badge;
var _default = Badge;
exports["default"] = _default;