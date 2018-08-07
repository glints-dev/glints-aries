import React from 'react';
import Icon from '../Icon';

import { JobDetail } from '../Style/JobCardStyle';

const JobCardDetail = ({ details }: Props) => (
  <JobDetail>
    <ul>
      <li>
        <Icon name="dot" color="#c6c6c6" size="6" />
        { details[0] }
      </li>
      <li>
        <Icon name="dot" color="#c6c6c6" size="6" />
        { details[1] }
      </li>
      <li>
        <Icon name="dot" color="#c6c6c6" size="6" />
        { details[2] }
      </li>
      <li>
        <Icon name="dot" color="#c6c6c6" size="6" />
        { details[3] }
      </li>
    </ul>
  </JobDetail>
);

type Props = {
  details: Array,
}

export default JobCardDetail;
