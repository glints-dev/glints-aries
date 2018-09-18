/* @flow */

import React from 'react';
import Loading from '../Loading';
import { LinkBtn } from '../Style/ButtonStyle';

const LinkButton = ({ children, loading, ...defaultProps }: Props) => (
  <LinkBtn {...defaultProps}>
    {loading
      && <Loading className="loader" size="small" />
    }
    {children}
  </LinkBtn>
);

type Props = {
  theme: string,
  onClick: Function,
  children: React$Node,
  className: string,
  loading: boolean,
}

export default LinkButton;
