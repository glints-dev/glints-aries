/* @flow */

import React from 'react';
import { HeaderWrapper } from './../Style/MobileMenuStyle';

const HeaderItems = (props: Props) => {
  const { 
    children, 
    className 
  } = props;

  return (
    <HeaderWrapper className={className}>
      {children}
    </HeaderWrapper>
  );
}

type Props = {
  children: React$Node,
  className: string,
}

export default HeaderItems;
