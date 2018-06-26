/* @flow */
import React from 'react';
import { BannerWrapper, BannerLabel } from '../Style/JobBannerStyle';

const JobBanner = (props: Props) => {
  const { children, imgUrl, variant } = props;
  return (
    <BannerWrapper imgUrl={imgUrl}>
      <BannerLabel variant={variant}>{children}</BannerLabel>
    </BannerWrapper>
  )
}

// typecheck goes here
type Props = {
  imgUrl?: string,
  variant?: string,
}

export default JobBanner;