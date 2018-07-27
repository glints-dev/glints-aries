/* @flow */

import React from 'react';
import { MenuItemContainer } from '../Style/MobileMenuStyle';

const MenuItemsWrapper = (props: Props) => {
  const { children } = props;

  return (
    <MenuItemContainer>
      {children}
    </MenuItemContainer>
  );
};

type Props = {
  children: React$Node,
}

export default MenuItemsWrapper;
