import * as React from 'react';

import classNames from 'classnames';

import { JobCardFooterWrapper } from '../../Style/Application/JobCardStyle';

const JobCardFooter: React.FunctionComponent<Props> = (props) => {
  const {
    children,
    className,
    ...defaultProps
  } = props;

  return (
    <JobCardFooterWrapper
      className={classNames('jobcard-footer', className)}
      role="presentation"
      aria-label="Job Card Footer"
      tabIndex={0}
      // totalItems={React.Children.count(children)}
      {...defaultProps}>
      {children}
    </JobCardFooterWrapper>
  );
};

export interface Props extends React.ComponentPropsWithoutRef<typeof JobCardFooterWrapper> {
  children: React.ReactNode;
  isLinkAble?: boolean;
}

export default JobCardFooter;
