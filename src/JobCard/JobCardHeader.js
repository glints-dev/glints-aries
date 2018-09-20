/* @flow */

import React from 'react';
import {
  HeaderContainer, HeaderImage, HeaderContent, Image, SubtitleTitle, LabelTag,
} from '../Style/JobCardStyle';

const JobCardHeader = (props: Props) => {
  const {
    title,
    tag,
    url,
    imgUrl,
    isExternal,
    paddingSize,
    subtitle,
    subtitleOnClick,
    className,
    jobTitleClass,
    companyNameClass,
    ...defaultProps
  } = props;

  return (
    <HeaderContainer className={className} paddingSize={paddingSize} {...defaultProps}>
      <HeaderImage>
        <Choose>
          <When condition={typeof imgUrl === 'string'}>
            <Image src={imgUrl} alt="" />
          </When>
          <Otherwise>
            {imgUrl}
          </Otherwise>
        </Choose>
      </HeaderImage>
      <HeaderContent>
        <If condition={tag}>
          <LabelTag>
            {tag}
          </LabelTag>
        </If>
        <h3 className={jobTitleClass}>
          {`${title.slice(0, 50)}`}
        </h3>
        <SubtitleTitle
          onClick={subtitleOnClick}
          className={companyNameClass}
        >
          {subtitle}
        </SubtitleTitle>
      </HeaderContent>
    </HeaderContainer>
  );
};

type Props = {
  className: string,
  companyNameClass: string,
  title: string,
  tag: string,
  subtitle: string,
  imgUrl: string,
  isExternal: boolean,
  jobTitleClass: string,
  paddingSize: string,
  url: string,
};

JobCardHeader.defaultProps = {
  jobTitleClass: '',
  companyNameClass: '',
  subtitleOnClick: () => {},
};

export default JobCardHeader;
