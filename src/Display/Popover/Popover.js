import React, { Component } from 'react';
import {
  ChildHolder, ButtonContainer, PopOverContent, CursorPointer,
} from '../../Style/Display/PopoverStyle';

class Popover extends Component <Props, State> {
  static defaultProps = {
    margin: '',
  }

  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  handleOnClick = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  handleClickOutside = () => {
    this.setState({ isOpen: false });
  }

  renderChildren = (children) => {
    const { isOpen } = this.state;
    const { margin, content } = this.props;
    return (
      <ChildHolder onClick={this.handleOnClick} margin={margin}>
        <CursorPointer>{children}</CursorPointer>
        <If condition={isOpen}>
          <PopOverContent>
            {content}
          </PopOverContent>
        </If>
      </ChildHolder>
    );
  }

  render() {
    const { children } = this.props;
    return (
      <ButtonContainer
        tabIndex="0"
        onBlur={this.handleClickOutside}
      >
        {this.renderChildren(children)}
      </ButtonContainer>
    );
  }
}


type Props = {
  children: React$Node,
  content: React$Node,
};

type State = {
  isOpen: boolean,
};

export default Popover;
