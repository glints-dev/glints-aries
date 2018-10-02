/* @flow */

import React from 'react';
import { TitleWrapper } from '../../Style/Application/InformationStyle';

const Title = (props: Props) => {
  const {
    children,
    bold,
    className,
    ...defaultProps
  } = props;

  return (
    <TitleWrapper bold={bold} {...defaultProps}>
      {children}
    </TitleWrapper>
  );
};

type Props = {
  children: React$Node,
  bold: boolean,
  className: string,
}

export default Title;
