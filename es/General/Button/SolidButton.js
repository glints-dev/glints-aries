import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "className", "theme", "disabled", "block", "small", "tag", "forwardedRef", "isRoundedCorner"];
import * as React from 'react';
import classNames from 'classnames';
import { SolidBtnContainer, SolidBtn } from './ButtonStyle';

var SolidButton = function SolidButton(_ref) {
  var children = _ref.children,
      className = _ref.className,
      theme = _ref.theme,
      disabled = _ref.disabled,
      block = _ref.block,
      small = _ref.small,
      tag = _ref.tag,
      forwardedRef = _ref.forwardedRef,
      isRoundedCorner = _ref.isRoundedCorner,
      defaultProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(SolidBtnContainer, {
    className: classNames('aries-solid-btn', className),
    theme: theme,
    disabled: disabled,
    block: block,
    isRoundedCorner: isRoundedCorner
  }, /*#__PURE__*/React.createElement(SolidBtn, _extends({
    ref: forwardedRef,
    className: "solid-btn-content",
    theme: theme,
    disabled: disabled,
    block: block,
    small: small,
    as: tag || 'button',
    isRoundedCorner: isRoundedCorner
  }, defaultProps), children));
};

var forwardRef = function forwardRef(props, ref) {
  return /*#__PURE__*/React.createElement(SolidButton, _extends({}, props, {
    forwardedRef: ref
  }));
};

forwardRef.displayName = SolidButton.name;
export default /*#__PURE__*/React.forwardRef(forwardRef);