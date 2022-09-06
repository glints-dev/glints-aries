import * as React from 'react';
import { ArrowNextIcon } from '../../General/Icon/components';
import { RightArrowContainer } from './SliderStyle';
import { getArrowColor } from './utils';

var RightArrow = function RightArrow(props) {
  var index = props.index,
      limit = props.limit,
      nextSlide = props.nextSlide,
      arrowWhite = props.arrowWhite,
      renderRightIcon = props.renderRightIcon;
  var disabled = index === limit;
  var color = getArrowColor(arrowWhite, disabled);
  return /*#__PURE__*/React.createElement(RightArrowContainer, {
    disabled: disabled,
    onClick: nextSlide,
    "data-testid": "slider_right-arrow"
  }, renderRightIcon ? renderRightIcon(disabled) : /*#__PURE__*/React.createElement(ArrowNextIcon, {
    color: color
  }));
};

export default RightArrow;