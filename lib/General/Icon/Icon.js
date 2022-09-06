"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.iconSizeMap = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _IconStyle = require("./IconStyle");

var _excluded = ["className", "children", "color", "width", "height", "onClick", "size"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var iconSizeMap = {
  xxs: '12px',
  xs: '16px',
  s: '24px',
  m: '32px',
  l: '48px',
  xl: '64px',
  xxl: '96px',
  xxxl: '128px'
};
exports.iconSizeMap = iconSizeMap;

var Icon = function Icon(props) {
  var className = props.className,
      children = props.children,
      _props$color = props.color,
      color = _props$color === void 0 ? 'currentColor' : _props$color,
      _props$width = props.width,
      width = _props$width === void 0 ? '1em' : _props$width,
      _props$height = props.height,
      height = _props$height === void 0 ? '1em' : _props$height,
      onClick = props.onClick,
      size = props.size,
      restProps = (0, _objectWithoutPropertiesLoose2["default"])(props, _excluded);
  return /*#__PURE__*/React.createElement(_IconStyle.VerticalCenteredSvg, (0, _extends2["default"])({
    "data-testid": "icon-svg",
    className: className,
    width: iconSizeMap[size] || width,
    height: iconSizeMap[size] || height,
    onClick: onClick,
    fill: color,
    viewBox: "0 0 100 100"
  }, restProps), children);
};

var _default = Icon;
exports["default"] = _default;