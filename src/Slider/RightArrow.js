/* @flow */

import React from 'react';
import { Icons } from './../Icon';
import { RightArrowContainer } from './../Style/SliderStyle';

const RightArrow = (props: Props) => {
  const { index, limit, nextSlide } = props;

  return (
    <RightArrowContainer index={index} limit={limit} onClick={nextSlide}>
        <Icons name={"chevron-next"} />
    </RightArrowContainer>
  );
}

type Props = {
  index: number,
  limit: number,
  nextSlide: Function,
}

export default RightArrow;
