/* @flow */

import React from 'react';
import { Container } from '../Style/BadgeStyle';

const Badge = (props: Props) => {
  const {
    label,
    className,
    ...defaultProps
  } = props;

  return (
    <Container className={className} {...defaultProps}>
      {label}
    </Container>
  );
};

type Props = {
  label: string,
  className: string,
}

export default Badge;
