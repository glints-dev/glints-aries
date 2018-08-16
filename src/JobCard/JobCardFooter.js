import React from 'react';

import { Footer } from '../Style/JobCardStyle';

const JobCardFooter = ({ children, ...defaultProps }:Props) => (
  <Footer totalItems={children.length} {...defaultProps}>
    { children }
  </Footer>
);

type Props = {
  children: React$Node,
}

export default JobCardFooter;
