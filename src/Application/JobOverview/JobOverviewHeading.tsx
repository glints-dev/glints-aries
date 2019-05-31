import * as React from 'react';
import { JobOverviewHeadingStyle } from '../../Style/Application/JobOverviewStyle';

const JobOverviewHeading: React.FunctionComponent<Props> = (props) => {
  const { children, style } = props;
  return (
    <JobOverviewHeadingStyle style={style}>
      {children}
    </JobOverviewHeadingStyle>
  );
};

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default JobOverviewHeading;
