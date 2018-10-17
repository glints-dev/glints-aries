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

  componentDidUpdate() {
    const { isDisplay } = this.state;
    const { isOpen } = this.props;

    if (isOpen && !isDisplay) {
      this.handleStart();
    }
  }

  render() {
    const {
      children,
      isOpen,
      onClose,
      ...defaultProps
    } = this.props;

    const {
      isDisplay,
      disableClick,
    } = this.state;

    return (
      <DrawerContainer
        aria-modal="true"
        aria-hidden={isDisplay ? 'false' : 'true'}
        isDisplay={isDisplay}
        open={isOpen}
        onAnimationStart={this.handleAnimationStart}
        onAnimationEnd={this.handleAnimationEnd}
        onClick={() => {
          if (!disableClick) {
            onClose();
          }
        }}
      >
        <DrawerWrapper
          role="dialog"
          open={isOpen}
          onFocus={() => this.handleDisableClick('focus')}
          onBlur={() => this.handleDisableClick('blur')}
          tabIndex="0"
          {...defaultProps}
        >
          {children}
        </DrawerWrapper>
      </DrawerContainer>
    );
  }
}
type Props = {
  children: React$Node,
  isOpen: boolean,
  onClose: Function,
}

type State = {
  isDisplay: boolean
}

export default Drawer;
