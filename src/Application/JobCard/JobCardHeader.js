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
    onClickSubtitle,
    className,
    jobTitleClass,
    companyNameClass,
    ...defaultProps
  } = props;

  return (
    <JobcardHeaderWrapper
      className={className}
      role="presentation"
      aria-label="Job Card Header"
      tabIndex={0}
      {...defaultProps}
    >
      <JobcardHeaderImage aria-hidden="true">
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
          onClick={onClickSubtitle}
          className={companyNameClass}
          role="link"
          tabIndex={0}
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
  onClickSubtitle: Function,
};

JobCardHeader.defaultProps = {
  jobTitleClass: '',
  companyNameClass: '',
  onClickSubtitle: () => {},
};

export default JobCardHeader;
