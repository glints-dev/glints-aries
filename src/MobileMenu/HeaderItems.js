/* @flow */
import React from 'react';
import { HeaderWrapper } from './../Style/MobileMenuStyle';

const HeaderItems = (props: Props) => {
  const { children } = props;

  return (
    <HeaderWrapper>{children}</HeaderWrapper>
  );
}

type Props = {
  children: React$Node,
}

export default HeaderItems;
