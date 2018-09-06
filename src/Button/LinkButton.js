/* @flow */

import React from 'react';
import Loading from '../Loading';
import { LinkBtn } from '../Style/ButtonStyle';
import Label from '../Label';

const LinkButton = ({ children, loading, ...defaultProps }: Props) => (
  <LinkBtn>
    {loading
      && <Loading className="loader" size="small" />
    }
    <Label {...defaultProps}>
      {children}
    </Label>
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
