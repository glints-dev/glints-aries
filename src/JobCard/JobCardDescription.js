import React from 'react';

import { JobDescription } from '../Style/JobCardStyle';

const JobCardDescription = ({ description }:Props) => (
  <JobDescription>
    <p>
      { description }
    </p>
  </JobDescription>
);

type Props = {
  description: string,
}

export default JobCardDescription;
