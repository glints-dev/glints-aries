import React from 'react';
import { JobOverviewHeadingStyle } from '../Style/JobOverviewStyle';

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
