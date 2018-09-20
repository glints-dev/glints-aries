/* @flow */

import React, { Fragment } from 'react';
import { Container } from '../Style/HeadingStyle';

const Heading = (props: Props) => {
  const {
    className,
    children,
    ...defaultProps
  } = props;

  return (
    <Fragment>
      <Container className={className} {...defaultProps}>
        <span>
          {children}
        </span>
      </Container>
    </Fragment>
  );
};

type Props = {
  children: React$Node,
  className: string,
}

export default Heading;
