/* @flow */
import React from 'react';
import { InformationContainer } from './../Style/InformationStyle';

const Information = (props: Props) => {
  const { children } = props;

  return (
    <InformationContainer>
        {children}
    </InformationContainer>
  );
}

export default Information;
