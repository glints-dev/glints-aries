import * as React from 'react';
import { SwipeableItemWrapper } from '../../Style/Display/SwipeableStyle';

const SwipeableItem: React.FunctionComponent<Props> = (props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <SwipeableItemWrapper className="swipeable-itemwrapper" {...defaultProps}>
      { children }
    </SwipeableItemWrapper>
  );
};

interface Props extends React.ComponentPropsWithoutRef<typeof SwipeableItemWrapper> {
  children: React.ReactNode;
}

export default SwipeableItem;
