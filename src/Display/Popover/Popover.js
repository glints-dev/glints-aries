import React, { Component } from 'react';
import {
  ButtonContainer,
  ChildHolder,
  CursorPointer,
  IconHolder,
  PopOverContent,
  FlexCenterBox,
} from '../../Style/Display/PopoverStyle';

import Icon from '../../General/Icon';
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

  renderChildren = () => {
    const { isOpen } = this.state;
    const { content } = this.props;
    return (
      <ChildHolder onClick={this.handleOnClick}>
        <IconHolder>
          <Icon name="arrow-down" color="black" />
        </IconHolder>
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
      <ButtonContainer>
        <ButtonContainer
          tabIndex="0"
          onBlur={this.handleClickOutside}
        >
          <CursorPointer onClick={this.handleOnClick}>
            {children}
          </CursorPointer>
          <FlexCenterBox>
            {this.renderChildren()}
          </FlexCenterBox>
        </ButtonContainer>
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
