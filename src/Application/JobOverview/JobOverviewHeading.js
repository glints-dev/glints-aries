import React from 'react';
import { JobOverviewHeadingStyle } from '../../Style/Application/JobOverviewStyle';

const JobOverviewHeading = (props: Props) => {
  const { children, style } = props;
  return (
    <JobOverviewHeadingStyle style={style}>
      {children}
    </JobOverviewHeadingStyle>
  );
};

type Props = {
  children: React$Node,
  style: object,
}

export default JobOverviewHeading;
