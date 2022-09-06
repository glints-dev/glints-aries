"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.Paragraph = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ParagraphStyles = require("./ParagraphStyles");

var _Colors = require("../../Utils/Colors");

var _excluded = ["className", "children", "variant", "bold", "color", "ellipsis", "shouldSetLineHeight"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Paragraph = function Paragraph(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'regular' : _ref$variant,
      _ref$bold = _ref.bold,
      bold = _ref$bold === void 0 ? false : _ref$bold,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? _Colors.Greyscale.black : _ref$color,
      _ref$ellipsis = _ref.ellipsis,
      ellipsis = _ref$ellipsis === void 0 ? false : _ref$ellipsis,
      _ref$shouldSetLineHei = _ref.shouldSetLineHeight,
      shouldSetLineHeight = _ref$shouldSetLineHei === void 0 ? false : _ref$shouldSetLineHei,
      restProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  return /*#__PURE__*/React.createElement(_ParagraphStyles.Paragraph, (0, _extends2["default"])({
    className: (0, _classnames["default"])('aries-typography-paragraph', className),
    variant: variant,
    bold: bold,
    color: color,
    ellipsis: ellipsis,
    shouldSetLineHeight: shouldSetLineHeight
  }, restProps), children);
};

exports.Paragraph = Paragraph;
var _default = Paragraph;
exports["default"] = _default;