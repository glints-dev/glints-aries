import * as React from 'react';
import { JobOverviewHeaderStyle } from './JobOverviewStyle';

const JobOverViewHeader: React.FunctionComponent<Props> = props => {
  const { children, ...defaultProps } = props;

  return (
    <JobOverviewHeaderStyle {...defaultProps}>
      {children}
    </JobOverviewHeaderStyle>
  );
};

interface Props {
  children: React.ReactNode;
}

export default JobOverViewHeader;
