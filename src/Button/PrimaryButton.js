/* @flow */

import React from 'react';
import Loading from '../Loading';
import { PrimaryContainer, PrimaryBtn } from '../Style/ButtonStyle';

const PrimaryButton = ({
  id,
  children,
  theme,
  className,
  loading,
  ...defaultProps
}: Props) => (
  <PrimaryContainer theme={theme} className={className}>
    <PrimaryBtn className={`primaryButton ${className}`} id={id} theme={theme} {...defaultProps}>
      {loading
        && <Loading className="loader" size="small" />
      }
      {children}
    </PrimaryBtn>
  </PrimaryContainer>
);

type Props = {
  id: string,
  theme: string,
  children: React$Node,
  className: string,
  loading: boolean,
}

export default PrimaryButton;
