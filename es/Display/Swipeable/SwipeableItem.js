import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "className"];
import * as React from 'react';
import classNames from 'classnames';
import { SwipeableItemWrapper } from './SwipeableStyle';

var SwipeableItem = function SwipeableItem(props) {
  var children = props.children,
      className = props.className,
      defaultProps = _objectWithoutPropertiesLoose(props, _excluded);

  return /*#__PURE__*/React.createElement(SwipeableItemWrapper, _extends({
    className: classNames('swipeable-itemwrapper', className)
  }, defaultProps), children);
};

export default SwipeableItem;