import * as React from 'react';
import classNames from 'classnames';
import {
  JobcardHeaderWrapper,
  JobcardHeaderImage,
  JobcardHeaderContent,
  Image,
  SubtitleTitle,
  Title,
  LabelTag,
} from '../../Style/Application/JobCardStyle';

const JobCardHeader: React.FunctionComponent<Props> = (props) => {
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
      className={classNames('jobcard-header', className)}
      role="presentation"
      aria-label="Job Card Header"
      tabIndex={0}
      {...defaultProps}
    >
      <JobcardHeaderImage aria-hidden="true">
        {typeof imgUrl === 'string'
          ? <Image src={imgUrl} alt="" />
          : imgUrl}
      </JobcardHeaderImage>
      <JobcardHeaderContent>
        {tag && <LabelTag>{tag}</LabelTag>}
        <Title className={jobTitleClass}>
          {`${title.slice(0, 50)}`}
        </Title>
        <SubtitleTitle
          onClick={onClickSubtitle}
          className={companyNameClass}
          role="link"
          tabIndex={0}>
          {subtitle}
        </SubtitleTitle>
      </JobcardHeaderContent>
    </JobcardHeaderWrapper>
  );
};

export interface Props extends React.ComponentPropsWithoutRef<typeof JobcardHeaderWrapper> {
  companyNameClass?: string;
  title: string;
  tag: string;
  subtitle: string;
  imgUrl: string;
  jobTitleClass?: string;
  url?: string;
  onClickSubtitle?: React.MouseEventHandler<HTMLParagraphElement>;
  isLinkAble?: boolean;
};

JobCardHeader.defaultProps = {
  jobTitleClass: '',
  companyNameClass: '',
  onClickSubtitle: () => {},
};

export default JobCardHeader;
