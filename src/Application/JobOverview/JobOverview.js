/* @flow */

import React from 'react';
import { JobOverviewContainer } from '../../Style/Application/JobOverviewStyle';

const JobOverview = ({ children }: Props) => (
  <JobOverviewContainer>
    {children}
  </JobOverviewContainer>
);

type Props = {
  children: React$Node,
}

export default JobOverview;
