import React from 'react';
import Icon from '../../General/Icon';

import { JobcardDetailWrapper, IconHolder } from '../../Style/Application/JobCardStyle';

const JobCardDetail = ({ details, id, ...defaultProps }: Props) => (
  <JobcardDetailWrapper {...defaultProps}>
    <ul>
      {details.filter(detail => detail !== '').map((detail, index) => (
          <div key={`${detail.key}-${id}-${index}`}>
            <IconHolder>
              <Icon name="dot" color="#c6c6c6" />
            </IconHolder>
            <li>
              { detail }
            </li>
          </div>
        ))}
    </ul>
  </JobcardDetailWrapper>
);

type Props = {
  details: Array,
  id: String,
}

export default JobCardDetail;
