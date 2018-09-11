
import React from 'react';
import MediaQuery from 'react-responsive';

import {
  LayoutContainer,
  LayoutHeader,
  LayoutHeaderEmptySpace,
  SideBarContainer,
} from '../Style/SidebarStyle';

const SideBar = ({
  children,
  headerComponent,
  headerHeight,
  mobileMediaQuery,
  tempRows,
  tempCols,
  sideBarComponent,
  isOpen,
}: Props) => (
  <LayoutContainer
    tempRows={tempRows}
    tempCols={tempCols}
  >
    <LayoutHeader headerHeight={headerHeight}>
      {headerComponent}
    </LayoutHeader>
    <LayoutHeaderEmptySpace headerHeight={headerHeight} />
    <div>
      {children}
    </div>
    <If condition={sideBarComponent}>
      <MediaQuery maxWidth={mobileMediaQuery}>
        <SideBarContainer open={isOpen}>
          {sideBarComponent}
        </SideBarContainer>
      </MediaQuery>
    </If>
  </LayoutContainer>
);


type Props = {
    headerHeight: number,
    mobileMediaQuery: number,
    headerComponent: React$Node,
    children: React$Node,
    sideBarComponent: React$Node,
    tempRows: string,
    tempCols: string,
    isOpen: boolean,
    handleOnClick: Function
}

export default SideBar;
