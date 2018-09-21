/* @flow */

import React, { Fragment } from 'react';
import { Container } from '../../Style/BadgeStyle';

const Badge = (props: Props) => {
  const {
    label,
    className,
    ...defaultProps
  } = props;

  return (
    <Fragment>
      {label
        && (
          <Container className={className} {...defaultProps}>
            {label}
          </Container>
        )
      }
    </Fragment>
  );
};

type Props = {
  label: string,
  className: string,
}

export default Badge;
