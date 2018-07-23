import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const opacityAnimation = keyframes`
    0% {
        opacity: 0
    }
    80% {
        opacity: 1;
    }
`;

const ChildHolder = styled.div`
    transform: translateX(-50%);
    cursor: pointer;
`;

const ButtonContainer = styled.div`
    position: relative;
    outline: none;
`;

const PopOverContent = styled.div`
    position: absolute;
    right: 0px;
    top: 35px;
    min-width: 250px;
    animation: ${opacityAnimation} .2s linear;
    z-index: 10;
`;


class ModalPopOver extends Component <Props, State> {
  constructor() {
    super();
    this.state = {
      isOpen: true,
    };
  }

  componentDidMount() {
    this.handleOnClick();
  }

  handleOnClick = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  handleClickOutside = () => {
    this.setState({ isOpen: false });
  }

  renderChildren = children => (
    <ChildHolder onClick={this.handleOnClick}>
      {children}
    </ChildHolder>
  )

  render() {
    const { isOpen } = this.state;
    const { content, children } = this.props;
    return (
      <ButtonContainer
        tabIndex="0"
        onBlur={this.handleClickOutside}
      >
        {this.renderChildren(children)}
        <If condition={isOpen}>
          <PopOverContent>
            {content}
          </PopOverContent>
        </If>
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

export default ModalPopOver;
