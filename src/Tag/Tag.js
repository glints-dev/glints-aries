/* @flow */

import React from 'react';
import { Container } from '../Style/TagStyle';

const Tag = (props: Props) => {
  const {
    label,
    className,
    children,
    ...defaultProps
  } = props;

  return (
    <Container className={className} {...defaultProps}>
      {label}
      {children}
    </Container>
  );
};

type Props = {
  children: React$Node,
  label: string,
  className: string,
}

export default Tag;
