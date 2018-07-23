/* @flow */

import React from 'react';
import { Icon } from './../Icon';
import { LeftArrowContainer } from './../Style/SliderStyle';

const LeftArrow = (props: Props) => {
  const { index, previousSlide } = props;

  return (
    <LeftArrowContainer index={index} onClick={previousSlide}>
        <Icon name={"arrow-back"} size="35" />
    </LeftArrowContainer>
  );
}

type Props = {
  index: number,
  previousSlide: Function,
}

export default LeftArrow;
