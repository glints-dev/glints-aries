/* @flow */
import React from 'react';
import { BannerWrapper, BannerLabel } from '../Style/BannerStyle';

const Banner = (props: Props) => {
  const { label, imgUrl, theme } = props;
  return (
    <BannerWrapper imgUrl={imgUrl}>
      {label && 
        <BannerLabel theme={theme}>{label}</BannerLabel>
      }
    </BannerWrapper>
  )
}

// typecheck goes here
type Props = {
  imgUrl?: string,
  theme?: string,
  label?: string,
}

export default Banner;