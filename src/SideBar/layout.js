import React from 'react';
import MediaQuery from 'react-responsive';

import SideBar from './SideBar';

import { LayoutContainer, LayoutHeader, LayoutHeaderEmptySpace } from '../Style/SidebarStyle';

const Layout = ({
  children,
  header,
  headerHeight,
  mobileMediaQuery,
}: Props) => (
  <LayoutContainer tempRows="60px 1fr">
    <LayoutHeader headerHeight={headerHeight}>
      {header}
    </LayoutHeader>
    <LayoutHeaderEmptySpace headerHeight={headerHeight} />
    {children}
    <MediaQuery maxWidth={mobileMediaQuery}>
      <SideBar />
    </MediaQuery>
  </LayoutContainer>
);

type Props = {
    headerHeight: number,
    header: number,
    mobileMediaQuery: number,
    children: React$Node,
}

Layout.defaultProps = {
  mobileMediaQuery: 300,
};

export default Layout;
