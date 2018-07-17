/* @flow */

import React from 'react';
import { InformationContainer } from '../Style/InformationStyle';

const Information = (props: Props) => {
  const { 
    children, 
    className 
  } = props;

  return (
    <InformationContainer className={className}>
      {children}
    </InformationContainer>
  );
};

type Props = {
  children: React$Node,
  className: string,
};

export default Information;
