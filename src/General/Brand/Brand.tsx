import * as React from 'react';

import classNames from 'classnames';

import { BrandContainer, BrandImage } from '../../Style/General/BrandStyle';

const GlintsBlack = require('../../../assets/image/glints-logo-black.svg');
const GlintsWhite = require('../../../assets/image/glints-logo-white.svg');

class Brand extends React.Component<Props> {
  handleRightClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { rightClickURL, onContextMenu } = this.props;

    if (rightClickURL) {
      e.preventDefault();
  
      if (onContextMenu !== undefined) {
        onContextMenu();
      }
  
      window.location.href = rightClickURL;
    }
  }

  render() {
    const {
      alt,
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
        className={classNames('aries-brand', className)}
        role="presentation"
        tabIndex={0}
        onContextMenu={this.handleRightClick}
        {...defaultProps}
      >
        <BrandImage
          className="brand-image"
          src={srcAsset}
          alt={alt}
          tabIndex={-1}
        />
      </BrandContainer>
    );
  }
}

interface Props extends React.ComponentPropsWithoutRef<typeof BrandContainer> {
  asset: string;
  alt: HTMLImageElement['alt'];
  className?: string;
  rightClickURL?: string;
  onContextMenu?(): void;
}

export default Brand;
