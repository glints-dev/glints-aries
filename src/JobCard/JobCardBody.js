import React from 'react';

import { Body } from '../Style/JobCardStyle';

const JobCardBody = ({ children }:Props) => (
  <Body>
    {children}
  </Body>
);

type Props = {
  children: React$Node,
}

export default JobCardBody;
