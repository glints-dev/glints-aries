"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.transformVariant = exports["default"] = exports.Button = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _SolidButton = _interopRequireDefault(require("./SolidButton"));

var _SolidShadowButton = _interopRequireDefault(require("./SolidShadowButton"));

var _GhostButton = _interopRequireDefault(require("./GhostButton"));

var _LinkButton = _interopRequireDefault(require("./LinkButton"));

var _StyleConfig = require("../../Utils/StyleConfig");

var _ButtonStyle = require("./ButtonStyle");

var _excluded = ["children", "block", "className", "disabled", "onClick", "small", "variant", "startIcon", "endIcon", "theme", "forwardedRef"];

var _SOLID_BUTTON_THEME_M;

var SOLID_BUTTON_THEME_MAP = (_SOLID_BUTTON_THEME_M = {}, _SOLID_BUTTON_THEME_M[_StyleConfig.ButtonVariant.SOLID_WHITE] = _StyleConfig.ButtonTheme.WHITE, _SOLID_BUTTON_THEME_M[_StyleConfig.ButtonVariant.SOLID_BLUE] = _StyleConfig.ButtonTheme.BLUE, _SOLID_BUTTON_THEME_M);

var transformVariant = function transformVariant(variant, theme) {
  if (theme) {
    console.warn("Warning: Button's theme prop is deprecated and will be removed in a future release.\nPlease use the variant prop instead.");
  }

  if ((variant === _StyleConfig.ButtonVariant.SOLID_WHITE || variant === 'default') && theme && theme !== _StyleConfig.ButtonTheme.WHITE) {
    console.warn("Warning: Button's 'default' variant is deprecated and will be removed in a future release.\nPlease use the 'solid-blue' or 'solid-white' variant instead.");
    return _StyleConfig.ButtonVariant.SOLID_BLUE;
  } else if (variant === 'primary') {
    console.warn("Warning: Button's 'primary' variant is deprecated and will be removed in a future release.\nPlease use the 'yellow' variant instead.");
    return _StyleConfig.ButtonVariant.YELLOW;
  } else if (Object.values(_StyleConfig.ButtonVariant).includes(variant)) {
    return variant;
  }

  return _StyleConfig.ButtonVariant.SOLID_WHITE;
};

exports.transformVariant = transformVariant;

var Button = function Button(_ref) {
  var children = _ref.children,
      _ref$block = _ref.block,
      block = _ref$block === void 0 ? false : _ref$block,
      className = _ref.className,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      onClick = _ref.onClick,
      _ref$small = _ref.small,
      small = _ref$small === void 0 ? false : _ref$small,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? _StyleConfig.ButtonVariant.SOLID_WHITE : _ref$variant,
      startIcon = _ref.startIcon,
      endIcon = _ref.endIcon,
      theme = _ref.theme,
      forwardedRef = _ref.forwardedRef,
      defaultProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);

  var content = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, startIcon && /*#__PURE__*/_react["default"].createElement(_ButtonStyle.StartIconContainer, null, startIcon), children, endIcon && /*#__PURE__*/_react["default"].createElement(_ButtonStyle.EndIconContainer, null, endIcon));

  var transformedVariant = transformVariant(variant, theme);

  switch (transformedVariant) {
    case _StyleConfig.ButtonVariant.YELLOW:
      return /*#__PURE__*/_react["default"].createElement(_SolidShadowButton["default"], (0, _extends2["default"])({
        ref: forwardedRef,
        className: className,
        disabled: disabled,
        onClick: onClick,
        block: block,
        small: small
      }, defaultProps), content);

    case _StyleConfig.ButtonVariant.GHOST:
      return /*#__PURE__*/_react["default"].createElement(_GhostButton["default"], (0, _extends2["default"])({
        ref: forwardedRef,
        className: className,
        disabled: disabled,
        onClick: onClick,
        block: block,
        small: small
      }, defaultProps), content);

    case _StyleConfig.ButtonVariant.WHITE_GREY:
      return /*#__PURE__*/_react["default"].createElement(_ButtonStyle.WhiteGreyBtn, (0, _extends2["default"])({
        ref: forwardedRef,
        className: className,
        disabled: disabled,
        onClick: onClick,
        block: block,
        small: small
      }, defaultProps), content);

    case _StyleConfig.ButtonVariant.LINK:
      return /*#__PURE__*/_react["default"].createElement(_LinkButton["default"], (0, _extends2["default"])({
        ref: forwardedRef,
        className: className,
        disabled: disabled,
        onClick: onClick,
        block: block
      }, defaultProps), content);

    default:
      return /*#__PURE__*/_react["default"].createElement(_SolidButton["default"], (0, _extends2["default"])({
        ref: forwardedRef,
        theme: SOLID_BUTTON_THEME_MAP[transformedVariant],
        className: className,
        disabled: disabled,
        onClick: onClick,
        block: block,
        small: small
      }, defaultProps), content);
  }
};

exports.Button = Button;

var forwardRef = function forwardRef(props, forwardedRef) {
  return /*#__PURE__*/_react["default"].createElement(Button, (0, _extends2["default"])({
    forwardedRef: forwardedRef
  }, props));
};

forwardRef.displayName = Button.name;

var _default = /*#__PURE__*/_react["default"].forwardRef(forwardRef);

exports["default"] = _default;