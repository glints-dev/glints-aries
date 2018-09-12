/* @flow */

import React, { Component } from 'react';
import {
  DropdownContainer, DropdownLabelWrapper, DropdownLabel,
} from '../Style/DropdownStyle';
import { Icon } from '../Icon';

class Dropdown extends Component <Props, State> {
  state = {
    isOpen: false,
  };

  handleOpen = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  handleClickOutside = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const {
      children,
      title,
      size,
      className,
      spaceBetween,
    } = this.props;

    const { isOpen } = this.state;

    return (
      <DropdownContainer
        size={size}
        open={isOpen}
        onClick={this.handleOpen}
        onBlur={this.handleClickOutside}
        tabIndex="0"
      >
        <DropdownLabelWrapper className={className} spaceBetween={spaceBetween}>
          <DropdownLabel>
            <span>
              {title}
            </span>
          </DropdownLabel>
          <Icon name="arrow-down" size="15" color="black" />
        </DropdownLabelWrapper>
        <If condition={isOpen}>
          { children }
        </If>
      </DropdownContainer>
    );
  }
}

Dropdown.defaultProps = {
  spaceBetween: true,
};

type Props = {
  children: React$Node,
  title: string,
  size: string,
  className: string,
};

type State = {
  isOpen: boolean,
};

export default Dropdown;
