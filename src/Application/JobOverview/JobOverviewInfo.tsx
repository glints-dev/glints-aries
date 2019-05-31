import * as React from 'react';

import { JobOverviewInfostyle } from '../../Style/Application/JobOverviewStyle';

const JobOverviewInfo: React.FunctionComponent<Props> = ({ children, style }) => (
  <JobOverviewInfostyle style={style}>
    {children}
  </JobOverviewInfostyle>
);

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default JobOverviewInfo;
