/* @flow */

import React from 'react';
import { JobOverviewHeaderStyle } from '../../Style/Application/JobOverviewStyle';

const JobOverViewHeader = (props: Props) => {
  const {
    children,
    ...defaultProps
  } = props;

  return (
    <JobOverviewHeaderStyle {...defaultProps}>
      {children}
    </JobOverviewHeaderStyle>
  );
};

type Props = {
  children: React$Node,
};

export default JobOverViewHeader;
