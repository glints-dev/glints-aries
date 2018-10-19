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
    };
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
    } = this.state;

    return (
      <DrawerContainer
        aria-modal="true"
        aria-hidden={isDisplay ? 'false' : 'true'}
        isDisplay={isDisplay}
        open={isOpen}
        onAnimationStart={this.handleAnimationStart}
        onAnimationEnd={this.handleAnimationEnd}
        onClick={() => onClose()}
      >
        <DrawerWrapper
          role="dialog"
          open={isOpen}
          tabIndex="0"
          onClick={e => e.stopPropagation()}
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
