import React from 'react';

import { Footer } from '../Style/JobCardStyle';

const JobCardFooter = ({ children }:Props) => (
  <Footer totalItems={children.length}>
    { children }
  </Footer>
);

type Props = {
  children: React$Node,
}

export default JobCardFooter;
