import * as React from 'react';
import { JobOverviewLabelStyle } from '../../Style/Application/JobOverviewStyle';

const JobOverviewLabel: React.FunctionComponent<Props> = (props) => {
  const { children, style } = props;
  return (
    <JobOverviewLabelStyle style={style}>
      {children}
    </JobOverviewLabelStyle>
  );
};

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default JobOverviewLabel;
