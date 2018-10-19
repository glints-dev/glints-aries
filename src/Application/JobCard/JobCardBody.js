import React from 'react';

import { JobcardBodyWrapper } from '../../Style/Application/JobCardStyle';

const JobCardBody = (props: Props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <JobcardBodyWrapper
      className={className}
      role="presentation"
      aria-label="Job Card Body"
      tabIndex={0}
      {...defaultProps}
    >
      {children}
    </JobcardBodyWrapper>
  );
};

type Props = {
  children: React$Node,
}

export default JobCardBody;
