/* @flow */

import React from 'react';
import { TopIconWrapper } from '../Style/MobileMenuStyle';

const TopItems = (props: Props) => {
  const {
    children,
    className,
  } = props;

  return (
    <TopIconWrapper className={className}>
      {children}
    </TopIconWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default TopItems;
