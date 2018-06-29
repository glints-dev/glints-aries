/* @flow */
import React from 'react';
import { DetailWrapper } from './../Style/InformationStyle';

const Detail = (props: Props) => {
  const { children } = props;

  return (
    <DetailWrapper>{children}</DetailWrapper>
  );
}

type Props = {
  children: React$Node,
}

export default Detail;
