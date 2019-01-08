/* @flow */

import React, { Component, Fragment } from 'react';

import { SearchFilterContainer, SearchFilterBar, SearchFilterBody } from '../../Style/Input/SearchFilterStyle';

class SearchFilter extends Component <Props, State> {
  state = {
    isOpen: false,
  };

  handleOpen = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const {
      children,
      className,
      label,
      content,
      value,
      ...defaultProps
    } = this.props;

    const { isOpen } = this.state;

    return (
      <SearchFilterContainer
        id="aries-searchfilter"
        className={className}
        role="search"
        aria-expanded={isOpen}
        aria-label={label}
      >
        <SearchFilterBar id="searchfilter-inputwrapper">
          <input
            type="text"
            placeholder={label}
            onFocus={this.handleOpen}
            onBlur={this.handleOpen}
            value={value}
            {...defaultProps}
          />
          {content}
        </SearchFilterBar>
        <SearchFilterBody
          id="searchfilter-content"
          role="menuitem"
          aria-hidden={!isOpen && true}
          open={isOpen}
        >
          { children }
        </SearchFilterBody>
      </SearchFilterContainer>
    );
  }
}

type Props = {
  children: React$Node,
  content: React$Node,
  className: string,
  label: string,
  value: string,
};

type State = {
  isOpen: boolean,
};

export default SearchFilter;
