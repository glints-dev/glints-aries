import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "className", "tag", "forwardedRef"];
import * as React from 'react';
import classNames from 'classnames';
import { LinkBtn } from './ButtonStyle';

var LinkButton = function LinkButton(_ref) {
  var children = _ref.children,
      className = _ref.className,
      tag = _ref.tag,
      forwardedRef = _ref.forwardedRef,
      defaultProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(LinkBtn, _extends({
    ref: forwardedRef,
    className: classNames('aries-linkbtn', className),
    as: tag || 'button'
  }, defaultProps), children);
};

var forwardRef = function forwardRef(props, ref) {
  return /*#__PURE__*/React.createElement(LinkButton, _extends({}, props, {
    forwardedRef: ref
  }));
};

forwardRef.displayName = LinkButton.name;
export default /*#__PURE__*/React.forwardRef(forwardRef);