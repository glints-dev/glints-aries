import React from 'react';

import { JobcardFooterWrapper } from '../../Style/Application/JobCardStyle';

const JobCardFooter = ({ children, ...defaultProps }:Props) => (
  <JobcardFooterWrapper totalItems={children.length} {...defaultProps}>
    { children }
  </JobcardFooterWrapper>
);

type Props = {
  children: React$Node,
}

export default JobCardFooter;
