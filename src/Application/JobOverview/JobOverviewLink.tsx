import * as React from 'react';
import { JobOverviewLinkStyle } from '../../Style/Application/JobOverviewStyle';

const JobOverviewLink: React.FunctionComponent<Props> = (props) => {
  const { children, style, ...defaultProps } = props;
  return (
    <JobOverviewLinkStyle style={style} {...defaultProps}>
      {children}
    </JobOverviewLinkStyle>
  );
};

interface Props extends React.ComponentPropsWithoutRef<typeof JobOverviewLinkStyle> {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default JobOverviewLink;
