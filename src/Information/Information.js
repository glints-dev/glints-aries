/* @flow */
import React from 'react';
import { InformationContainer } from './../Style/InformationStyle';

const Information = (props: Props) => {
  const { children, backGroundImageURL, hoverTextColor } = props;

  return (
    <InformationContainer 
      backGroundImageURL={backGroundImageURL}
      hoverTextColor={hoverTextColor}
    >
      {children}
    </InformationContainer>
  );
}

type Props = {
  children: React$Node,
};

export default Information;
