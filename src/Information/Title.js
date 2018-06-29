/* @flow */
import React, { Fragment } from 'react';
import { TitleWrapper } from './../Style/InformationStyle';

const Title = (props: Props) => {
  const { children, bold } = props;

  return (
    <TitleWrapper bold={bold}>{children}</TitleWrapper>
  );
}

type Props = {
  children: React$Node,
  bold?: boolean,
}

export default Title;
