/* @flow */

import React from 'react';
import { InformationContainer } from '../Style/InformationStyle';

const Information = (props: Props) => {
  const { 
    children, 
    className,
    ...defaultProps
  } = props;

  return (
    <InformationContainer className={className} {...defaultProps}>
      {children}
    </InformationContainer>
  );
};

type Props = {
  children: React$Node,
  className: string,
};

export default Information;
