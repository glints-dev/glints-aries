/* @flow */

import React, { Component } from 'react';

import Icon from '../../General/Icon';

import {
  DropdownContainer,
  DropdownWrapper,
  DropdownHeader,
  DropdownBody,
  DropdownItemWrapper,
} from '../../Style/Navigation/NewDropdownStyle';

class NewDropdown extends Component <Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      dropdownLabel: props.label,
      isOpen: false,
    };
  }

  handleOpen = () => {
    const { disabled } = this.props;
    const { isOpen } = this.state;

    if (!disabled) {
      this.setState({
        isOpen: !isOpen,
      });
      document.getElementsByClassName('aries-dropdown-content')[0].focus();
    }
  }

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  handleClickItem = (e) => {
    const { onChange } = this.props;

    this.setState({
      dropdownLabel: e.target.innerHTML,
      isOpen: false,
    });
    document.getElementsByClassName('aries-dropdown')[0].blur();

    if (onChange !== undefined) {
      onChange(e.target.innerHTML);
    }
  }

  render() {
    const {
      children,
      className,
      label,
      disabled,
      ...defaultProps
    } = this.props;

    const { isOpen, dropdownLabel } = this.state;

    return (
      <DropdownContainer
        className="aries-dropdown"
        tabIndex="0"
        onClick={this.handleOpen}
        onBlur={this.handleClose}
        role="menuitem"
        aria-label={dropdownLabel}
        aria-haspopup="true"
        {...defaultProps}
      >
        <DropdownWrapper tabIndex="-1">
          <DropdownHeader
            isOpen={isOpen}
            disabled={disabled}
          >
            {dropdownLabel}
            <Icon name="arrow-down" color={!disabled ? 'black' : '#777777'} />
          </DropdownHeader>
          {isOpen && (
            <DropdownBody
              className="aries-dropdown-content"
              role="listbox"
              onClick={e => e.stopPropagation()}
            >
              {children.map(data => (
                <DropdownItemWrapper
                  key={data.props.value}
                  onClick={this.handleClickItem}
                  role="option"
                >
                  {data.props.value}
                </DropdownItemWrapper>
              ))}
            </DropdownBody>
          )}
        </DropdownWrapper>
      </DropdownContainer>
    );
  }
}

type Props = {
  children: React$Node,
  className: string,
  label: string,
  onChange: Function,
  disabled: boolean,
}

type State = {
  isOpen: boolean,
  dropdownLabel: string,
}

export default NewDropdown;
