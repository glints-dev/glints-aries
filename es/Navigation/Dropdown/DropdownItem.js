import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "className"];
import * as React from 'react';
import { DropdownItemWrapper } from './DropdownStyle';

var DropdownItem = function DropdownItem(props) {
  var children = props.children,
      className = props.className,
      defaultProps = _objectWithoutPropertiesLoose(props, _excluded);

  return /*#__PURE__*/React.createElement(DropdownItemWrapper, _extends({
    className: className
  }, defaultProps), children);
};

export default DropdownItem;