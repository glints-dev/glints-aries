/* @flow */

import React from 'react';
import { Icons } from './../Icon';
import { LeftArrowContainer } from './../Style/SliderStyle';

const LeftArrow = (props: Props) => {
  const { index, previousSlide } = props;

  return (
    <LeftArrowContainer index={index} onClick={previousSlide}>
        <Icons name={"chevron-back"} />
    </LeftArrowContainer>
  );
}

type Props = {
  index: number,
  previousSlide: Function,
}

export default LeftArrow;
