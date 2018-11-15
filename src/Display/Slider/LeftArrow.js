/* @flow */

import React from 'react';
import { Icon } from '../../General/Icon';
import { LeftArrowContainer } from '../../Style/Display/SliderStyle';

const LeftArrow = (props: Props) => {
  const {
    index,
    previousSlide,
    arrowWhite,
  } = props;

  let arrowColor = 'black';

  if (index === 1) arrowColor = '#c7c7c7';

  return (
    <LeftArrowContainer index={index} onClick={previousSlide}>
      <Icon name="arrow-back" color={arrowWhite ? '#FFFFFF' : arrowColor} />
    </LeftArrowContainer>
  );
};

type Props = {
  index: number,
  previousSlide: Function,
  arrowWhite: boolean,
}

export default LeftArrow;
