/* @flow */
import React from 'react';
import { BannerWrapper, BannerLabel } from '../Style/BannerStyle';

const Banner = (props: Props) => {
  const { children, imgUrl, theme } = props;
  return (
    <BannerWrapper imgUrl={imgUrl}>
      <BannerLabel theme={theme}>{children}</BannerLabel>
    </BannerWrapper>
  )
}

// typecheck goes here
type Props = {
  imgUrl?: string,
  theme?: string,
}

export default Banner;