/* @flow */
import React from 'react';
import { MenuFooter } from './../Style/MobileMenuStyle';

const FooterItems = (props: Props) => {
  const { children } = props;

  return (
    <MenuFooter>{children}</MenuFooter>
  );
}

type Props = {
  children: React$Node,
}

export default FooterItems;
