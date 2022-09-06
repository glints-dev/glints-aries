import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "className", "theme", "disabled", "block", "small", "tag", "isRoundedCorner", "forwardedRef"];
import * as React from 'react';
import classNames from 'classnames';
import { GhostBtnContainer, GhostBtn } from './ButtonStyle';

var GhostButton = function GhostButton(_ref) {
  var children = _ref.children,
      className = _ref.className,
      theme = _ref.theme,
      disabled = _ref.disabled,
      block = _ref.block,
      small = _ref.small,
      tag = _ref.tag,
      isRoundedCorner = _ref.isRoundedCorner,
      forwardedRef = _ref.forwardedRef,
      defaultProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(GhostBtnContainer, {
    className: classNames('aries-ghostbtn', className),
    theme: theme,
    disabled: disabled,
    block: block,
    isRoundedCorner: isRoundedCorner
  }, /*#__PURE__*/React.createElement(GhostBtn, _extends({
    ref: forwardedRef,
    className: "ghostbtn-content",
    theme: theme,
    disabled: disabled,
    block: block,
    small: small,
    as: tag || 'button',
    isRoundedCorner: isRoundedCorner
  }, defaultProps), children));
};

var forwardRef = function forwardRef(props, ref) {
  return /*#__PURE__*/React.createElement(GhostButton, _extends({}, props, {
    forwardedRef: ref
  }));
};

forwardRef.displayName = GhostButton.name;
export default /*#__PURE__*/React.forwardRef(forwardRef);