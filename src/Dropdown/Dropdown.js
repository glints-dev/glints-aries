/* @flow */

import React, { Component } from 'react';
import { DropdownContainer, DropdownLabelWrapper, DropdownLabel, DropdownItemWrapper } from './../Style/DropdownStyle';
import { Icons } from './../Icon';

class Dropdown extends Component <Props, State> {
  state = {
    isOpen: false
  };

  handleOpen = e => {
      this.setState({ isOpen: !this.state.isOpen });
  };

  handleClickOutside = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { children, title, size } = this.props;

    return (
      <DropdownContainer size={size} 
        open={this.state.isOpen} 
        onClick={this.handleOpen} 
        onBlur={this.handleClickOutside} 
        tabIndex="0">
          <DropdownLabelWrapper>
              <DropdownLabel>{title}</DropdownLabel>
              <Icons name={"drop-down"} />
          </DropdownLabelWrapper>
          {this.state.isOpen &&
            (<DropdownItemWrapper>
                {children}
            </DropdownItemWrapper>
          )}
      </DropdownContainer>
    );
  }
}

type Props = {
  children: React$Node,
  title: string,
  size: string,
};

type State = {
  isOpen: boolean,
};

export default Dropdown;
