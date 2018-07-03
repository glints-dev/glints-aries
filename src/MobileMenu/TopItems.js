/* @flow */
import React from 'react';
import { TopIconWrapper } from './../Style/MobileMenuStyle';

const TopItems = (props: Props) => {
  const { children } = props;

  return (
    <TopIconWrapper>{children}</TopIconWrapper>
  );
}

type Props = {
  children: React$Node,
}

export default TopItems;
