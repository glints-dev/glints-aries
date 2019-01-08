/* @flow */

import React, { Component } from 'react';

import { BrandContainer, BrandImage } from '../../Style/General/BrandStyle';

import GlintsBlack from '../../../assets/image/glints-logo-black.svg';
import GlintsWhite from '../../../assets/image/glints-logo-white.svg';


class Brand extends Component <Props> {
  handleRightClick = (e) => {
    const { rightClickURL, onContextMenu } = this.props;

    e.preventDefault();

    if (onContextMenu !== undefined) {
      onContextMenu();
    }

    window.location.href = rightClickURL;
  }

  render() {
    const {
      asset,
      className,
      ...defaultProps
    } = this.props;

    let srcAsset = '';

    if (asset === 'glints-black') {
      srcAsset = GlintsBlack;
    } else if (asset === 'glints-white') {
      srcAsset = GlintsWhite;
    } else {
      srcAsset = asset;
    }

    return (
      <BrandContainer
        id="aries-brand"
        className={className}
        role="presentation"
        focusable="false"
        tabIndex="0"
        onContextMenu={this.handleRightClick}
        {...defaultProps}
      >
        <BrandImage
          id="brand-image"
          src={srcAsset}
          tabIndex="-1"
        />
      </BrandContainer>
    );
  }
}

type Props = {
  asset: string,
  className: string,
  rightClickURL: string,
  onContextMenu: Function,
}

export default Brand;
