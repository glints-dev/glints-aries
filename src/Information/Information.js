/* @flow */
import React from 'react';
import { InformationContainer } from './../Style/InformationStyle';

const Heading = (props: Props) => {
  const { children } = props;

  return (
    <InformationContainer>
        {children}
    </InformationContainer>
  );
}

export default Heading;
