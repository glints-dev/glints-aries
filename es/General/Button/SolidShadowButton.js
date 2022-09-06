import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "className", "theme", "disabled", "block", "small", "tag", "forwardedRef"];
import * as React from 'react';
import classNames from 'classnames';
import { SolidShadowContainer, SolidShadowBtn } from './ButtonStyle';

var SolidShadowButton = function SolidShadowButton(_ref) {
  var children = _ref.children,
      className = _ref.className,
      theme = _ref.theme,
      disabled = _ref.disabled,
      block = _ref.block,
      small = _ref.small,
      tag = _ref.tag,
      forwardedRef = _ref.forwardedRef,
      defaultProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(SolidShadowContainer, {
    className: classNames('aries-solid-shadow-btn', className),
    theme: theme,
    disabled: disabled,
    block: block
  }, /*#__PURE__*/React.createElement(SolidShadowBtn, _extends({
    ref: forwardedRef,
    className: "solid-shadow-btn-content",
    theme: theme,
    disabled: disabled,
    block: block,
    small: small,
    as: tag || 'button'
  }, defaultProps), children));
};

var forwardRef = function forwardRef(props, ref) {
  return /*#__PURE__*/React.createElement(SolidShadowButton, _extends({}, props, {
    forwardedRef: ref
  }));
};

forwardRef.displayName = SolidShadowButton.name;
export default /*#__PURE__*/React.forwardRef(forwardRef);