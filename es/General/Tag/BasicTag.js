import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "children", "block", "outline", "onClick"];
import * as React from 'react';
import classNames from 'classnames';
import { TagContainer, TagContent } from './TagStyle';

var Tag = function Tag(props) {
  var className = props.className,
      children = props.children,
      block = props.block,
      outline = props.outline,
      onClick = props.onClick,
      restProps = _objectWithoutPropertiesLoose(props, _excluded);

  return /*#__PURE__*/React.createElement(TagContainer, _extends({
    className: classNames('aries-tag', className),
    role: "presentation",
    tabIndex: 0,
    block: block,
    outline: outline,
    isClickable: typeof onClick === 'function',
    onClick: onClick
  }, restProps), /*#__PURE__*/React.createElement(TagContent, {
    className: "tag-content",
    tabIndex: -1
  }, children));
};

Tag.defaultProps = {
  block: false,
  outline: false
};
export default Tag;