import * as React from 'react';
import { JobOverviewContainer } from '../../Style/Application/JobOverviewStyle';

import JobOverViewHeader from './JobOverViewHeader';
import JobOverviewLabel from './JobOverviewLabel';
import JobOverviewBody from './JobOverviewBody';
import JobOverviewHeading from './JobOverviewHeading';
import JobOverviewLink from './JobOverviewLink';
import JobOverviewInfo from './JobOverviewInfo';

const JobOverview: JobOverview = ({ children }) => (
  <JobOverviewContainer>
    {children}
  </JobOverviewContainer>
);

type JobOverview = React.FunctionComponent<Props> & {
  Header: typeof JobOverViewHeader;
  Body: typeof JobOverviewBody;
  Label: typeof JobOverviewLabel;
  Heading: typeof JobOverviewHeading;
  Link: typeof JobOverviewLink;
  Info: typeof JobOverviewInfo;
};

JobOverview.Header = JobOverViewHeader;
JobOverview.Body = JobOverviewBody;
JobOverview.Label = JobOverviewLabel;
JobOverview.Heading = JobOverviewHeading;
JobOverview.Link = JobOverviewLink;
JobOverview.Info = JobOverviewInfo;

interface Props {
  children: React.ReactNode;
}

export default JobOverview;
