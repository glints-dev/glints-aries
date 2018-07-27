/* @flow */

import React from 'react';
import { MenuItemWraper } from '../Style/MobileMenuStyle';

const MenuItems = (props: Props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <MenuItemWraper className={className} {...defaultProps}>
      {children}
    </MenuItemWraper>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default MenuItems;
