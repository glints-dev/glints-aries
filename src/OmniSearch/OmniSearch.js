/* @flow */

import React, { Component, Fragment } from 'react';

import { OmniSearchContainer, OmniSearchBar } from '../Style/OmniSearchStyle';

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
      children,
      className,
      content,
      ...defaultProps
    } = this.props;
    const { isOpen } = this.state;

    return (
      <OmniSearchContainer className={className}>
        <OmniSearchBar>
          <input
            type="text"
            placeholder="Cari judul magang, lokasi, atau perusahaan"
            onFocus={this.handleOpen}
            onBlur={this.handleOpen}
            {...defaultProps}
          />
          { content }
        </OmniSearchBar>
        {isOpen && (
          <Fragment>
            { children }
          </Fragment>
        )}
      </OmniSearchContainer>
    );
  }
}

type Props = {
  children: React$Node,
  content: React$Node,
  className: string,
};

type State = {
  isOpen: boolean,
};

export default OmniSearch;
