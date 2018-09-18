/* @flow */

import React from 'react';
import Loading from '../Loading';
import { DefaultBtn } from '../Style/ButtonStyle';

const DefaultButton = ({ children, loading, ...defaultProps }: Props) => (
  <DefaultBtn {...defaultProps}>
    {loading
      && <Loading className="loader" size="small" />
    }
    { children }
  </DefaultBtn>
);

type Props = {
  theme: string,
  loading: boolean,
  onClick: Function,
  children: React$Node,
  className: string,
}

export default DefaultButton;
