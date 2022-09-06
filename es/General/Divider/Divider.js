import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["theme", "className"];
import React from 'react';
import classNames from 'classnames';
import { DividerContainer } from './DividerStyle';
/**
 * Use className or style to change the divider's
 * height
 */

export var Divider = function Divider(_ref) {
  var _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'default' : _ref$theme,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(DividerContainer, _extends({}, props, {
    className: classNames('aries-divider', className),
    theme: theme
  }));
};
export default Divider;