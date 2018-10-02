import React from 'react';
import { JobOverviewLinkStyle } from '../../Style/Application/JobOverviewStyle';

const JobOverviewLink = (props: Props) => {
  const { children, style, ...defaultProps } = props;
  return (
    <JobOverviewLinkStyle style={style} {...defaultProps}>
      {children}
    </JobOverviewLinkStyle>
  );
};

type Props = {
  children: React$Node
}

export default JobOverviewLink;
