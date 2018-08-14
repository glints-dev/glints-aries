/* @flow */

import React from 'react';
import { Container } from '../Style/CheckboxStyle';

const Checkbox = (props: Props) => {
  const {
    id,
    label,
    className,
    ...defaultProps
  } = props;

  return (
    <Container className={className}>
      <input type="checkbox" id={id} {...defaultProps} />
      <label htmlFor={id}>
        {label}
      </label>
    </Container>
  );
};

type Props = {
  id: string,
  label: string,
  className: string,
}

export default Checkbox;
