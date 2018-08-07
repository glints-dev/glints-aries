import React from 'react';

import { Footer } from '../Style/JobCardStyle';

const JobCardFooter = ({ children }:Props) => (
  <Footer>
    { children }
  </Footer>
);

type Props = {
  children: React$Node,
}

export default JobCardFooter;
