/* @flow */

import React, { Component, Fragment } from 'react';
import {
  DropdownContainer, DropdownLabelWrapper, DropdownLabel,
} from '../Style/DropdownStyle';
import { Icon } from '../Icon';

class Dropdown extends Component <Props, State> {
  state = {
    isOpen: true,
  };

  handleOpen = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
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

    const { isOpen } = this.state;

    return (
      <DropdownContainer
        size={size}
        open={isOpen}
        onClick={this.handleOpen}
        onBlur={this.handleClickOutside}
        tabIndex="0"
      >
        <DropdownLabelWrapper className={className}>
          <DropdownLabel>
            <span>
              {title}
            </span>
          </DropdownLabel>
          <Icon name="arrow-down" size="15" color="black" />
        </DropdownLabelWrapper>
        {isOpen
            && (
              <Fragment>
                { children }
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
