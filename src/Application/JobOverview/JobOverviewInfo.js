import React from 'react';

import { JobOverviewInfostyle } from '../../Style/Application/JobOverviewStyle';

const JobOverviewInfo = ({ children, style }:Props) => (
  <JobOverviewInfostyle style={style}>
    {children}
  </JobOverviewInfostyle>
);

type Props = {
  children: React$Node,
}

export default JobOverviewInfo;
