import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "block", "className", "disabled", "onClick", "small", "variant", "startIcon", "endIcon", "theme", "forwardedRef"];

var _SOLID_BUTTON_THEME_M;

import React from 'react';
import SolidButton from './SolidButton';
import SolidShadowButton from './SolidShadowButton';
import GhostButton from './GhostButton';
import LinkButton from './LinkButton';
import { ButtonVariant, ButtonTheme } from '../../Utils/StyleConfig';
import { StartIconContainer, EndIconContainer, WhiteGreyBtn } from './ButtonStyle';
var SOLID_BUTTON_THEME_MAP = (_SOLID_BUTTON_THEME_M = {}, _SOLID_BUTTON_THEME_M[ButtonVariant.SOLID_WHITE] = ButtonTheme.WHITE, _SOLID_BUTTON_THEME_M[ButtonVariant.SOLID_BLUE] = ButtonTheme.BLUE, _SOLID_BUTTON_THEME_M);
export var transformVariant = function transformVariant(variant, theme) {
  if (theme) {
    console.warn("Warning: Button's theme prop is deprecated and will be removed in a future release.\nPlease use the variant prop instead.");
  }

  if ((variant === ButtonVariant.SOLID_WHITE || variant === 'default') && theme && theme !== ButtonTheme.WHITE) {
    console.warn("Warning: Button's 'default' variant is deprecated and will be removed in a future release.\nPlease use the 'solid-blue' or 'solid-white' variant instead.");
    return ButtonVariant.SOLID_BLUE;
  } else if (variant === 'primary') {
    console.warn("Warning: Button's 'primary' variant is deprecated and will be removed in a future release.\nPlease use the 'yellow' variant instead.");
    return ButtonVariant.YELLOW;
  } else if (Object.values(ButtonVariant).includes(variant)) {
    return variant;
  }

  return ButtonVariant.SOLID_WHITE;
};
export var Button = function Button(_ref) {
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
      variant = _ref$variant === void 0 ? ButtonVariant.SOLID_WHITE : _ref$variant,
      startIcon = _ref.startIcon,
      endIcon = _ref.endIcon,
      theme = _ref.theme,
      forwardedRef = _ref.forwardedRef,
      defaultProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var content = /*#__PURE__*/React.createElement(React.Fragment, null, startIcon && /*#__PURE__*/React.createElement(StartIconContainer, null, startIcon), children, endIcon && /*#__PURE__*/React.createElement(EndIconContainer, null, endIcon));
  var transformedVariant = transformVariant(variant, theme);

  switch (transformedVariant) {
    case ButtonVariant.YELLOW:
      return /*#__PURE__*/React.createElement(SolidShadowButton, _extends({
        ref: forwardedRef,
        className: className,
        disabled: disabled,
        onClick: onClick,
        block: block,
        small: small
      }, defaultProps), content);

    case ButtonVariant.GHOST:
      return /*#__PURE__*/React.createElement(GhostButton, _extends({
        ref: forwardedRef,
        className: className,
        disabled: disabled,
        onClick: onClick,
        block: block,
        small: small
      }, defaultProps), content);

    case ButtonVariant.WHITE_GREY:
      return /*#__PURE__*/React.createElement(WhiteGreyBtn, _extends({
        ref: forwardedRef,
        className: className,
        disabled: disabled,
        onClick: onClick,
        block: block,
        small: small
      }, defaultProps), content);

    case ButtonVariant.LINK:
      return /*#__PURE__*/React.createElement(LinkButton, _extends({
        ref: forwardedRef,
        className: className,
        disabled: disabled,
        onClick: onClick,
        block: block
      }, defaultProps), content);

    default:
      return /*#__PURE__*/React.createElement(SolidButton, _extends({
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

var forwardRef = function forwardRef(props, forwardedRef) {
  return /*#__PURE__*/React.createElement(Button, _extends({
    forwardedRef: forwardedRef
  }, props));
};

forwardRef.displayName = Button.name;
export default /*#__PURE__*/React.forwardRef(forwardRef);