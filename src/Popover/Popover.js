import React, { Component } from 'react';
import { ChildHolder, ButtonContainer, PopOverContent } from '../Style/PopoverStyle';

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

  renderChildren = (children) => {
    const { isOpen } = this.state;
    const { margin, content } = this.props;
    return (
      <ChildHolder onClick={this.handleOnClick} margin={margin}>
        {children}
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
