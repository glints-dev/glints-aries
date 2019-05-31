import * as React from 'react';

import {
  DrawerContainer,
  DrawerWrapper,
} from '../../Style/Navigation/DrawerStyle';

class Drawer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isDisplay: false,
    };
  }

  handleAnimationStart = () => {
    this.setState({ isDisplay: true });
  }

  handleAnimationEnd = () => {
    this.setState({ isDisplay: false });
  }

  componentDidUpdate() {
    const { isDisplay } = this.state;
    const { isOpen } = this.props;

    if (isOpen && !isDisplay) {
      this.handleAnimationStart();
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
        className="aries-drawer"
        aria-modal="true"
        aria-hidden={isDisplay ? 'false' : 'true'}
        isDisplay={isDisplay}
        open={isOpen}
        onAnimationStart={this.handleAnimationStart}
        onAnimationEnd={this.handleAnimationEnd}
        onClick={() => onClose()}
      >
        <DrawerWrapper
          className="drawer-contentwrapper"
          role="dialog"
          open={isOpen}
          tabIndex={0}
          onClick={e => e.stopPropagation()}
          {...defaultProps}
        >
          {children}
        </DrawerWrapper>
      </DrawerContainer>
    );
  }
}

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: Function;
}

interface State {
  isDisplay: boolean;
}

export default Drawer;
