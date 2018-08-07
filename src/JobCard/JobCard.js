/* @flow */

import React from 'react';
import { JobCardContainer } from '../Style/JobCardStyle';

const JobCard = ({ children }: Props) => (
  <JobCardContainer>
    {children}
  </JobCardContainer>
);

type Props = {
  children: React$Node,
}

export default JobCard;
