import * as React from 'react';

import { Icon } from '../../General/Icon';

import { JobcardDescriptionWrapper } from '../../Style/Application/JobCardStyle';

const JobCardDescription: React.FunctionComponent<Props> = ({ description, time, ...defaultProps }) => (
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

export interface Props {
  description: string;
  time: React.ReactNode;
  isLinkAble?: boolean;
}

export default JobCardDescription;
