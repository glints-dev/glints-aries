import * as React from 'react';
import classNames from 'classnames';
import { SwipeableContainer } from './SwipeableStyle';
import SwipeableItem from './SwipeableItem';
/** You can add any number of  <Swipeable.Item />  components as children of the Swipeable component, controlling the behavior of an individual swipeable item.  */

export var Swipeable = function Swipeable(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/React.createElement(SwipeableContainer, {
    className: classNames('aries-swipeable', className)
  }, children);
};
Swipeable.Item = SwipeableItem;
export default Swipeable;