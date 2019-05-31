import * as React from 'react';

import classNames from 'classnames';

import { JobcardBodyWrapper } from '../../Style/Application/JobCardStyle';

const JobCardBody: React.FunctionComponent<Props> = (props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <JobcardBodyWrapper
      className={classNames('jobcard-body', className)}
      role="presentation"
      aria-label="Job Card Body"
      tabIndex={0}
      {...defaultProps}
    >
      {children}
    </JobcardBodyWrapper>
  );
};

export interface Props extends React.ComponentPropsWithoutRef<typeof JobcardBodyWrapper> {
  children: React.ReactNode;
  isLinkAble?: boolean;
}

export default JobCardBody;
