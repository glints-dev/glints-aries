import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "children", "color", "ellipsis", "tag", "uppercase"];
import * as React from 'react';
import classNames from 'classnames';
import { Title as StyledTitle } from './TitleStyles';
import { Greyscale } from '../../Utils/Colors';
export var Title = function Title(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? Greyscale.black : _ref$color,
      _ref$ellipsis = _ref.ellipsis,
      ellipsis = _ref$ellipsis === void 0 ? false : _ref$ellipsis,
      _ref$tag = _ref.tag,
      tag = _ref$tag === void 0 ? 'h1' : _ref$tag,
      _ref$uppercase = _ref.uppercase,
      uppercase = _ref$uppercase === void 0 ? false : _ref$uppercase,
      restProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledTitle, _extends({
    className: classNames('aries-typography-title', className),
    as: tag,
    color: color,
    ellipsis: ellipsis,
    uppercase: uppercase
  }, restProps), children);
};
export default Title;