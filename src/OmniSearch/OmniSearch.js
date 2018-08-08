/* @flow */

import React, { Component } from 'react';

import Button from '../Button';
import Icon from '../Icon';

import {
  OmniSearchContainer, OmniSearchBar, OmniSearchItemContainer, OmniSearchItemWrapper,
} from '../Style/OmniSearchStyle';

class OmniSearch extends Component <Props, State> {
  state = {
    isOpen: false,
  };

  handleOpen = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { children, className } = this.props;
    const { isOpen } = this.state;

    return (
      <OmniSearchContainer className={className}>
        <OmniSearchBar>
          <input
            type="text"
            placeholder="Cari judul magang, lokasi, atau perusahaan"
            onClick={this.handleOpen}
          />
          <Button theme="blue">
            Go
            {' '}
            <Icon name="arrow-round-forward" color="white" size="16" />
          </Button>
        </OmniSearchBar>
        {isOpen && (
          <OmniSearchItemContainer>
            <OmniSearchItemWrapper>
              <label>
                Karir Populer
              </label>
              <ul>
                <li>
                  Business Development/ Sales
                </li>
                <li>
                  Software Engineering
                </li>
                <li>
                  Design
                </li>
              </ul>
            </OmniSearchItemWrapper>
            <OmniSearchItemWrapper>
              <label>
                Lokasi Populer
              </label>
              <ul>
                <li>
                  <Icon name="location" color="#AAAAAA" size="14" />
                  {' '}
Lowongan Pekerjaan di Jakarta
                </li>
                <li>
                  <Icon name="location" color="#AAAAAA" size="14" />
                  {' '}
Lowongan Pekerjaan di Bogor
                </li>
                <li>
                  <Icon name="location" color="#AAAAAA" size="14" />
                  {' '}
Lowongan Pekerjaan di Bandung
                </li>
              </ul>
            </OmniSearchItemWrapper>
            <OmniSearchItemWrapper>
              <label>
                Perusahaan Populer
              </label>
            </OmniSearchItemWrapper>
          </OmniSearchItemContainer>
        )}
      </OmniSearchContainer>
    );
  }
}

type Props = {
  children: React$Node,
  className: string,
};

type State = {
  isOpen: boolean,
};

export default OmniSearch;
