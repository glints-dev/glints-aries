import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "className", "onClick"];
import * as React from 'react';
import { SelectItemWrapper } from './SelectStyle';

var SelectItem = function SelectItem(props) {
  var children = props.children,
      className = props.className,
      onClick = props.onClick,
      defaultProps = _objectWithoutPropertiesLoose(props, _excluded);

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SelectItemWrapper, _extends({
    className: className,
    onMouseDown: onClick
  }, defaultProps), children));
};

export default SelectItem;