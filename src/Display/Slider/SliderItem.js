/* @flow */

import React from 'react';
import { SliderItemWrapper } from '../../Style/Display/SliderStyle';

const SliderItem = (props: Props) => {
  const { children } = props;

  return (
    <SliderItemWrapper className="item">
      {children}
    </SliderItemWrapper>
  );
};

type Props = {
  children: React$Node,
}

export default SliderItem;
