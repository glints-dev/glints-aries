import React, { Component } from 'react';

import Icon from '../../General/Icon';

import {
  PopoverContainer,
  PopoverContentWrapper,
  PopoverChildren,
  PopoverIcon,
  PopOverContent,
  PopoverItemWrapper,
} from '../../Style/Display/PopoverStyle';

class Popover extends Component <Props, State> {
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

  renderChildren = () => {
    const { content } = this.props;
    const { isOpen } = this.state;

    return (
      <PopoverItemWrapper>
        <PopoverIcon>
          <Icon name="arrow-down" color="black" />
        </PopoverIcon>
        <If condition={isOpen}>
          <PopOverContent>
            {content}
          </PopOverContent>
        </If>
      </PopoverItemWrapper>
    );
  }

  render() {
    const { children } = this.props;

    return (
      <PopoverContainer
        onBlur={this.handleClickOutside}
        aria-haspopup="true"
        aria-busy="false"
        tabIndex="0"
      >
        <PopoverChildren onClick={this.handleOnClick}>
          {children}
        </PopoverChildren>
        <PopoverContentWrapper onClick={this.handleOnClick}>
          {this.renderChildren()}
        </PopoverContentWrapper>
      </PopoverContainer>
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
