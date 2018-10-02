/* @flow */

import React from 'react';
import { SliderItemStyle } from '../../Style/Display/SliderStyle';

const SliderItem = (props: Props) => {
  const { children } = props;

  return (
    <SliderItemStyle className="item">
      {children}
    </SliderItemStyle>
  );
};

type Props = {
  children: React$Node,
}

export default SliderItem;
