/* @flow */

import React from 'react';
import { Icon } from './../Icon';
import { RightArrowContainer } from './../Style/SliderStyle';

const RightArrow = (props: Props) => {
  const { index, limit, nextSlide } = props;

  return (
    <RightArrowContainer index={index} limit={limit} onClick={nextSlide}>
        <Icon name={"arrow-next"} size="35" />
    </RightArrowContainer>
  );
}

type Props = {
  index: number,
  limit: number,
  nextSlide: Function,
}

export default RightArrow;
