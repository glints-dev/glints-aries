/* @flow */

import React, { Fragment } from 'react';
import { Container } from '../../Style/HeadingStyle';

const Heading = (props: Props) => {
  const {
    className,
    inline,
    children,
    ...defaultProps
  } = props;

  return (
    <Fragment>
      <Container className={className} inline={inline} {...defaultProps}>
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
  inline: boolean,
}

export default Heading;
