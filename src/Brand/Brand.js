/* @flow */

import React  from 'react';
import { BrandImageWrapper, BrandImage } from './../Style/BrandStyle';
import { Size } from '../Utils/StyleConfig';

import GlintsBlack from '../../assets/image/glints-logo-black.svg';
import GlintsWhite from '../../assets/image/glints-logo-white.svg';

const Brand = (props: Props) => {
  const { 
    asset, 
    size, 
    className,
    ...defaultProps 
  } = props;
  
  return (
    <BrandImageWrapper className={className} {...defaultProps}>
        <BrandImage 
          size={size}
          src={asset === 'glints-black' 
              ? `${GlintsBlack}` 
              : asset === 'glints-white'
              ? `${GlintsWhite}` 
              : asset } 
        />
    </BrandImageWrapper>
  );
}

type Props = {
  asset: string,
  size: string,
  className: string,
}

export default Brand;
