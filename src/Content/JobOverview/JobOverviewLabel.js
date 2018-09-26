import React from 'react';
import { JobOverviewLabelStyle } from '../../Style/JobOverviewStyle';

const JobOverviewLabel = (props: Props) => {
  const { children, style } = props;
  return (
    <JobOverviewLabelStyle style={style}>
      {children}
    </JobOverviewLabelStyle>
  );
};

type Props = {
  children: React$Node
}

export default JobOverviewLabel;
