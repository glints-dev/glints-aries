import React from 'react';
import Icon from '../../General/Icon';

import { JobcardDetailWrapper, IconHolder } from '../../Style/Application/JobCardStyle';

const JobCardDetail = ({ details, ...defaultProps }: Props) => (
  <JobcardDetailWrapper {...defaultProps}>
    <ul>
      <For each="data" of={details} index="index">
        <If condition={data !== ''}>
          <div>
            <IconHolder>
              <Icon name="dot" color="#c6c6c6" />
            </IconHolder>
            <li key={data + index}>
              { data }
            </li>
          </div>
        </If>
      </For>
    </ul>
  </JobcardDetailWrapper>
);

type Props = {
  details: Array,
}

export default JobCardDetail;
