// @flow

import MobileMenu from './MobileMenu';
import TopItems from './TopItems';
import HeaderItems from './HeaderItems';
import MenuItemsWrapper from './MenuItemsWrapper';
import MenuItems from './MenuItems';
import FooterItems from './FooterItems';

MobileMenu.Top = TopItems;
MobileMenu.Header = HeaderItems;
MobileMenu.Body = MenuItemsWrapper;
MobileMenu.Item = MenuItems;
MobileMenu.Footer = FooterItems;

export default MobileMenu;
