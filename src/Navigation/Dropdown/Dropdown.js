/* @flow */

import React, { Component } from 'react';

import Icon from '../../General/Icon';

import { escEvent } from '../../Utils/DomUtils';

import {
  DropdownContainer,
  DropdownWrapper,
  DropdownHeader,
  DropdownBody,
  DropdownItemWrapper,
  IconWrapper,
} from '../../Style/Navigation/DropdownStyle';

class Dropdown extends Component <Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      dropdownLabel: props.label,
      isOpen: false,
      cursor: 0,
    };
  }

  handleOpen = () => {
    const { disabled } = this.props;
    const { isOpen } = this.state;

    if (!disabled) {
      this.setState({
        isOpen: !isOpen,
      });
    }
  }

  hoverOpen = () => {
    const { hoverToOpen } = this.props;

    if (hoverToOpen) {
      this.setState({
        isOpen: true,
      });
    }
  }

  hoverClose = () => {
    const { hoverToOpen } = this.props;

    if (hoverToOpen) {
      this.setState({
        isOpen: false,
        cursor: 0,
      });
    }
  }

  handleClose = () => {
    this.setState({
      isOpen: false,
      cursor: 0,
    });
  };

  handleClickItem = (onClick) => {
    const listener = (e) => {
      const { onChange } = this.props;

      if (e.target.dataset.value) {
        this.setState({
          dropdownLabel: e.target.dataset.value,
          isOpen: false,
        });

        if (onChange !== undefined) {
          onChange(e.target.dataset.value);
        }
      } else {
        this.setState({
          isOpen: false,
        });
      }

      if (onClick !== undefined) {
        onClick();
      }
    };
    return listener;
  }

  handleMouseEnter = (index) => {
    this.setState({
      cursor: Number(index),
    });
  }

  handleKeyDown = (e) => {
    e.preventDefault();

    const { children } = this.props;
    const { cursor } = this.state;

    if (e.keyCode === 38 && cursor > 0) {
      this.setState({
        cursor: cursor - 1,
      });
    } else if (e.keyCode === 40 && cursor < children.length - 1) {
      this.setState({
        cursor: cursor + 1,
      });
    } else if (e.keyCode === 13) {
      this.setState({
        dropdownLabel: document.querySelector('.active').innerHTML,
        isOpen: false,
      });
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', escEvent(this.handleClose), false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', escEvent(this.handleClose), false);
  }

  render() {
    const {
      children,
      className,
      label,
      disabled,
      showHoverLine,
      leftIconName,
      dropDownPlacement,
      noLineBreak,
      itemElement,
      iconDefaultColor,
      showFullWidth,
      hoverToOpen,
      ...defaultProps
    } = this.props;

    const { isOpen, dropdownLabel, cursor } = this.state;

    return (
      <DropdownContainer
        id="aries-dropdown"
        className={className}
        tabIndex="0"
        onClick={this.handleOpen}
        onMouseEnter={this.hoverOpen}
        onMouseLeave={this.hoverClose}
        onBlur={this.handleClose}
        onKeyDown={this.handleKeyDown}
        role="menuitem"
        aria-label={dropdownLabel}
        aria-haspopup="true"
        {...defaultProps}
      >
        <DropdownWrapper id="dropdown-contentwrapper" tabIndex="-1">
          <DropdownHeader
            id="dropdown-content"
            isOpen={isOpen}
            disabled={disabled}
            showHoverLine={showHoverLine}
            showFullWidth={showFullWidth}
          >
            <If condition={leftIconName}>
              <Icon name={leftIconName} color={!disabled ? iconDefaultColor : '#777777'} />
            </If>
            <span>
              <Choose>
                <When condition={itemElement}>
                  {itemElement}
                </When>
                <Otherwise>
                  {dropdownLabel}
                </Otherwise>
              </Choose>
            </span>
            <IconWrapper isOpen={isOpen}>
              <Icon name="arrow-down" color={!disabled ? iconDefaultColor : '#777777'} />
            </IconWrapper>
          </DropdownHeader>
          <DropdownBody
            id="dropdown-listbox"
            role="listbox"
            aria-hidden={!isOpen && true}
            onClick={e => e.stopPropagation()}
            open={isOpen}
            dropDownPlacement={dropDownPlacement}
            noLineBreak={noLineBreak}
            showFullWidth={showFullWidth}
            showHoverLine={showHoverLine}
          >
            {children.map((data, index) => (
              <DropdownItemWrapper
                className={cursor === index ? 'active' : undefined}
                role="option"
                data-value={data.props.value}
                key={data.props.value}
                onMouseDown={this.handleClickItem(data.props.onClick)}
                onMouseEnter={() => this.handleMouseEnter(index)}
                tabIndex="0"
                showFullWidth={showFullWidth}
              >
                {data.props.children}
              </DropdownItemWrapper>
            ))}
          </DropdownBody>
        </DropdownWrapper>
      </DropdownContainer>
    );
  }
}

Dropdown.defaultProps = {
  showHoverLine: false,
  dropDownPlacement: 'left',
  noLineBreak: false,
  iconDefaultColor: 'black',
  showFullWidth: false,
};

type Props = {
  children: React$Node,
  dropDownComponentLabel: React$Node,
  className: string,
  label: string,
  onChange: Function,
  disabled: boolean,
  hoverToOpen: boolean,
}

type State = {
  isOpen: boolean,
  dropdownLabel: string,
  cursor: number,
}

export default Dropdown;
