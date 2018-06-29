/* @flow */
import React, { Fragment } from 'react';
import { DetailWrapper } from './../Style/InformationStyle';

const Detail = (props: Props) => {
  const { children } = props;

  return (
    <Fragment>
        <DetailWrapper>{children}</DetailWrapper>
    </Fragment>
  );
}

export default Detail;
