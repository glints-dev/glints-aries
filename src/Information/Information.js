/* @flow */
import React from 'react';
import { InformationContainer } from './../Style/InformationStyle';

const Information = (props: Props) => {
  const { children,backGroundImageURL } = props;

  return (
    <InformationContainer backGroundImageURL={backGroundImageURL}>
      {children}
    </InformationContainer>
  );
}

type Props = {
  children: React$Node,
};

export default Information;
