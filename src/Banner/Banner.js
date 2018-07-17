/* @flow */

import React from 'react';
import { BannerWrapper, BannerLabel } from '../Style/BannerStyle';

const Banner = (props: Props) => {
  const { 
    label, 
    imgUrl, 
    theme,
    className
  } = props;

  return (
    <BannerWrapper className={className} imgUrl={imgUrl}>
      {label && 
        <BannerLabel theme={theme}>{label}</BannerLabel>
      }
    </BannerWrapper>
  )
}

type Props = {
  imgUrl: string,
  theme: string,
  label: string,
  className: string,
}

export default Banner;