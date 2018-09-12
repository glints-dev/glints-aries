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
      noPadding,
      hoverColor,
    } = this.props;

    const { isOpen } = this.state;

    return (
      <DropdownContainer
        size={size}
        open={isOpen}
        onClick={this.handleOpen}
        onBlur={this.handleClickOutside}
        tabIndex="0"
        hoverColor={hoverColor}
      >
        <DropdownLabelWrapper
          className={className}
          spaceBetween={spaceBetween}
          noPadding={noPadding}
        >
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

type Props = {
  children: React$Node,
  title: string,
  size: string,
  className: string,
  noPadding: boolean
};

type State = {
  isOpen: boolean,
};

export default Dropdown;
