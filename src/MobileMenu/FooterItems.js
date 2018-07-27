/* @flow */

import React from 'react';
import { MenuFooter } from '../Style/MobileMenuStyle';

const FooterItems = (props: Props) => {
  const {
    children,
    className,
  } = props;

  return (
    <MenuFooter className={className}>
      {children}
    </MenuFooter>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default FooterItems;
