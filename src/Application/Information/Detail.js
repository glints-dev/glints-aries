/* @flow */

import React from 'react';
import { DetailWrapper } from '../../Style/Application/InformationStyle';

const Detail = (props: Props) => {
  const {
    children,
    className,
  } = props;

  return (
    <DetailWrapper className={className}>
      {children}
    </DetailWrapper>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default Detail;
