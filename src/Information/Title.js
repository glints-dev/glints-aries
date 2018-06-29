/* @flow */
import React, { Fragment } from 'react';
import { TitleWrapper } from './../Style/InformationStyle';

const Title = (props: Props) => {
  const { children, bold } = props;

  return (
    <Fragment>
        <TitleWrapper bold={bold}>{children}</TitleWrapper>
    </Fragment>
  );
}

export default Title;
