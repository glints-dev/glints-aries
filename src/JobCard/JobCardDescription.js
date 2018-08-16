import React from 'react';

import { Icon } from '../Icon';

import { JobDescription } from '../Style/JobCardStyle';

const JobCardDescription = ({ description, time, ...defaultProps }:Props) => (
  <JobDescription {...defaultProps}>
    <p>
      {`${description}`}
    </p>
    <label>
      <Icon name="clock" color="#646464" size="12" />
      { time }
    </label>

  </JobDescription>
);

type Props = {
  description: string,
}

export default JobCardDescription;
