/* @flow */
import React, { Fragment } from 'react';
import { DescriptionWrapper } from './../Style/InformationStyle';

const Description = (props: Props) => {
  const { children } = props;

  return (
    <Fragment>
        <DescriptionWrapper>{children}</DescriptionWrapper>
    </Fragment>
  );
}

export default Description;
