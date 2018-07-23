/* @flow */

import React, { Component, Fragment } from 'react';
import {
  DropdownContainer, DropdownLabelWrapper, DropdownLabel, DropdownItemWrapper,
} from '../Style/DropdownStyle';
import { Icons } from '../Icon';

class Dropdown extends Component <Props, State> {
  state = {
    isOpen: true,
  };

  handleOpen = (e) => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleClickOutside = () => {
    this.setState({ isOpen: false });
  };

  componentDidMount() {
    this.handleOpen();
  }

  render() {
    const {
      children,
      title,
      size,
      className,
    } = this.props;

    return (
      <DropdownContainer
        size={size}
        open={this.state.isOpen}
        onClick={this.handleOpen}
        onBlur={this.handleClickOutside}
        tabIndex="0"
      >
        <DropdownLabelWrapper className={className}>
          <DropdownLabel>
            {title}
          </DropdownLabel>
          <Icons name="drop-down" />
        </DropdownLabelWrapper>
        {this.state.isOpen
            && (
              <Fragment>
                {children}
              </Fragment>
            )
        }
      </DropdownContainer>
    );
  }
}

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
