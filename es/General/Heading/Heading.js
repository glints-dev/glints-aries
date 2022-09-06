import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "inline", "children", "uppercaseText"];
import React from 'react';
import classNames from 'classnames';
import { HeadingContainer } from './HeadingStyle';
export var Heading = function Heading(props) {
  var className = props.className,
      _props$inline = props.inline,
      inline = _props$inline === void 0 ? false : _props$inline,
      children = props.children,
      _props$uppercaseText = props.uppercaseText,
      uppercaseText = _props$uppercaseText === void 0 ? false : _props$uppercaseText,
      defaultProps = _objectWithoutPropertiesLoose(props, _excluded);

  return /*#__PURE__*/React.createElement(HeadingContainer, _extends({
    role: "heading",
    className: classNames('aries-heading', className),
    inline: inline,
    uppercaseText: uppercaseText
  }, defaultProps), /*#__PURE__*/React.createElement("span", {
    className: "heading-text"
  }, children));
};
export default Heading;