/* @flow */

import React from 'react';
import { SwipeableItemWrapper } from '../../Style/Display/SwipeableStyle';

const SwipeableItem = (props: Props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <SwipeableItemWrapper className={className} {...defaultProps}>
      { children }
    </SwipeableItemWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default SwipeableItem;
