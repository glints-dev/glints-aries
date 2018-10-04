/* @flow */

import React from 'react';
import {
  JobcardHeaderWrapper,
  JobcardHeaderImage,
  JobcardHeaderContent,
  Image,
  SubtitleTitle,
  Title,
  LabelTag,
} from '../../Style/Application/JobCardStyle';

const JobCardHeader = (props: Props) => {
  const {
    title,
    tag,
    url,
    imgUrl,
    subtitle,
    subtitleOnClick,
    className,
    jobTitleClass,
    companyNameClass,
    ...defaultProps
  } = props;

  return (
    <JobcardHeaderWrapper className={className} {...defaultProps}>
      <JobcardHeaderImage>
        <Choose>
          <When condition={typeof imgUrl === 'string'}>
            <Image src={imgUrl} alt="" />
          </When>
          <Otherwise>
            {imgUrl}
          </Otherwise>
        </Choose>
      </JobcardHeaderImage>
      <JobcardHeaderContent>
        <If condition={tag}>
          <LabelTag>
            {tag}
          </LabelTag>
        </If>
        <Title className={jobTitleClass}>
          {`${title.slice(0, 50)}`}
        </Title>
        <SubtitleTitle
          onClick={subtitleOnClick}
          className={companyNameClass}
        >
          {subtitle}
        </SubtitleTitle>
      </JobcardHeaderContent>
    </JobcardHeaderWrapper>
  );
};

type Props = {
  className: string,
  companyNameClass: string,
  title: string,
  tag: string,
  subtitle: string,
  imgUrl: string,
  jobTitleClass: string,
  url: string,
};

JobCardHeader.defaultProps = {
  jobTitleClass: '',
  companyNameClass: '',
  subtitleOnClick: () => {},
};

export default JobCardHeader;
