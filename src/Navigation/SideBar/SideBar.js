
import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

import {
  LayoutContainer,
  LayoutHeader,
  LayoutHeaderEmptySpace,
  LayoutBody,
  SideBarContainer,
  SideBarWrapper,
} from '../../Style/SidebarStyle';

class SideBar extends Component<State, Props> {
  constructor() {
    super();
    this.state = {
      noDisplay: true,
      disableClick: false,
    };
  }

  componentDidUpdate() {
    const { noDisplay } = this.state;
    const { isOpen } = this.props;
    if (isOpen && noDisplay) {
      this.handleStart();
    }
  }

  handleDisableClick = (eventName) => {
    switch (eventName) {
      case 'focus':
        this.setState({ disableClick: true });
        break;
      case 'blur':
        this.setState({ disableClick: false });
        break;
      default:
        this.setState({ disableClick: false });
        break;
    }
  }

  handleStart = () => {
    this.setState({ noDisplay: false });
  }

  handleAnimationEnd = () => {
    this.setState({ noDisplay: true });
  }

  render() {
    const {
      noDisplay,
      disableClick,
    } = this.state;

    const {
      children,
      headerComponent,
      headerHeight,
      mobileMediaQuery,
      tempRows,
      tempCols,
      sideBarComponent,
      sidebarWidth,
      isOpen,
      handleClose,
      backgroundColour,
      showDivider,
    } = this.props;

    return (
      <LayoutContainer
        tempRows={tempRows}
        tempCols={tempCols}
      >
        <LayoutHeader
          headerHeight={headerHeight}
          backgroundColour={backgroundColour}
          showDivider={showDivider}
        >
          {headerComponent}
        </LayoutHeader>
        <LayoutHeaderEmptySpace headerHeight={headerHeight} />
        <LayoutBody>
          {children}
        </LayoutBody>
        <If condition={sideBarComponent}>
          <MediaQuery maxWidth={mobileMediaQuery}>
            <SideBarContainer
              noDisplay={noDisplay}
              open={isOpen}
              onAnimationStart={this.handleAnimationStart}
              onAnimationEnd={this.handleAnimationEnd}
              onClick={() => {
                if (!disableClick) {
                  handleClose();
                }
              }}
            >
              <SideBarWrapper
                open={isOpen}
                onFocus={() => this.handleDisableClick('focus')}
                onBlur={() => this.handleDisableClick('blur')}
                sidebarWidth={sidebarWidth}
                tabIndex="0"
              >
                {sideBarComponent}
              </SideBarWrapper>
            </SideBarContainer>
          </MediaQuery>
        </If>
      </LayoutContainer>
    );
  }
}

type State = {
  noDisplay: boolean
}

type Props = {
    headerHeight: number,
    mobileMediaQuery: number,
    headerComponent: React$Node,
    children: React$Node,
    sideBarComponent: React$Node,
    tempRows: string,
    tempCols: string,
    isOpen: boolean,
    handleClose: Function,
}

export default SideBar;
