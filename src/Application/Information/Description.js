/* @flow */

import React, { Fragment } from 'react';
import { DescriptionWrapper } from '../../Style/InformationStyle';

const Description = (props: Props) => {
  const {
    children,
    className,
  } = props;

  return (
    <Fragment>
      <DescriptionWrapper className={className}>
        {children}
      </DescriptionWrapper>
    </Fragment>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default Description;
