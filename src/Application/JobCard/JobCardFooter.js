import React from 'react';

import { JobcardFooterWrapper } from '../../Style/Application/JobCardStyle';

const JobCardFooter = (props: Props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <JobcardFooterWrapper
      className={className}
      role="presentation"
      aria-label="Job Card Footer"
      tabIndex={0}
      totalItems={children.length}
      {...defaultProps}
    >
      {children}
    </JobcardFooterWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default JobCardFooter;
