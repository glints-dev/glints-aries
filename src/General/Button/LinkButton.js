/* @flow */

import React from 'react';
import { LinkBtn } from '../../Style/General/ButtonStyle';

const LinkButton = ({ children, ...defaultProps }: Props) => (
  <LinkBtn
    id="aries-linkbtn"
    {...defaultProps}
  >
    {children}
  </LinkBtn>
);

type Props = {
  children: React$Node,
  className: string,
}

export default LinkButton;
