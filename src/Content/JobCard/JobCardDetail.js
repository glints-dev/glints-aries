import React from 'react';
import Icon from '../../General/Icon';

import { JobcardDetailWrapper } from '../../Style/JobCardStyle';

const JobCardDetail = ({ details, ...defaultProps }: Props) => (
  <JobcardDetailWrapper {...defaultProps}>
    <ul>
      <For each="data" of={details} index="index">
        <If condition={data !== ''}>
          <li key={data + index}>
            <Icon name="dot" color="#c6c6c6" />
            { data }
          </li>
        </If>
      </For>
    </ul>
  </JobcardDetailWrapper>
);

type Props = {
  details: Array,
}

export default JobCardDetail;
