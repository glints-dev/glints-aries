import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "children", "variant", "bold", "color", "ellipsis", "shouldSetLineHeight"];
import * as React from 'react';
import classNames from 'classnames';
import { Paragraph as StyledParagraph } from './ParagraphStyles';
import { Greyscale } from '../../Utils/Colors';
export var Paragraph = function Paragraph(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'regular' : _ref$variant,
      _ref$bold = _ref.bold,
      bold = _ref$bold === void 0 ? false : _ref$bold,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? Greyscale.black : _ref$color,
      _ref$ellipsis = _ref.ellipsis,
      ellipsis = _ref$ellipsis === void 0 ? false : _ref$ellipsis,
      _ref$shouldSetLineHei = _ref.shouldSetLineHeight,
      shouldSetLineHeight = _ref$shouldSetLineHei === void 0 ? false : _ref$shouldSetLineHei,
      restProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledParagraph, _extends({
    className: classNames('aries-typography-paragraph', className),
    variant: variant,
    bold: bold,
    color: color,
    ellipsis: ellipsis,
    shouldSetLineHeight: shouldSetLineHeight
  }, restProps), children);
};
export default Paragraph;