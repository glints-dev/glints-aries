/* @flow */

import React from 'react';
import Loading from '../Loading';
import { SecondaryContainer, SecondaryBtn } from '../Style/ButtonStyle';

const SecondaryButton = ({
  children,
  className,
  loading,
  ...defaultProps
}: Props) => (

  <SecondaryContainer className={className}>
    <SecondaryBtn className={`${className} secondaryButton`} {...defaultProps}>
      {loading
        && <Loading className="loader" size="small" />
      }
      {children}
    </SecondaryBtn>
  </SecondaryContainer>
);

type Props = {
  children: React$Node,
  className: string,
  loading: boolean,
}

export default SecondaryButton;
