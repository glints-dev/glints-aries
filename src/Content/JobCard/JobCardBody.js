import React from 'react';

import { JobcardBodyWrapper } from '../../Style/JobCardStyle';

const JobCardBody = ({ children, ...defaultProps }:Props) => (
  <JobcardBodyWrapper {...defaultProps}>
    {children}
  </JobcardBodyWrapper>
);

type Props = {
  children: React$Node,
}

export default JobCardBody;
