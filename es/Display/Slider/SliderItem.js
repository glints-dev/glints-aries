import * as React from 'react';
import { SliderItemWrapper } from './SliderStyle';

var SliderItem = function SliderItem(props) {
  var children = props.children;
  return /*#__PURE__*/React.createElement(SliderItemWrapper, {
    className: "slider-item"
  }, children);
};

export default SliderItem;