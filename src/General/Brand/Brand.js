/* @flow */

import React from 'react';
import { BrandContainer, BrandImage } from '../../Style/General/BrandStyle';

import GlintsBlack from '../../../assets/image/glints-logo-black.svg';
import GlintsWhite from '../../../assets/image/glints-logo-white.svg';

const Brand = (props: Props) => {
  const {
    asset,
    className,
    ...defaultProps
  } = props;

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
      role="presentation"
      focusable="false"
      tabIndex="0"
    >
      <BrandImage
        className={className}
        src={srcAsset}
        tabIndex="-1"
        {...defaultProps}
      />
    </BrandContainer>
  );
};

type Props = {
  asset: string,
  className: string,
}

export default Brand;
