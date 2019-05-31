import * as React from 'react';

import { JobOverviewBodystyle } from '../../Style/Application/JobOverviewStyle';

const JobOverViewBody: React.FunctionComponent<Props> = ({ children, ...defaultProps }) => (
  <JobOverviewBodystyle {...defaultProps}>
    {children}
  </JobOverviewBodystyle>
);

interface Props {
  children: React.ReactNode;
}

export default JobOverViewBody;
