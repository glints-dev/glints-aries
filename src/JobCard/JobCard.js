/* @flow */

import React from 'react';
import { JobCardContainer } from '../Style/JobCardStyle';

const JobCard = ({ children, ...defaultProps }: Props) => (
  <JobCardContainer {...defaultProps}>
    {children}
  </JobCardContainer>
);

type Props = {
  children: React$Node,
}

export default JobCard;
