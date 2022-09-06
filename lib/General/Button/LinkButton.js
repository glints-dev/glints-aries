"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ButtonStyle = require("./ButtonStyle");

var _excluded = ["children", "className", "tag", "forwardedRef"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var LinkButton = function LinkButton(_ref) {
  var children = _ref.children,
      className = _ref.className,
      tag = _ref.tag,
      forwardedRef = _ref.forwardedRef,
      defaultProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
  return /*#__PURE__*/React.createElement(_ButtonStyle.LinkBtn, (0, _extends2["default"])({
    ref: forwardedRef,
    className: (0, _classnames["default"])('aries-linkbtn', className),
    as: tag || 'button'
  }, defaultProps), children);
};

var forwardRef = function forwardRef(props, ref) {
  return /*#__PURE__*/React.createElement(LinkButton, (0, _extends2["default"])({}, props, {
    forwardedRef: ref
  }));
};

forwardRef.displayName = LinkButton.name;

var _default = /*#__PURE__*/React.forwardRef(forwardRef);

exports["default"] = _default;