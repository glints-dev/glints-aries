/* @flow */

import React, { Component, Fragment } from 'react';

import { Container, SearchBarWrapper } from '../../Style/SearchFilterStyle';

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
      <Container className={className}>
        <SearchBarWrapper>
          <input
            type="text"
            placeholder={label}
            onFocus={this.handleOpen}
            onBlur={this.handleOpen}
            value={value}
            {...defaultProps}
          />
          {content}
        </SearchBarWrapper>
        {isOpen
          && (
            <Fragment>
              { children }
            </Fragment>
          )
        }
      </Container>
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
