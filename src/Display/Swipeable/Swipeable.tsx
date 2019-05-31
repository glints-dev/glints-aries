import * as React from 'react';
import { SwipeableContainer } from '../../Style/Display/SwipeableStyle';

import SwipeableItem from './SwipeableItem';

const Swipeable: Swipeable = (props) => {
  const {
    children,
    className,
  } = props;

  return (
    <SwipeableContainer id="aries-swipeable" className={className}>
      { children }
    </SwipeableContainer>
  );
};

type Swipeable = React.FunctionComponent<Props> & {
  Item: typeof SwipeableItem;
}

Swipeable.Item = SwipeableItem;

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default Swipeable;
