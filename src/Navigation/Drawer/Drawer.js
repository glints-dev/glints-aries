
import React, { Component } from 'react';

import {
  DrawerContainer,
  DrawerWrapper,
} from '../../Style/Navigation/DrawerStyle';

class Drawer extends Component<State, Props> {
  constructor() {
    super();
    this.state = {
      isDisplay: false,
      disableClick: false,
    };
  }

  componentDidUpdate() {
    const { isDisplay } = this.state;
    const { isOpen } = this.props;
    if (isOpen && !isDisplay) {
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
    this.setState({ isDisplay: true });
  }

  handleAnimationEnd = () => {
    this.setState({ isDisplay: false });
  }

  render() {
    const {
      isDisplay,
      disableClick,
    } = this.state;

    const {
      children,
      isOpen,
      handleClose,
    } = this.props;

    return (
      <DrawerContainer
        isDisplay={isDisplay}
        open={isOpen}
        onAnimationStart={this.handleAnimationStart}
        onAnimationEnd={this.handleAnimationEnd}
        onClick={() => {
          if (!disableClick) {
            handleClose();
          }
        }}
      >
        <DrawerWrapper
          open={isOpen}
          onFocus={() => this.handleDisableClick('focus')}
          onBlur={() => this.handleDisableClick('blur')}
          tabIndex="0"
        >
          {children}
        </DrawerWrapper>
      </DrawerContainer>
    );
  }
}

type State = {
  isDisplay: boolean
}

type Props = {
    children: React$Node,
    isOpen: boolean,
    handleClose: Function,
}

export default Drawer;
