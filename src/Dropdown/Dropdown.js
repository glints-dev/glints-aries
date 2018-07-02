/* @flow */

import React, { Component } from 'react';
import { DropdownContainer, DropdownLabelWrapper, DropdownLabel, DropdownItemWrapper } from './../Style/DropdownStyle';
import { Icons } from './../Icon';

class Dropdown extends Component {
  state = {
    isOpen: false
  };

  handleOpen = () => {
      this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { children, title, size, isOpen, ...dropdownProps } = this.props;

    return (
      <DropdownContainer size={size} 
        open={this.state.isOpen} 
        onClick={this.handleOpen} 
        onBlur={this.handleOpen} 
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

export default Dropdown;
