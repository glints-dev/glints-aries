import React from 'react';

import { Icon } from '../../General/Icon';

import { JobcardDescriptionWrapper } from '../../Style/JobCardStyle';

const JobCardDescription = ({ description, time, ...defaultProps }:Props) => (
  <JobcardDescriptionWrapper {...defaultProps}>
    <p>
      {`${description}`}
    </p>
    <span>
      <Icon name="clock" color="#646464" />
      { time }
    </span>
  </JobcardDescriptionWrapper>
);

type Props = {
  description: string,
}

export default JobCardDescription;
