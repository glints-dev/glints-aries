import React from 'react';

import { JobOverviewBodystyle } from '../Style/JobOverviewStyle';

const JobOverViewBody = ({ children, ...defaultProps }:Props) => (
  <JobOverviewBodystyle {...defaultProps}>
    {children}
  </JobOverviewBodystyle>
);

type Props = {
  children: React$Node,
}

export default JobOverViewBody;
