import * as React from 'react';
import { ArrowBackIcon } from '../../General/Icon/components';
import { LeftArrowContainer } from './SliderStyle';
import { getArrowColor } from './utils';

var LeftArrow = function LeftArrow(props) {
  var index = props.index,
      previousSlide = props.previousSlide,
      arrowWhite = props.arrowWhite,
      renderLeftIcon = props.renderLeftIcon;
  var disabled = index === 1;
  var color = getArrowColor(arrowWhite, disabled);
  return /*#__PURE__*/React.createElement(LeftArrowContainer, {
    disabled: disabled,
    onClick: previousSlide,
    "data-testid": "slider_left-arrow"
  }, renderLeftIcon ? renderLeftIcon(disabled) : /*#__PURE__*/React.createElement(ArrowBackIcon, {
    color: color
  }));
};

export default LeftArrow;