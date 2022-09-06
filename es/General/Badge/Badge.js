import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["label", "variant", "className"];
import * as React from 'react';
import classNames from 'classnames';
import isNil from 'lodash/isNil';
import { BadgeContainer } from './BadgeStyle';
import { BadgeVariant } from './BadgeVariant';
export var Badge = function Badge(_ref) {
  var label = _ref.label,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? BadgeVariant.DEFAULT : _ref$variant,
      className = _ref.className,
      defaultProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(React.Fragment, null, !isNil(label) && /*#__PURE__*/React.createElement(BadgeContainer, _extends({
    className: classNames('aries-badge', className),
    role: "presentation",
    variant: variant
  }, defaultProps), /*#__PURE__*/React.createElement("span", {
    className: "badge-content"
  }, label)));
};
export default Badge;