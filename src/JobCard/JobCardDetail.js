import React from 'react';
import Icon from '../Icon';

import { JobDetail } from '../Style/JobCardStyle';

const JobCardDetail = ({ details, ...defaultProps }: Props) => (
  <JobDetail {...defaultProps}>
    <ul>
      {details.map((data, index) => (
        <li key={index}>
          <Icon name="dot" color="#c6c6c6" size="6" />
          { data }
        </li>
      ))}
    </ul>
  </JobDetail>
);

type Props = {
  details: Array,
}

export default JobCardDetail;
