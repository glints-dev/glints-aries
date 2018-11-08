/* @flow */

import React, { Component, Fragment } from 'react';

import { OmniSearchContainer, OmniSearchBar, OmniSearchBody } from '../../Style/Input/OmniSearchStyle';

class OmniSearch extends Component <Props, State> {
  state = {
    isOpen: false,
  };

  handleOpen = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const {
      label,
      children,
      className,
      content,
      value,
      ...defaultProps
    } = this.props;
    const { isOpen } = this.state;

    return (
      <OmniSearchContainer
        className={className}
        role="search"
        aria-expanded={isOpen}
        aria-label={label}
      >
        <OmniSearchBar>
          <input
            type="text"
            placeholder={label}
            onFocus={this.handleOpen}
            onBlur={this.handleOpen}
            value={value}
            {...defaultProps}
          />
          { content }
        </OmniSearchBar>
        <OmniSearchBody
          role="menuitem"
          aria-hidden={!isOpen && true}
          open={isOpen}
        >
          { children }
        </OmniSearchBody>
      </OmniSearchContainer>
    );
  }
}

type Props = {
  label: string,
  children: React$Node,
  content: React$Node,
  className: string,
  value: string,
};

type State = {
  isOpen: boolean,
};

export default OmniSearch;
