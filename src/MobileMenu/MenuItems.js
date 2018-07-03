/* @flow */
import React from 'react';
import { MenuItemWraper } from './../Style/MobileMenuStyle';

const MenuItems = (props: Props) => {
  const { children } = props;

  return (
    <MenuItemWraper>{children}</MenuItemWraper>
  );
}

type Props = {
  children: React$Node,
}

export default MenuItems;
