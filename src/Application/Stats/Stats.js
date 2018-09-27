/* @flow */

import React from 'react';
import { StatsWrapper } from '../../Style/StatsStyle';

const Stats = (props: Props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <StatsWrapper className={className} {...defaultProps}>
      {children}
    </StatsWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default Stats;
